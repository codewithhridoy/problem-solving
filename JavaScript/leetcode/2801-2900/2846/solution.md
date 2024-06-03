# [2486. Append Characters to String to Make Subsequence](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/description)

---

title: "Append Characters to String"
summary: "A solution to determine the number of characters to append to a string to make it a subsequence of another string."
date: "2024-06-03"
modifiedDate: "2024-06-03"
tags: ["Algorithms", "String Manipulation", "JavaScript"]
slug: "append-characters-to-string"

---

![image.png](https://assets.leetcode.com/users/images/a15f91b5-a557-4f3b-8a32-03b1fa20eae0_1717423447.4002676.png)

# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

To solve this problem, we need to determine the minimum number of characters that need to be appended to string `s` to make it a subsequence of string `t`.

# Approach

<!-- Describe your approach to solving the problem. -->

We can use a two-pointer technique to solve this problem efficiently. By traversing through both strings simultaneously, we can check if characters from `s` match characters from `t`. If they do, we move to the next character in `t`. Regardless, we always move to the next character in `s`. This way, we can count how many characters are left in `t` after `s` has been completely traversed, which gives us the number of characters needed to append to `s`.

# Complexity

**Time complexity:** $$O(n)$$, where $$n$$ is the length of string `s`. In the worst case, we traverse each character in both strings once.

**Space complexity:** $$O(1)$$ as we are using only a fixed amount of extra space for the two pointers and counters.

# Code

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function appendCharacters(s, t) {
  let sIndex = 0,
    tIndex = 0;

  // Traverse through string `s` and `t`
  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      tIndex++; // Move to the next character in `t`
    }
    sIndex++; // Always move to the next character in `s`
  }

  // The remaining characters in `t` are what we need to append
  return t.length - tIndex;
}
```
