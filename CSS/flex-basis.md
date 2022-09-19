# flex-basis

-   주의 사항 : width와 flex-basis를 같은 값을 주면 width가 우선시 된다. 주의. 주의.
    -   기본적으로 witdh와 flex-basis 값이 다른 경우엔 flex-basis가 우선시 된다.

1. 주축에 따라 basis가 넓이가 되기도 하고, 높이가 되기도 한다.

```CSS
    flex-basis: 150px;
```

2. 서로 다른 2개의 값이 있었을 때 basis의 값을 우선시 한다.

```CSS
    flex-basis: 150px;
    width: 100px;
```

3. 서로 값이 같을 경우 width의 값이 강제된다.

```CSS
    width: 100px;
    flex-basis: 100px;
```
