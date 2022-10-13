# nullish(??)

-   널리쉬 연산자는 0을 입력받지만 or 연산자는 0을 fals로 보고 뒤에 있는 값으로 넘어간다.

-   앞의 값이 undefined인 경우 뒤에 있는 값을 넣는다.

```
let result1; // undefined
let result2 = result1 ?? 100 // 100이 입력

let result3 = 0;
let result4 = result3 ?? 100 // 0이 입력

let result5 = 0;
let result6 = result5 || 100 // 100d이 입력
```
