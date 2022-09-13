# 📝 CSS

-   오늘의 한 마디
    -   개행을 디자인 목적(의미 없이)으로 사용하면 `<span>`을 쓰고 의미상 개행이면 `<br>`을 쓰도록 하자.
    -   벤더프리픽스를 사용해서 다른 브라우저에서 적용되는지 꼭 확인하기.
    -   정리는 메모장에 적은 것을 다시 노트에 필기하는 것을 추천
        -   실무에서 인터넷을 사용하지 못할 때 큰 도움이 된다.
    -   CSS는 방대하기 때문에 다 외우는 것이 아니라 그때 그때 필요한 것을 검색해서 습득하는 것
        -   궁긍하면 개발자 도구 열어서 확인.

## 📎 Box Model

<hr>

-   마진병합현사은 대부분 문제로 여겨지지 않는다.

    -   병합현상 해결하는 방법
        > ```css
        > overflow: hidden;
        > display: inline-block;
        > border를 목적에 맞지 않게 사용하는 것은 비추천
        > border: 1px solid black;
        > 아래 방법은 IE에서 지원하지 않아 비추천
        > display: flow-root;
        > ```

-   body에 준 요소가 왜 html을 넘어서 영향을 주는지 고민해 보기.

## 📎 background-image

<hr>

-   `<body>`에서 background-attachment:fixed;를 하면 기준이 뷰포트가 된다. (전체창)

-   overflow : visible이 아닌 값이 들어가면 **독립적인** 하나의 페이지로 인식해서 부모-자식 간의 마진병합이 해결된다.

    -   원래 용도는 아니지만 디자인 요소로 사용
    -   block fomat context

-   img와 background-image는 어디에서 쓰여야 할까?
    -   img는 백엔드 개발자와 협업할 때, background-img는 프론트 개발자가 혼자 작업하는 경우
    -   스크린 리더가 읽어야 하는 경우는 img
-   background-img는 width와 height가 있어야 나타난다.

-   no-repeat, center, cover를 많이 사용한다.

## 📎 font

<hr>

-   Bootstrap Icons
    -   디자이너 없이 웹사이트를 만들 때 유용

## 📎 color

<hr>

-   색상을 표현할 때 16진수를 사용

    -   R G B는 각각 00 00 00
    -   (예시) FF 00 00 - RED
        -   반복되는 자릿수를 F00이렇게 표현도 가능

-   투명도도 검색해서 넣을 수 잇음
    -   [hexcolortool](https://www.hexcolortool.com/)
    -   대부분 디자이너가 결정

## 📎 text

<hr>

-   line-height를 숫자만 줬을 경우 폰트 사이즈 x 숫자 만큼의 영역을 차지한다.
