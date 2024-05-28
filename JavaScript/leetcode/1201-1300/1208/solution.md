# [Equal Substring with Max Cost](https://leetcode.com/problems/get-equal-substrings-within-budget/description)

---

title: "Equal Substring with Max Cost"
summary: "A solution to find the longest substring where the transformation cost from one string to another does not exceed a given maximum, using a sliding window approach."
date: "2024-05-28"
modifiedDate: "2024-05-28"
tags: ["sliding window", "two pointers", "string manipulation", "algorithm"]
slug: "equal-substring-max-cost"

---

![image.png](https://assets.leetcode.com/users/images/06772afe-87d0-4c57-8ad0-8e8c546b35af_1716905690.7943518.png)

## Intuition

To solve the problem of finding the longest substring where the transformation cost from one string to another does not exceed a given maximum, we can use a sliding window approach. This method allows us to efficiently explore all possible substrings without recalculating costs from scratch for each new substring.

## Approach

1. **Sliding Window Technique**: Use two pointers (`left` and `right`) to represent the current window of the substring we're examining. Initially, both pointers are set to the beginning of the strings.
2. **Calculate Transformation Cost**: For each character in the window, calculate the cost to transform the character from string `s` to string `t`.
3. **Adjust Window**: If the total transformation cost exceeds the `maxCost`, increment the `left` pointer to shrink the window until the cost is within the limit again.
4. **Update Maximum Length**: Keep track of the maximum length of valid substrings encountered during the process.
5. **Expand Window**: Increment the `right` pointer to expand the window and include the next character in the substring.

## Complexity

- **Time complexity**: $$O(n)$$
  Each character in the string is processed at most twice, once when expanding the window and once when contracting it.
- **Space complexity**: $$O(1)$$
  Only a constant amount of extra space is used for variables.

## Code

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */

function equalSubstring(s, t, maxCost) {
  let left = 0;
  let right = 0;
  let currentCost = 0;
  let maxLength = 0;

  while (right < s.length) {
    // Calculate the cost to change s[right] to t[right]
    currentCost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));

    // If the currentCost exceeds maxCost, shrink the window from the left
    while (currentCost > maxCost) {
      currentCost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
      left++;
    }

    // Update the maximum length of the valid substring
    maxLength = Math.max(maxLength, right - left + 1);

    // Expand the window by moving the right pointer
    right++;
  }

  return maxLength;
}
```
