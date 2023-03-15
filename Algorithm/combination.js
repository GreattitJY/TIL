// nCr 조합 알고리즘 (재귀햠수)
// 조합은 순서가 상관이 없다. (중복 x)

const getCombinations = (arr, selectNumber) => {
  const results = [];

  // 배열 중 1개를 선택한 경우 모든 요소를 1개짜리 배열에 담아 retrun
  if (selectNumber === 1) return arr.map((el) => [el]);

  // 1) 한 요소를 fixed한 후 나머지를 조합해서 붙인다.
  arr.forEach((fixed, index, origin) => {
    // 2) fixed를 제외한 나머지 배열 구하기
    const rest = origin.slice(index + 1);
    // 3) 나머지 배열 조합하기
    const combinations = getCombinations(rest, selectNumber - 1);
    // 4) fixed와 나머지 조합 합치기
    const attached = combinations.map((combination) => [fixed, ...combination]);
    // 합친 조합을 배열에 추가
    results.push(...attached);
  });
  return results;
};

const sample = [1, 2, 3, 4];
const res = getCombinations(sample, 3);
console.log(res);

/* ----------------- 응용 --------------*/

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(nums) {
  const combinationResult = getCombinations(nums, 3);
  let answer = 0;
  combinationResult.forEach((e) => {
    const sum = e[0] + e[1] + e[2];
    if (isPrime(sum)) answer++;
  });
  return answer;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 7, 6, 4];

console.log(solution(arr1));
console.log(solution(arr2));
