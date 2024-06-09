/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysDivByK = (nums, k) => {
  let result = 0;
  const remainderCount = new Array(k).fill(0);
  remainderCount[0] = 1;

  let prefixSumRemainder = 0;
  for (const num of nums) {
    prefixSumRemainder = (prefixSumRemainder + num % k + k) % k;
    result += remainderCount[prefixSumRemainder];
    remainderCount[prefixSumRemainder]++;
  }

  return result;
};