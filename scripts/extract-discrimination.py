"""Extract verified CEEC natural-science item discrimination values."""

from __future__ import annotations

import json
import re
import subprocess
from pathlib import Path

import xlrd


ROOT = Path(__file__).resolve().parent.parent


def load_banks() -> dict[int, dict]:
    script = """
globalThis.window = {};
await import('./data/bank.js');
console.log(JSON.stringify(window.BANK));
"""
    result = subprocess.run(
        ["node", "--input-type=module", "-e", script],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    return {bank["year"]: bank for bank in json.loads(result.stdout)}


def record(year: int, question_no: int, discrimination: int, source: Path) -> tuple[str, dict]:
    return (
        f"學-{year}-{question_no}",
        {
            "value": discrimination / 100,
            "percent": discrimination,
            "verified": True,
            "source": {
                "label": f"大考中心 {year} 學年度自然科答對率及鑑別度表",
                "localFile": str(source.relative_to(ROOT)),
            },
        },
    )


def extract_xls(year: int, source: Path) -> dict[str, dict]:
    sheet = xlrd.open_workbook(source).sheet_by_name("自然")
    header_row = next(
        row for row in range(sheet.nrows)
        if "D" in [str(sheet.cell_value(row, col)).strip() for col in range(sheet.ncols)]
    )
    headers = [str(sheet.cell_value(header_row, col)).strip() for col in range(sheet.ncols)]
    indexes = {name: headers.index(name) for name in ("題號", "Ph", "Pl", "D")}
    extracted: dict[str, dict] = {}
    for row in range(header_row + 1, sheet.nrows):
        raw_no = str(sheet.cell_value(row, indexes["題號"])).replace("*", "").strip()
        raw_d = str(sheet.cell_value(row, indexes["D"])).strip()
        if not raw_no or not raw_d:
            continue
        try:
            question_no = int(float(raw_no))
            high = int(float(sheet.cell_value(row, indexes["Ph"])))
            low = int(float(sheet.cell_value(row, indexes["Pl"])))
            discrimination = int(float(raw_d))
        except (TypeError, ValueError):
            continue
        if discrimination != high - low:
            raise ValueError(f"{year}-{question_no}: D != Ph - Pl")
        key, value = record(year, question_no, discrimination, source)
        extracted[key] = value
    return extracted


def text_rows(source: Path) -> list[dict]:
    rows = []
    for line_no, line in enumerate(source.read_text(encoding="utf-8").splitlines(), start=1):
        match = re.match(r"^\s*\*?(\d+)\s+(-?\d+(?:\s+-?\d+){11,})\s*$", line)
        if not match:
            continue
        values = [int(match.group(1)), *[int(value) for value in match.group(2).split()]]
        rows.append({"line": line_no, "values": values})
    return rows


def candidate_block(rows: list[dict], start: int) -> list[dict]:
    block = [rows[start]]
    last_no = rows[start]["values"][0]
    for row in rows[start + 1 :]:
        question_no = row["values"][0]
        if question_no <= last_no:
            break
        if question_no > 100:
            break
        block.append(row)
        last_no = question_no
    return block


def extract_text(year: int, source: Path, bank: dict) -> dict[str, dict]:
    rows = text_rows(source)
    expected = {
        question["no"]: round(question["pass"] * 100)
        for question in bank["questions"]
        if isinstance(question.get("pass"), (int, float))
    }
    starts = [index for index, row in enumerate(rows) if row["values"][0] == min(expected)]
    candidates = []
    for start in starts:
        block = candidate_block(rows, start)
        score = sum(
            row["values"][1] == expected.get(row["values"][0])
            for row in block
            if row["values"][0] in expected
        )
        coverage = sum(row["values"][0] in expected for row in block)
        candidates.append((score, coverage, len(block), block))
    if not candidates:
        raise ValueError(f"{year}: no discrimination table candidate")
    score, coverage, _, block = max(candidates, key=lambda item: (item[0], item[1], item[2]))
    minimum_coverage = max(10, len(expected) // 2)
    if coverage < minimum_coverage:
        raise ValueError(f"{year}: only {coverage}/{len(expected)} official rows matched")

    valid_numbers = {question["no"] for question in bank["questions"]}
    extracted: dict[str, dict] = {}
    for row in block:
        values = row["values"]
        question_no = values[0]
        if question_no not in valid_numbers:
            continue
        high, low = values[2], values[3]
        discrimination = values[-5]
        if discrimination != high - low:
            raise ValueError(f"{year}-{question_no}: D != Ph - Pl at line {row['line']}")
        key, value = record(year, question_no, discrimination, source)
        extracted[key] = value
    print(f"DISCRIMINATION_EXTRACTED year={year} questions={len(extracted)} pass_matches={score}")
    return extracted


banks = load_banks()
all_records: dict[str, dict] = {}

source_91 = ROOT / "sources" / "official" / "91" / "91-answer-rates.txt"
all_records.update(extract_text(91, source_91, banks[91]))

for year in [92, 93, 94, 95, 96, 98, 99, 100]:
    source = ROOT / "sources" / "official" / str(year) / f"{year}-answer-rates.xls"
    records = extract_xls(year, source)
    print(f"DISCRIMINATION_EXTRACTED year={year} questions={len(records)}")
    all_records.update(records)

for year in range(102, 115):
    directory = ROOT / "sources" / "official" / str(year)
    sources = sorted(directory.glob("*work-report.txt")) + sorted(directory.glob("*gsat-report.txt"))
    if len(sources) != 1:
        raise ValueError(f"{year}: expected one official report text, got {len(sources)}")
    all_records.update(extract_text(year, sources[0], banks[year]))

output = (
    "window.LEARNING_DATA = window.LEARNING_DATA || {};\n"
    f"window.LEARNING_DATA.discrimination = {json.dumps(all_records, ensure_ascii=False, indent=2)};\n"
)
(ROOT / "data" / "discrimination.js").write_text(output, encoding="utf-8")
print(f"DISCRIMINATION_OK questions={len(all_records)}")
