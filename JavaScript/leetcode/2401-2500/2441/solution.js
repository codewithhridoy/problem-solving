/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxK = function (nums) {
  let maxK = -1;
  const numSet = new Set(nums);

  for (const num of nums) {
    if (num > 0 && numSet.has(-num)) {
      maxK = Math.max(maxK, num);
    }
  }

  return maxK;
};