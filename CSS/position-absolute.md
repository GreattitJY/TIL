# inset

-   position : absolute를 줄 경우 부모 요소가 제공하는 영역을 기준으로 움직인다.

```css

<style>
    .box {
        width : 500px;
        height : 500px;
        /* 자식 요소의 기준이 되기 위해 static이 아닌 값을 준다. */
        position : relative;
    }

    .item {
        position : absolute;
        /* 아래처럼 네 방면에 0을 줄 경우 부모 영역을 모두 사용 가능한 상태가 된다.
        -> inset : 0을 사용해도 된다. */
        left : 0;
        rigth : 0;
        top : 0;
        bottom : 0;
        width : 100px;
        height : 100px;
        /* box의 정중앙에 정령된다. */
        margin : 0 auto;
    }
</style>
```

-   left, right, top, bottom 값을 변경하면서 확인해보자.

-   transform : translate()으로 정렬하기도 하지만 이런 방법도 있다.
