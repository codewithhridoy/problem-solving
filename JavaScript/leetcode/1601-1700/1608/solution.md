# [Finding the Special Array](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/description)

---

summary: "A detailed approach to solve the problem of finding the special array that matches the criteria given in the problem statement."
date: 2024-05-27
modifiedDate: 2024-05-27
tags: ["JavaScript", "Algorithm", "Sorting"]
slug: "finding-the-special-array"

---

![image.png](https://assets.leetcode.com/users/images/bb6f4672-aec1-4b66-b41b-694011979d93_1716819570.5835025.png)

## Intuition

To solve the problem of finding the special array, we need to consider sorting the array and then determining the number of elements that are greater than or equal to a specific value. This approach will help in efficiently finding the desired value that meets the criteria.

## Approach

1. **Sort the Array**: First, sort the given array in ascending order.
2. **Iterate and Check Conditions**: Iterate through the range from 0 to the length of the array. For each value `i`, check if it satisfies the conditions to be the special value:
   - `i` should be less than or equal to the value at the `i-th` position from the end of the array.
   - If the previous condition is met, check if `i` is greater than the value at the `(i-1)-th` position from the end of the array.
3. **Return the Result**: If both conditions are met for a specific `i`, return `i` as the special value. If no such value is found, return `-1`.

## Complexity

- **Time Complexity**: \(O(n \log n)\) due to the sorting operation, followed by \(O(n)\) for the iteration, resulting in an overall time complexity of \(O(n \log n)\).

- **Space Complexity**: \(O(1)\) as we are using a constant amount of extra space.

## Code

```javascript
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
```
