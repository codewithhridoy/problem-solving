/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];
  const backtrack = (nums, index, path) => {
    result.push(path);

    for (let i = index; i < nums.length; i++) {
      backtrack(nums, i + 1, [...path, nums[i]]);
    }
  }
  backtrack(nums, 0, []);

  return result;
};