# [Reverse Prefix of Word](https://leetcode.com/problems/reverse-prefix-of-word)

# Intuition

To solve this problem, we need to find the first occurrence of the character ch in the string word and reverse the substring from index 0 up to that occurrence.

# Approach

1. Check if the character ch exists in the string word.
2. If ch does not exist, return the original string word.
3. Find the index of the first occurrence of ch in word.
4. Extract the substring from index 0 up to the index of ch.
5. Reverse the extracted substring.
6. Concatenate the reversed substring with the remaining part of the string word.
7. Return the resulting string.

# Complexity

- Time complexity: O(n), where n is the length of the string word. The time complexity is dominated by the operations of finding the index of ch, reversing the substring, and concatenating strings.

- Space complexity: O(n), where n is the length of the string word. The space complexity is due to the creation of a new string when splitting and joining substrings.

# Code

```
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
const reversePrefix = function (word, ch) {
    if (!word.includes(ch)) {
        return word;
    }

    const index = word.indexOf(ch);
    return word.slice(0, index + 1).split('').reverse().join('') + word.slice(index + 1);
};
```
