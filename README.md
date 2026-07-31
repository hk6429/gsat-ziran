# 學測自然題庫

免費、免註冊的大學學測自然科考古題分類練習網站。目前完整收錄 83–115 學年度自然考科：

- 全卷共 2,181 題
- 選擇題 2,140 題，逐題比對大考中心官方參考答案
- 非選擇題 41 題，提供大考中心滿分參考答案與評分要點
- 物理、化學、生物、地球科學、跨科整合五個主分類
- 1,150 題官方整題答對率或可直接確認的單選題答對率、年份與難度篩選、查題校對、本機作答紀錄
- 已完成 1,648 題逐題專屬的國中補救教學解析，由地科、物理、化學、生物教師逐題覆核，含全部 41 題非選擇題與 37 題跨科整合選擇題
- 91–115 學年度共 1,608 題官方全體、高分組、低分組選項畫記率；數值直接轉錄官方資料，不由整題答對率反推
- 首頁提供今日複習、錯題本、學習歷程、整回模考與教師出卷模式

## 官方資料來源

- [大考中心學測歷年一般試題](https://www.ceec.edu.tw/xmfile?xsmsid=0j052424829869345634)
- 83–115 學測自然試題與選擇題參考答案、111–115 非選擇題評分原則，以及大考中心有公布的 91–115 選項分析

原始 PDF 與文字抽取檔按年份保存在 `sources/official/{year}/`。題面圖片由官方原卷轉製，放在 `img/official/{year}/`。

## 專案結構

```text
data/n83.js～data/n115.js     各年度結構化題庫
data/bank.js                  前端使用的多年份合併資料
data/learning.js              官方選項畫記率資料
data/explanations-*.js        四科教師覆核的補救教學解析
scripts/extract-option-stats.py 由 91–101 年官方 PDF／XLS 重建選項畫記率
scripts/extract-report-option-stats.mjs 由 102–114 年官方工作報告重建選項畫記率
scripts/build-learning-data.mjs 合併官方選項畫記率
scripts/build-n83.mjs         重建 83 年題庫資料
scripts/build-n84.mjs         重建 84 年題庫資料
scripts/build-n85.mjs         重建 85 年題庫資料
scripts/build-n86.mjs         重建 86 年題庫資料
scripts/build-n87.mjs         重建 87 年題庫資料
scripts/build-n88.mjs         重建 88 年題庫資料
scripts/build-n89.mjs         重建 89 年題庫資料
scripts/build-n90.mjs         重建 90 年題庫資料
scripts/build-n91.mjs         重建 91 年題庫資料
scripts/build-n92.mjs         重建 92 年題庫資料
scripts/build-n93.mjs         重建 93 年題庫資料
scripts/build-n94.mjs         重建 94 年題庫資料
scripts/build-n95.mjs         重建 95 年題庫資料
scripts/build-n96.mjs         重建 96 年題庫資料
scripts/build-n97.mjs         重建 97 年題庫資料
scripts/build-n98.mjs         重建 98 年題庫資料
scripts/build-n99.mjs         重建 99 年題庫資料
scripts/build-n100.mjs        重建 100 年題庫資料
scripts/build-n101.mjs        重建 101 年題庫資料
scripts/build-n102.mjs        重建 102 年題庫資料
scripts/build-n103.mjs        重建 103 年題庫資料
scripts/build-n104.mjs        重建 104 年題庫資料
scripts/build-n105.mjs        重建 105 年題庫資料
scripts/build-n106.mjs        重建 106 年題庫資料
scripts/build-n107.mjs        重建 107 年題庫資料
scripts/build-n108.mjs        重建 108 年題庫資料
scripts/build-n109.mjs        重建 109 年題庫資料
scripts/build-n110.mjs        重建 110 年題庫資料
scripts/build-n111.mjs        重建 111 年題庫資料
scripts/build-n112.mjs        重建 112 年題庫資料
scripts/build-n113.mjs        重建 113 年題庫資料
scripts/build-n114.mjs        重建 114 年題庫資料
scripts/build-n115.mjs        重建 115 年題庫資料
sources/official/{year}/      官方 PDF、答案與來源紀錄
img/official/{year}/          官方原卷頁面影像
index.html / app.js           練習介面
check.html / check.js         查題校對介面
```

## 本機執行

這是原生 HTML、CSS 與 JavaScript 靜態網站。可使用任一靜態檔案伺服器：

```sh
npx serve .
```

## 重建資料

年度建置腳本會以公開題庫頁輔助轉錄文字；正式題面、答案與統計仍以專案中的大考中心官方 PDF 為準。

```sh
npm run build:data
```

## 驗證

```sh
npm test
```

驗證包含題數、題號、答案格式、官方頁面影像、非選擇題參考答案、分類控制詞與 HTML 關鍵資產。

## 部署

目標平台：

- Vercel：`gsat-ziran.vercel.app`
- Cloudflare Pages：`gsat-ziran.pages.dev`
- Netlify：`gsat-ziran.netlify.app`

部署前必須先執行 `npm test`，並在三個正式網址做 cache-busting 煙霧驗收。

## 授權與聲明

網站程式碼可依 GitHub repository 的授權條款使用。考試題目、答案與統計資料的權利歸原發布單位所有；本站為非營利學習整理，並非大考中心官方網站。
