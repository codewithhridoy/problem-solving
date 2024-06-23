/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
function longestSubarray(nums, limit) {
  let maxDeque = [];
  let minDeque = [];
  let left = 0;
  let result = 0;

  for (let right = 0; right < nums.length; right++) {
    // Maintain the maxDeque for the maximum value in the current window
    while (maxDeque.length && nums[maxDeque[maxDeque.length - 1]] <= nums[right]) {
      maxDeque.pop();
    }
    maxDeque.push(right);

    // Maintain the minDeque for the minimum value in the current window
    while (minDeque.length && nums[minDeque[minDeque.length - 1]] >= nums[right]) {
      minDeque.pop();
    }
    minDeque.push(right);

    // Check if the current window is valid
    while (nums[maxDeque[0]] - nums[minDeque[0]] > limit) {
      left++;
      if (left > maxDeque[0]) {
        maxDeque.shift();
      }
      if (left > minDeque[0]) {
        minDeque.shift();
      }
    }

    // Update the result with the size of the current valid window
    result = Math.max(result, right - left + 1);
  }

  return result;
};