# [974. Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k)

---

title: "Subarrays Divisible by K"
summary: "An algorithm to find the number of subarrays divisible by a given integer K."
date: 2024-06-09
modifiedDate: 2024-06-09
tags: ["algorithms", "arrays", "math"]
slug: "subarrays-divisible-by-k"

---

![image.png](https://assets.leetcode.com/users/images/bf6baae6-e083-4b60-9602-d21b21f66bbd_1717943026.3791788.png)

# Intuition

To solve the problem of finding subarrays divisible by a given integer \( k \), we need to leverage the properties of modular arithmetic. The key insight is that the difference between the sums of two subarrays is divisible by \( k \) if their remainders when divided by \( k \) are the same.

# Approach

1. **Prefix Sum and Remainders**: Calculate the prefix sum as we iterate through the array and keep track of the remainders of these sums when divided by \( k \).
2. **Count Remainders**: Use a hashmap or an array to count the occurrences of each remainder.
3. **Calculate Subarrays**: For each prefix sum remainder, if it has been seen before, it means there exists a subarray ending at the current index which, when added to any subarray with the same remainder, is divisible by \( k \).

# Complexity

- Time complexity: O(n), where n is the length of the input array. This is because we iterate through the array once, performing constant-time operations at each step.

- Space complexity: O(k), as we need to store the counts of the remainders, which can be at most k.

# Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysDivByK = (nums, k) => {
  let result = 0;
  const remainderCount = new Array(k).fill(0);
  remainderCount[0] = 1;

  let prefixSumRemainder = 0;
  for (const num of nums) {
    prefixSumRemainder = (prefixSumRemainder + (num % k) + k) % k;
    result += remainderCount[prefixSumRemainder];
    remainderCount[prefixSumRemainder]++;
  }

  return result;
};
```
