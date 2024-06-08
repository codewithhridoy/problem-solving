# [523. Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/post-solution)

---

title: "Continuous Subarray Sum Problem Solution"
summary: "This document provides an efficient solution to the Check Subarray Sum problem using a hashmap to track remainders of the prefix sums."
date: "2024-06-08"
modifiedDate: "2024-06-08"
tags: ["Algorithms", "JavaScript", "HashMap"]
slug: "check-subarray-sum-problem-solution"

---

![image.png](https://assets.leetcode.com/users/images/de0bc58c-cdba-4714-a137-f6a8274fe509_1717808683.0167706.png)

# Intuition

To solve the problem of checking if a subarray sums to a multiple of `k`, we need to keep track of the cumulative sums (prefix sums) and their remainders when divided by `k`. By doing so, we can efficiently determine if there exists a subarray whose sum is a multiple of `k`.

# Approach

We use a hashmap to store the first occurrence of each remainder when the prefix sum is divided by `k`. This helps us to quickly check if the same remainder has appeared before, which would indicate that the subarray sum is a multiple of `k`. Here's a step-by-step approach:

1. Initialize a hashmap (`remainderMap`) to store remainders and their indices.
2. Set the initial value of `prefixSum` to `0` and map the remainder `0` to index `-1` to handle cases where the subarray starts from the beginning.
3. Iterate through the array, updating the `prefixSum` and calculating the current remainder when divided by `k`.
4. If the current remainder has been seen before and the subarray length is greater than `1`, return `true`.
5. Otherwise, store the current remainder and its index in the hashmap.
6. If no valid subarray is found, return `false`.

# Complexity

- **Time complexity:** $$O(n)$$

  - We traverse the array once, making the solution linear in time.

- **Space complexity:** $$O(min(n, k))$$
  - We store remainders in the hashmap, with the size limited to the number of unique remainders.

# Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function checkSubarraySum(nums, k) {
  // Map to store the first occurrence of a remainder
  let remainderMap = new Map();
  remainderMap.set(0, -1); // This accounts for cases where subarray from beginning sums to multiple of k
  let prefixSum = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    if (k !== 0) {
      prefixSum %= k;
    }

    if (remainderMap.has(prefixSum)) {
      if (i - remainderMap.get(prefixSum) > 1) {
        return true;
      }
    } else {
      remainderMap.set(prefixSum, i);
    }
  }

  return false;
}
```
