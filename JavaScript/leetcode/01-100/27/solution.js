/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let i = 0;

  // Es6
  for (const num of nums) {
    if (num !== val) {
      nums[i++] = num;
    }
  }

  // Old Way
  /*
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  */

  return i;
};

