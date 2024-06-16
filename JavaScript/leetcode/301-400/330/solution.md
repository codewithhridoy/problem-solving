# [330. Patching Array](https://leetcode.com/problems/patching-array)

---

title: "Intuition and Approach for Solving the Min Patches Problem"
summary: "A detailed discussion on the intuition, approach, and complexity analysis for solving the Min Patches problem, along with the JavaScript code implementation."
date: 2024-06-16
modifiedDate: 2024-06-16
tags: ["algorithms", "problem-solving", "JavaScript"]
slug: "intuition-and-approach-for-solving-the-min-patches-problem"

---

![image.png](https://assets.leetcode.com/users/images/4a007571-85fd-467b-b228-308550f93ca8_1718513760.345061.png)

# Intuition

When given a list of numbers and a target value \( n \), the goal is to determine the minimum number of patches required so that every number from 1 to \( n \) can be represented as the sum of elements from the list. The initial intuition is to iteratively build up the sum from the available numbers in the list, and whenever we encounter a gap (i.e., we can't form a number because the sum is too small), we patch the list with the smallest number that would bridge this gap.

# Approach

To solve this problem, we maintain a running sum of the numbers we can form. We iterate through the list of numbers and add each number to this running sum if it can be used to form new numbers up to our current target. If a number in the list is too large to be used next, we patch the list by adding the smallest number that would allow us to reach the next integer in sequence. This number is always \( \text{sum} + 1 \). Each time we add such a patch, we increase our patch count. We continue this process until our running sum reaches or exceeds \( n \).

# Complexity

- Time complexity:
  The time complexity of this approach is \( O(m) \), where \( m \) is the number of elements in the input list `nums`. This is because we are iterating through the list once.

- Space complexity:
  The space complexity is \( O(1) \) because we are using a constant amount of extra space to store variables like `patches`, `sum`, and `i`.

# Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
function minPatches(nums, n) {
  let patches = 0;
  let sum = 0;
  let i = 0;

  while (sum < n) {
    if (i < nums.length && nums[i] <= sum + 1) {
      sum += nums[i];
      i++;
    } else {
      sum += sum + 1;
      patches++;
    }
  }
  return patches;
}
```
