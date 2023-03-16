const check = (sqrt, n) => {
  let count = 0;
  let tmp = 0;
  while (tmp !== n) {
    for (let i = sqrt; i >= 1; i--) {
      let multi = i * i;
      tmp += multi;
      if (tmp > n) {
        tmp -= multi;
        count--;
      }
      count++;
      if (tmp === n) {
        break;
      }
    }
  }
  return count;
};

function solution(n) {
  const sqrt = parseInt(Math.sqrt(n));
  let res = [];

  for (let i = sqrt; i >= 1; i--) {
    let tmp = 0;
    let multi = i * i;
    let count = 0;
    while (tmp < n) {
      tmp += multi;
      count++;
      if (tmp === n) {
        res.push(count);
      }
    }
  }

  for (let i = sqrt; i >= 1; i--) {
    res.push(check(i, n));
  }

  return res.sort((a, b) => a - b)[0];
}

console.log(solution(1));
1; // 1
console.log(solution(3));
3; // 1 1 1
console.log(solution(5));
2; // 1 2
console.log(solution(7));
4; // 1 1 1 2
console.log(solution(11));
3; // 3 1 1
console.log(solution(13));
2; // 3 2
console.log(solution(17));
2;
