# ๐ 2์ฃผ์ฐจ ๊ฐ์

## ๐HTML Standard Living

### `<Form>` ๋์ ๋ฐฉ์

<hr>

-  ๋ก์ปฌ

   -  ๋จ์  : ํธ๋ํฝ ํ์ฅ์ด ์ด๋ ค์, ์๋ฒ ํ์ฅ์ด ์ด๋ ต๊ณ  ๋ค์ด์ค๋ ํธ๋ํฝ ์ ํ(๋์ญํญ bandwidth์ ๋ฌธ์ ), ์ ์ (ํด๋ผ์ฐ๋ ์๋ฒ ๊ฐ์ ๊ฒฝ์ฐ UPS)
   -  ์ฅ์  : ๋น์ฉ(์ ๊ธฐ์ธ + ์ธํฐ๋ท)

-  ํด๋ผ์ฐ๋

   -  ๋จ์  : ๋น์ฉ
   -  ์ฅ์  : ์๋ฒ ํ์ฅ ๋ฐ ์ด์ , IP ํ ๋น, ๋๋ฉ์ธ ์ฐ๊ฒฐ, HTTPS ์ธ์ฆ์ด ์ฝ๋ค.

-  Server

   -  ์๋น(24์๊ฐ ๋์๊ฐ๋ ์ปดํจํฐ, ๋๋ถ๋ถ IP ์ฐ๊ฒฐ)

-  Web Server

   -  ์ ์  ํ์ผ์ ์๋น(PHP์ ๊ฐ์ ํ๋ก๊ทธ๋๋ฐ ์ธ์ด๋ ์ฒ๋ฆฌํ๊ธด ํ๋ค...)

-  App Server

   -  ๋๋ ์ญํ  (์์ด๋, ๋น๋ฐ๋ฒํธ ๋ฑ ๋ฐ์ดํฐ ์ฒ๋ฆฌ)

-  DB

   -  ๋ฐ์ดํฐ ์ ์ฅ(์ด๋ฏธ์ง์ ๊ฐ์ ๊ฒฝ์ฐ์๋ ์ด๋ฏธ์ง ๊ฒฝ๋ก๋ง ์ ์ฅ. ์ด๋ฏธ์ง๋ ๋ณดํต ์คํ ๋ฆฌ์ง์ ์ ์ฅ)

