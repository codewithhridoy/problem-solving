# [409. Longest Palindrome](https://leetcode.com/problems/longest-palindrome/description)

---

title: "Longest Palindromic Substring in JavaScript"
summary: "An efficient solution to finding the longest palindromic substring in a given string using JavaScript."
date: 2024-06-04
modified_date: 2024-06-04
tags: ["JavaScript", "Algorithm", "Palindrome", "String Manipulation"]
slug: "longest-palindromic-substring-javascript"

---

# Intuition

To find the longest palindromic substring in a given string, the idea is to count the occurrences of each character and determine how many characters have odd counts. This allows us to construct the longest palindrome possible.

# Approach

1. Create a map to count the occurrences of each character in the string.
2. Track the number of characters that have an odd count.
3. Iterate through each character in the string and update the count in the map.
4. Adjust the number of odd-count characters accordingly.
5. Calculate the length of the longest palindromic substring based on the number of odd-count characters.

# Complexity

- **Time complexity:** \(O(n)\) - where \(n\) is the length of the string. We iterate through the string once to count the characters and again to calculate the result.
- **Space complexity:** \(O(1)\) - Since there are a fixed number of possible characters (e.g., 128 ASCII characters), the space complexity is constant.

# Code

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const charCounts = new Map();
  let numOddChars = 0;

  for (let char of s) {
    const count = charCounts.get(char) || 0;
    charCounts.set(char, count + 1);

    // Adjust numOddChars based on the new count
    numOddChars = (count + 1) % 2 === 1 ? numOddChars + 1 : numOddChars - 1;
  }

  // If there are odd-count characters, we can use all characters minus (numOddChars - 1)
  return numOddChars > 0 ? s.length - (numOddChars - 1) : s.length;
};
```
