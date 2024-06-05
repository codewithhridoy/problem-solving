# [1002. Find Common Characters](https://leetcode.com/problems/find-common-characters/description)

---

title: "Finding Common Characters in Strings"
summary: "A solution to find common characters in multiple strings using a straightforward approach and JavaScript."
date: 2024-06-05
modifiedDate: 2024-06-05
tags: ["JavaScript", "Algorithms", "Coding"]
slug: "finding-common-characters-in-strings"

---

![image.png](https://assets.leetcode.com/users/images/a495130a-37f7-405d-b2bb-821bab29b1b5_1717595176.503326.png)

# Intuition

The problem requires finding characters that appear in all given strings. My initial thought was to use a simple approach that iterates over the characters of the first string and checks if each character is present in all other strings. If a character is found in every string, it can be added to the result array.

# Approach

1. Iterate over each character of the first string.
2. For each character, check if it is present in all other strings.
3. If a character is found in every string, add it to the result array and remove it from each string to avoid duplicate counting.
4. Return the result array containing common characters.

# Complexity

- Time complexity: $$O(n \cdot m^2)$$, where $$n$$ is the number of strings and $$m$$ is the average length of the strings. This is because for each character in the first string, we need to check its presence in all other strings, and string operations such as `includes` and `replace` have a linear complexity.

- Space complexity: $$O(n)$$, where $$n$$ is the length of the result array storing common characters. Additional space is used for intermediate string modifications.

# Code

```js
/**
 * @param {string[]} words
 * @return {string[]}
 */
function commonChars(words) {
  let arr = [];

  words[0].split("").forEach((item, index) => {
    if (words.every((word) => word.includes(item))) {
      arr.push(item);
      words = words.map((word) => word.replace(item, ""));
    }
  });

  return arr;
}
```