-  ์ฐธ๊ณ  ๋งํฌ
   > [๋ฐ์ดํฐ ๋จ์ '๋ฐ์ดํธ'๋?](https://semiconductor.samsung.com/kr/support/tools-resources/dictionary/bits-and-bytes-units-of-data/?awc=18739_1662510266_a84ccee6688a44f70015231caf7bed72&cid=at_pd_affiliate_none_none_none_none_none_online-shop_none)

### `<Form>` ์์ฑ

<hr>

-  GET
   -  URL๋ก ๋ฐ์ดํฐ๋ฅผ ์ ๋ฌํ  ๋ ์ฌ์ฉ(file๊ฐ์ ํฐ ํ์ผ์ GET์ผ๋ก ์ ์กํ์ง ์๋๋ค. id์ pw๊ฐ์ ๋ฏผ๊ฐ ๋ฐ์ดํฐX)
-  POST
   -  ํจํท ์์ ๋ฐ์ดํฐ๋ฅผ ๋ฃ์ด ์ ๋ฌํ  ๋ ์ฌ์ฉ(๋ฏผ๊ฐ ๋ฐ์ดํฐO, ํฐ ๋ฐ์ดํฐO)
-  GET, POST ๋ฐฉ์์ผ๋ก ๋ค์ด์จ ๊ฑธ ์๋ฒ์์ ๊ด๋ฆฌํ  ์ ์๋ค.(๋ฐฑ์๋์์ ๊ด๋ฆฌ)

-  ์ ํจ์ฑ ๊ฒ์ฆ์ ํ๋ก ํธ, ๋ฐฑ์๋ ๋ค ํ์ํ๋ค.

-  ๊ฐ๋ฐ๋์ด ์๋ ๋ฐํด๋ฅผ ์๋ก ๋ง๋ค์ง ๋ง์

-  min-lenght

   -  ๋น๋ฐ๋ฒํธ ์๋ ฅ ์ ๋น์นธ์ผ๋ก ๋์ด๊ฐ์ง ์๊ฒ ํ๊ธฐ ์ํด์

-  ์คํผ๋ UI

   -  num์์ ํ์ดํ ์์๋

-  ๋ก๊ทธ์ธ, ์ฝ๊ด๋์, ํ์๊ฐ์ ํผ์ ์๋ ๊ฑธ ์ฌ์ฉ

   -  [fieldset ์์ ](https://github.com/paullabkorea/FrontendSchool_1/tree/main/html)

-  ์ฐธ๊ณ  ๋งํฌ
   > [Editor](https://ui.toast.com/tui-editor)

### Tabula Data

<hr>

-  `<tbody>`๋ ๋ฐ๋์ `<thead>`๊ฐ ์์ด์ผ ํ๋ค.
-  UI๋ฅผ ๋ง๋ค ๋๋ `<table>`์ ์ ์ฐ์ง ์๋๋ค.

-  scope๋ ์คํฌ๋ฆฐ ๋ฆฌ๋๊ธฐ์์ ์ฝ์ ๋ฐฉํฅ์ ์ง์ ํ๋ ์ญํ ์ ํ๋ค.

## ๐CSS

<hr>

-  ์๋ ํฐ, ํ๋กํผํฐ, ๋ฐธ๋ฅ ์ธ์ฐ๊ธฐ! <br>
   ![์ฐธ๊ณ ](./images/์๋ ํฐ.png)

#### ๐๊ธฐํ

<hr>

-  ์ธํฐ๋ท์ฐฝ์์ ๋ฐฐ์ ์ค์  ๋ฐฉ๋ฒ

   -  document.getElementsByTagName("video")[0].playbackRate = 2.5;

-  ํฐํธ ํธ๋ํฝ ๋ฌธ์ 
   1. ์ ์ฌ์ฉ๋์ง ์๋ ํฐํธ๋ ์ด๋ฏธ์งํ
   2. ๋ง์ด ์ฌ์ฉ๋์ง ์๋ ํฐํธ๋ ๊ฒฝ๋ํ
   3. ๋ง์ด ์ฌ์ฉ๋๋ ํฐํธ๋ CDN์ ์ฌ์ฉํ๊ธฐ ๋ณด๋ค๋ ๋ด๋ถ API ์๋ฒ๋ ๋ก์ปฌ ์๋ฒ์ ์๋น

<hr>

## ๐CSS ํน๊ฐ

<hr>

-  `<br>`์ ๋๋๋ก ์ฐ์ง ์๋๋ก ํ์

   -  ์์ฐ์ค๋ฌ์ด ์ค๋ฐ๊ฟ์ ์ถ๊ตฌํ์

-  class๋ช์ ์ผ๋ฐํ๋ฅผ ํตํด์ ๋ณดํธ์ ์ธ ์ด๋ฆ์ผ๋ก ๋ง๋ค๊ธฐ

   -  ๊ฒน์น๊ธฐ ์ฌ์ด ์ผ๋ฐํ๋ ํผํ๊ธฐ

-  ๋ชจ๋  ์ด๋ฏธ์ง๋ฅผ ๋งํฌ์์ผ๋ก ๋ฃ๋ ๊ฑด ์๋๋ค.

   -  ์ค์๋๊ฐ ๋จ์ด์ง๋ ์ ์  ์ด๋ฏธ์ง๋ ๋ฐฑ๊ทธ๋ผ์ด๋ ์ด๋ฏธ์ง๋ก ๋ฃ์ด๋ ๋๋ค.

-  block level element์ block level element์ ์ธ์ ํด์๋ ์ํ๋จ ๋ง์ง์ ๋ณํฉ์ด ์๋๋์ด ์๋ค. (์ค์ง ๋ธ๋ก ์์๋ง)
   -  ํ์ชฝ ๋ง์ง์ด ๋ ํฌ๋ค๋ฉด ํฐ ์ชฝ์ผ๋ก ๊ฒฐ์ ๋๋ค.
   -  inline element์ ์ข์ฐ๋ ํด๋น๋์ง ์๋๋ค.
   -  ๋ง์ง ๋ณํฉ์ ํธ๋ ๋ฒ : display:flow-root, padding ๋ฑ
