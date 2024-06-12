# [75. Sort Colors](https://leetcode.com/problems/sort-colors)

---

title: "Intuition and Approach for Sorting Colors"
summary: "Detailed intuition and approach to solving the problem of sorting colors with code implementation and complexity analysis."
date: 2024-06-12
modifiedDate: 2024-06-12
tags: ["algorithm", "sorting", "complexity analysis"]
slug: "intuition-approach-sorting-colors"

---

![image.png](https://assets.leetcode.com/users/images/e61d4204-745b-4833-9b39-0b2cf9aee959_1718152359.7529407.png)

# Intuition

To solve the problem of sorting colors, the first thought is to use a simple sorting algorithm. Since the problem can be viewed as sorting an array with a small set of distinct values (0, 1, and 2), we can utilize a sorting method that repeatedly compares and swaps adjacent elements if they are in the wrong order.

# Approach

The approach involves using the bubble sort algorithm, which repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the array is sorted. Although bubble sort is not the most efficient algorithm for large datasets, it is straightforward and works for this problem with a small set of values.

# Complexity

- Time complexity: $$O(n^2)$$
- Space complexity: $$O(1)$$

# Code

```javascript
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
}
```
