# [1248. Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays)

---

title: "Counting Subarrays with Exactly K Odd Numbers"
summary: "A detailed explanation and implementation of counting subarrays with exactly k odd numbers using a sliding window approach."
date: "2024-06-22"
modifiedDate: "2024-06-22"
tags: ["algorithm", "sliding window", "javascript"]
slug: "counting-subarrays-with-exactly-k-odd-numbers"

---

![image.png](https://assets.leetcode.com/users/images/f3b6d979-3c14-4464-95bd-63a897032504_1719025445.2072842.png)

# Intuition

To solve the problem of counting subarrays with exactly k odd numbers, we can leverage the sliding window technique. The idea is to count the subarrays with at most k odd numbers and subtract the count of subarrays with at most (k-1) odd numbers. This way, we get the count of subarrays with exactly k odd numbers.

# Approach

1. Define a helper function `countSubarraysWithAtMostKOddNumbers` which counts subarrays with at most k odd numbers.
2. Use a sliding window approach within this helper function to expand and contract the window based on the number of odd numbers in the current window.
3. In the main function `numberOfSubarrays`, compute the difference between the counts of subarrays with at most k and at most (k-1) odd numbers.

# Complexity

- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countSubarraysWithAtMostKOddNumbers = (nums, k) => {
  if (k < 0) return 0;

  let [count, left, right, oddCount] = [0, 0, 0, 0];

  while (right < nums.length) {
    // Increment odd count if the current number is odd
    oddCount += nums[right] % 2 !== 0 ? 1 : 0;

    // If oddCount exceeds k, adjust the left pointer
    while (oddCount > k) {
      oddCount -= nums[left] % 2 !== 0 ? 1 : 0;
      left++;
    }

    // Count the subarrays ending at `right` with at most k odd numbers
    count += right - left + 1;
    right++;
  }

  return count;
};

function numberOfSubarrays(nums, k) {
  // The number of subarrays with exactly k odd numbers
  return (
    countSubarraysWithAtMostKOddNumbers(nums, k) -
    countSubarraysWithAtMostKOddNumbers(nums, k - 1)
  );
}
```
