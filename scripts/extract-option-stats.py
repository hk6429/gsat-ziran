"""Extract official CEEC natural-science option-selection rates for 91–101."""

from __future__ import annotations

import json
import re
import subprocess
import tempfile
from pathlib import Path

import xlrd


ROOT = Path(__file__).resolve().parent.parent
OPTION_KEYS = "ABCDEFGHIJ"
GROUP_NAMES = {"T": "all", "H": "high", "L": "low"}


def number(value: object) -> int:
    text = str(value).replace("*", "").strip()
    if not text:
        raise ValueError("official statistics cell is blank")
    return int(float(text))


def group_from_cells(cells: list[object]) -> dict[str, object]:
    values: dict[str, int] = {}
    for index, key in enumerate(OPTION_KEYS, start=3):
        text = str(cells[index]).strip() if index < len(cells) else ""
        if text:
            values[key] = number(text)
    return {"unanswered": number(cells[2]), "options": values}


def extract_xls(year: int, filename: str | None = None) -> dict[str, object]:
    source = (
        ROOT
        / "sources"
        / "official"
        / str(year)
        / (filename or f"{year}-option-analysis.xls")
    )
    sheet = xlrd.open_workbook(source).sheet_by_name("自然")
    extracted: dict[str, object] = {}
    row = 0
    while row < sheet.nrows:
        cells = [sheet.cell_value(row, column) for column in range(sheet.ncols)]
        if str(cells[1]).strip() != "T":
            row += 1
            continue
        question_no = int(float(str(cells[0]).replace("*", "").strip()))
        groups: dict[str, object] = {}
        for offset, expected in enumerate(("T", "H", "L")):
            group_cells = [
                sheet.cell_value(row + offset, column) for column in range(sheet.ncols)
            ]
            actual = str(group_cells[1]).strip()
            if actual != expected:
                raise ValueError(
                    f"{year} question {question_no}: expected {expected}, got {actual}"
                )
            groups[GROUP_NAMES[expected]] = group_from_cells(group_cells)
        extracted[str(question_no)] = {"groups": groups}
        row += 3
    if len(extracted) != 68:
        raise ValueError(f"{year}: expected 68 questions, got {len(extracted)}")
    return extracted


def extract_pdf_91() -> dict[str, object]:
    source = ROOT / "sources" / "official" / "91" / "91-option-analysis.pdf"
    with tempfile.NamedTemporaryFile(suffix=".txt") as text_file:
        subprocess.run(
            ["pdftotext", "-layout", str(source), text_file.name],
            check=True,
        )
        text = Path(text_file.name).read_text(encoding="utf-8")

    rows: list[tuple[str, list[int]]] = []
    for line in text.splitlines():
        match = re.search(r"(?:^|\s)(T|H|L)\s+(.+)$", line)
        if not match:
            continue
        values = [
            int(item.group(1))
            for item in re.finditer(r"\*?\s*(\d+)", match.group(2))
        ]
        if len(values) >= 5:
            rows.append((match.group(1), values[:11]))
    if len(rows) != 68 * 3:
        raise ValueError(f"91: expected 204 group rows, got {len(rows)}")

    extracted: dict[str, object] = {}
    for index in range(68):
        triple = rows[index * 3 : index * 3 + 3]
        if [group for group, _ in triple] != ["T", "H", "L"]:
            raise ValueError(f"91 question {index + 1}: group order is invalid")
        groups: dict[str, object] = {}
        for group, values in triple:
            groups[GROUP_NAMES[group]] = {
                "unanswered": values[0],
                "options": {
                    key: values[position + 1]
                    for position, key in enumerate(OPTION_KEYS)
                },
            }
        extracted[str(index + 1)] = {"groups": groups}
    return extracted


def write_year(
    year: int, data: dict[str, object], source_filename: str | None = None
) -> None:
    destination = (
        ROOT / "sources" / "official" / str(year) / f"{year}-option-analysis.json"
    )
    destination.write_text(
        json.dumps(
            {
                "year": year,
                "subject": "自然",
                "metric": "selectionRate",
                "unit": "percent",
                "sourceFile": (
                    f"sources/official/{year}/{source_filename}"
                    if source_filename
                    else f"sources/official/{year}/{year}-option-analysis."
                    + ("pdf" if year == 91 else "xls")
                ),
                "questions": data,
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    print(f"OPTION_STATS_EXTRACTED year={year} questions={len(data)}")


write_year(91, extract_pdf_91())
for current_year in range(92, 97):
    write_year(current_year, extract_xls(current_year))
write_year(97, extract_xls(97, "97-answer-rates.xls"), "97-answer-rates.xls")
for current_year in range(98, 102):
    write_year(current_year, extract_xls(current_year))
