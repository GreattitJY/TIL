# flex-wrap

-   flex-wrap : no-wrap은 자식 요소들의 전체 크기가 부모 영역을 넘어가지 않으면 자기 자신의 크기를 유지하며, 크기가 더 클 경우 일정한 비율로 줄어든다.(flex 성질)

-flex-wrap : wrap은 자식 요소의 크기가 부모 영역을 넘어가면 다음 줄로 정렬해준다.

```CSS
    .container {
        display : flex;
        /* 기본값 */
        /* flex-wrap : nowrap */
        flex-wrap : wrap
        witdh : 500px
    }

    .item {
        width : 150px;
        heigth : 150px;
    }
```

```html
<div class="container">
    <div class="item">item</div>
    <div class="item">item</div>
    <div class="item">item</div>
    <div class="item">item</div>
    <div class="item">item</div>
</div>
```
