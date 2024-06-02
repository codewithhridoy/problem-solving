# [344. Reverse String](https://leetcode.com/problems/reverse-string/description)

---

title: "Reverse String in JavaScript"
summary: "An efficient approach to reverse a string in JavaScript by modifying the array in place using a two-pointer technique."
date: "2024-06-02"
modifiedDate: "2024-06-02"
tags: ["JavaScript", "Algorithm", "Two-pointer technique"]
slug: "reverse-string-in-javascript"

---

# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

The problem can be solved efficiently by using the two-pointer technique, which involves initializing two pointers: one at the beginning and the other at the end of the array. These pointers will move towards the center, swapping elements at each step.

# Approach

<!-- Describe your approach to solving the problem. -->

1. Initialize two pointers, `left` at the beginning (index 0) and `right` at the end (index `s.length - 1`) of the array.
2. Use a while loop to iterate as long as `left` is less than `right`.
3. In each iteration, swap the elements at the `left` and `right` indices using destructuring assignment.
4. Increment the `left` pointer and decrement the `right` pointer.
5. Continue the process until the pointers meet or cross each other.

# Complexity

- Time complexity:
  <!-- Add your time complexity here, e.g. $$O(n)$$ -->

  $$O(n)$$, where `n` is the length of the array. This is because we traverse the array once, performing constant-time operations at each step.

- Space complexity:
  <!-- Add your space complexity here, e.g. $$O(n)$$ -->
  $$O(1)$$, since we are modifying the array in place and not using any additional space proportional to the input size.

# Code

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    // Using destructuring assignment for swapping elements
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}
```
