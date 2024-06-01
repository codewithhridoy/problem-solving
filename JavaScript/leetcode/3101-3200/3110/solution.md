# [Score of a String](https://leetcode.com/problems/score-of-a-string/description)

---

title: "Calculating the Score of a String Based on ASCII Differences"
summary: "This post discusses a method to calculate the score of a string based on the absolute differences between the ASCII values of consecutive characters."
date: "2024-06-01"
modified_date: "2024-06-01"
tags: ["JavaScript", "Algorithm", "String Manipulation"]
slug: "calculating-score-string-ascii-differences"

---

# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

To calculate the score of a string based on the differences in ASCII values between consecutive characters, we can use a simple iterative approach. The idea is to traverse the string, compute the absolute difference between the ASCII values of each pair of consecutive characters, and sum these differences to get the final score.

# Approach

<!-- Describe your approach to solving the problem. -->

1. Initialize a variable `score` to store the cumulative score.
2. Loop through the string from the first character to the second-last character.
3. For each character, compute the absolute difference between its ASCII value and the ASCII value of the next character.
4. Add this difference to the `score`.
5. Return the `score` after processing the entire string.

# Complexity

- Time complexity:
  <!-- Add your time complexity here, e.g. $$O(n)$$ -->

  The time complexity of this approach is $$O(n)$$ because we need to iterate through the string once, where `n` is the length of the string.

- Space complexity:
  <!-- Add your space complexity here, e.g. $$O(n)$$ -->
  The space complexity is $$O(1)$$ because we only use a constant amount of extra space regardless of the input size.

# Code

```javascript
/**
 * @param {string} s
 * @return {number}
 */
function scoreOfString(s) {
  let score = 0;

  for (let i = 0; i < s.length - 1; i++) {
    score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }

  return score;
}
```
