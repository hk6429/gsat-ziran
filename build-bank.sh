#!/bin/bash
# 把 data/ 逐年題庫合併成單一 data/bank.js（減少 32 個 HTTP 請求 → 1 個）
# 改任何 data/g*.js 或 data/z*.js 後，重跑此腳本再部署
cd "$(dirname "$0")"
{
  echo "// 自動合併：由 build-bank.sh 從 data/g*.js + data/z*.js 產生，勿手改。改題請改個別檔後重跑腳本。"
  echo "window.BANK = window.BANK || [];"
  for y in $(seq 114 -1 103); do cat "data/g${y}.js"; echo; done
  for y in $(seq 110 -1 91); do cat "data/z${y}.js"; echo; done
} > data/bank.js
echo "bank.js 生成完成：$(wc -c < data/bank.js) bytes"
