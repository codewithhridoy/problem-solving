# [1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit)

---

title: "Finding the Longest Subarray with Absolute Diff Less than Limit"
summary: "An efficient approach to finding the longest subarray with an absolute difference less than a specified limit using deques."
date: "2023-06-23"
modified_date: "2023-06-23"
tags: ["algorithm", "sliding window", "deques", "javascript"]
slug: "longest-subarray-absolute-diff"

---

![image.png](https://assets.leetcode.com/users/images/53c7dbfe-f60e-4ce7-b722-e0c89b1d8f95_1719150350.5995736.png)

# Intuition

To solve this problem, the first step is to identify that we need to find a subarray where the difference between the maximum and minimum elements is less than or equal to a given limit. The problem can be effectively approached using a sliding window technique combined with deques to keep track of the maximum and minimum elements within the window.

# Approach

We use two deques: one to keep track of the maximum values and the other for the minimum values within the current window. The deques help us efficiently maintain the maximum and minimum values as we expand and contract the sliding window.

1. Initialize two deques, `maxDeque` and `minDeque`, to store indices of array elements in decreasing and increasing order respectively.
2. Iterate through the array with a sliding window defined by two pointers, `left` and `right`.
3. For each element at `right`, update the deques to include this element while maintaining their order properties.
4. Check if the current window satisfies the condition where the absolute difference between the maximum and minimum elements is less than or equal to the limit. If not, increment the `left` pointer to reduce the window size and maintain the condition.
5. Keep track of the maximum window size that satisfies the condition.

# Complexity

- Time complexity: $$O(n)$$
  The algorithm processes each element of the array at most twice, resulting in a linear time complexity.

- Space complexity: $$O(n)$$
  In the worst case, the deques can store all elements of the array, leading to a linear space complexity.

# Code

```javascript
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
    while (
      maxDeque.length &&
      nums[maxDeque[maxDeque.length - 1]] <= nums[right]
    ) {
      maxDeque.pop();
    }
    maxDeque.push(right);

    // Maintain the minDeque for the minimum value in the current window
    while (
      minDeque.length &&
      nums[minDeque[minDeque.length - 1]] >= nums[right]
    ) {
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
}
```
