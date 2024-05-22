# [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/description/)

![image.png](https://assets.leetcode.com/users/images/b911fca0-f465-48fd-aa6b-c256e353ef71_1716391063.5850844.png)

# Intuition

To solve the problem of partitioning a string such that every substring is a palindrome, we can use a backtracking approach. This involves exploring all possible ways to partition the string and checking if each substring is a palindrome.

# Approach

1. **Helper Function - `isPalindrome`:** This function checks if a substring is a palindrome. It does this by comparing characters from the beginning and the end of the substring, moving towards the center.
2. **Backtracking Function - `backtrack`:** This function performs the main task of partitioning the string. It takes the current index and the current path of partitions as arguments.
   - If the current index equals the length of the string, it means we've reached the end, and the current path represents a valid partition, so we add it to the result.
   - Otherwise, we iterate over the string starting from the current index, checking each possible substring to see if it's a palindrome. If it is, we recursively call `backtrack` with the next index and the updated path.

# Complexity

- **Time complexity:** \(O(n \cdot 2^n)\)
  - The backtracking generates all possible partitions, and for each partition, it checks all possible substrings. There are \(2^n\) possible partitions, and checking each substring takes \(O(n)\) time in the worst case.
- **Space complexity:** \(O(n)\)
  - The space complexity is dominated by the recursion stack, which can go as deep as the length of the string.

# Code

```javascript
/**
 * @param {string} s
 * @return {string[][]}
 */

function isPalindrome(s, start, end) {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

const partition = function (s) {
  let result = [];
  const backtrack = (s, index, path) => {
    if (index === s.length) {
      result.push([...path]);
      return;
    }

    for (let i = index; i < s.length; i++) {
      if (isPalindrome(s, index, i)) {
        backtrack(s, i + 1, [...path, s.slice(index, i + 1)]);
      }
    }
  };
  backtrack(s, 0, []);
  return result;
};
```
