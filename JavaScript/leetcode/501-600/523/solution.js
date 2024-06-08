/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function checkSubarraySum(nums, k) {
  // Map to store the first occurrence of a remainder
  let remainderMap = new Map();
  remainderMap.set(0, -1); // This accounts for cases where subarray from beginning sums to multiple of k
  let prefixSum = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    if (k !== 0) {
      prefixSum %= k;
    }

    if (remainderMap.has(prefixSum)) {
      if (i - remainderMap.get(prefixSum) > 1) {
        return true;
      }
    } else {
      remainderMap.set(prefixSum, i);
    }
  }

  return false;
}