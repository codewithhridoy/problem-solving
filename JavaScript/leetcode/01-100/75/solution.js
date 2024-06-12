/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        sorted = false;
        // Swap nums[i] and nums[i + 1]
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }
  }
};