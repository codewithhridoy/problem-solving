/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countSubarraysWithAtMostKOddNumbers = (nums, k) => {
  if (k < 0) return 0;

  let [count, left, right, oddCount] = [0, 0, 0, 0];

  while (right < nums.length) {
    // Increment odd count if the current number is odd
    oddCount += nums[right] % 2 !== 0 ? 1 : 0;

    // If oddCount exceeds k, adjust the left pointer
    while (oddCount > k) {
      oddCount -= nums[left] % 2 !== 0 ? 1 : 0;
      left++;
    }

    // Count the subarrays ending at `right` with at most k odd numbers
    count += right - left + 1;
    right++;
  }

  return count;
};

function numberOfSubarrays(nums, k) {
  // The number of subarrays with exactly k odd numbers
  return countSubarraysWithAtMostKOddNumbers(nums, k) - countSubarraysWithAtMostKOddNumbers(nums, k - 1);
};