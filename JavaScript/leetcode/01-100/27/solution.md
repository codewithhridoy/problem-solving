# [Remove Element](https://leetcode.com/problems/remove-element)

# Intuition

We want to remove all occurrences of a specified value from an array. One way to do this is by iterating through the array and keeping track of the index where non-matching elements should be placed.

# Approach

1. We initialize a pointer i to keep track of the position where non-matching elements should be placed.
2. We iterate through the array using a for...of loop.
3. If the current element is not equal to the specified value, we assign it to the position i in the array and increment i.
4. Finally, we return the value of i, which represents the new length of the array after removing all occurrences of the specified value.

# Complexity

- Time complexity: O(n), where n is the length of the input array nums. We iterate through the array once.

- Space complexity: O(1), as we modify the array in place and only use a constant amount of extra space for variables i and num.

# Code

```
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
```
