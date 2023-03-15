// 순열은 nPr로 순서가 중요

const getPermustations = (arr, selectNumber) => {
  const results = [];

  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermustations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);

    results.push(...attached);
  });
  return results;
};

console.log(getPermustations([1, 2, 3, 4], 3));
