/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i <= nums.length; i++) {
    if (i <= nums[nums.length - i]) {
      if (nums.length - i - 1 >= 0) {
        if (i > nums[nums.length - i - 1]) return i;
      } else return i;
    }
  }
  return -1;
};