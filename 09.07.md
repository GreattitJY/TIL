# 📝 2주차 강의

## 📎HTML Standard Living

### `<Form>` 동작 방식

<hr>

-  로컬

   -  단점 : 트래픽 확장이 어려움, 서버 확장이 어렵고 들어오는 트래픽 제한(대역폭 bandwidth의 문제), 정전(클라우드 서버 같은 경우 UPS)
   -  장점 : 비용(전기세 + 인터넷)

-  클라우드

   -  단점 : 비용
   -  장점 : 서버 확장 및 이전, IP 할당, 도메인 연결, HTTPS 인증이 쉽다.

-  Server

   -  서빙(24시간 돌아가는 컴퓨터, 대부분 IP 연결)

-  Web Server

   -  정적 파일을 서빙(PHP와 같은 프로그래밍 언어도 처리하긴 한다...)

-  App Server

   -  두뇌 역할 (아이디, 비밀번호 등 데이터 처리)

-  DB

   -  데이터 저장(이미지와 같은 경우에는 이미지 경로만 저장. 이미지는 보통 스토리지에 저장)

-  참고 링크
   > [데이터 단위 '바이트'란?](https://semiconductor.samsung.com/kr/support/tools-resources/dictionary/bits-and-bytes-units-of-data/?awc=18739_1662510266_a84ccee6688a44f70015231caf7bed72&cid=at_pd_affiliate_none_none_none_none_none_online-shop_none)

### `<Form>` 속성

<hr>

-  GET
   -  URL로 데이터를 전달할 때 사용(file같은 큰 파일은 GET으로 전송하지 않는다. id와 pw같은 민감 데이터X)
-  POST
   -  패킷 안에 데이터를 넣어 전달할 때 사용(민감 데이터O, 큰 데이터O)
-  GET, POST 방식으로 들어온 걸 서버에서 관리할 수 있다.(백엔드에서 관리)

-  유효성 검증은 프론트, 백엔드 다 필요하다.

-  개발되어 있는 바퀴를 새로 만들지 말자

-  min-lenght

   -  비밀번호 입력 시 빈칸으로 넘어가지 않게 하기 위해서

-  스피너 UI

   -  num에서 화살표 위아래

-  로그인, 약관동의, 회원가입 폼은 있는 걸 사용

   -  [fieldset 예제](https://github.com/paullabkorea/FrontendSchool_1/tree/main/html)

-  참고 링크
   > [Editor](https://ui.toast.com/tui-editor)

### Tabula Data

<hr>

-  `<tbody>`는 반드시 `<thead>`가 있어야 한다.
-  UI를 만들 때는 `<table>`을 잘 쓰지 않는다.

-  scope는 스크린 리더기에서 읽을 방향을 지정하는 역할을 한다.

## 📎CSS

<hr>

-  셀렉터, 프로퍼티, 밸류 외우기! <br>
   ![참고](./images/셀렉터.png)

#### 📌기타

<hr>

-  인터넷창에서 배속 설정 방법

   -  document.getElementsByTagName("video")[0].playbackRate = 2.5;

-  폰트 트래픽 문제
   1. 잘 사용되지 않는 폰트는 이미지화
   2. 많이 사용되지 않는 폰트는 경량화
   3. 많이 사용되는 폰트는 CDN을 사용하기 보다는 내부 API 서버나 로컬 서버에 서빙

<hr>

## 📎CSS 특강

<hr>

-  `<br>`은 되도록 쓰지 않도록 하자

   -  자연스러운 줄바꿈을 추구하자

-  class명은 일반화를 통해서 보편적인 이름으로 만들기

   -  겹치기 쉬운 일반화는 피하기

-  모든 이미지를 마크업으로 넣는 건 아니다.

   -  중요도가 떨어지는 정적 이미지는 백그라운드 이미지로 넣어도 된다.

-  block level element와 block level element의 인접해있는 상하단 마진은 병합이 의도되어 있다. (오직 블록 요소만)
   -  한쪽 마진이 더 크다면 큰 쪽으로 결정된다.
   -  inline element와 좌우는 해당되지 않는다.
   -  마진 병합을 푸는 법 : display:flow-root, padding 등
