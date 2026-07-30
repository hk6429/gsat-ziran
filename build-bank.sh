#!/bin/sh
set -eu
cd "$(dirname "$0")"

{
  echo "// 自動合併：由 build-bank.sh 從 data/n*.js 產生，勿直接編輯。"
  echo "window.BANK = window.BANK || [];"
  for file in data/n*.js; do
    cat "$file"
    echo
  done
} > data/bank.js

printf 'BUILD_BANK=PASS bytes=%s\n' "$(wc -c < data/bank.js | tr -d ' ')"
