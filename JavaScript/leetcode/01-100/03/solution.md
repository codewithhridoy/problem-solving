# [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters)

# Intuition
To find the length of the longest substring without repeating characters, we can use a sliding window approach. We'll iterate through the string, maintaining a window represented by the start and i pointers. The start pointer marks the start index of the current substring, and the i pointer moves forward through the string. We'll use a hash map to store the indices of characters we've encountered so far.

# Approach
1. Initialize an empty hash map map to store characters and their indices.
2. Initialize variables max to store the length of the longest substring and start to mark the start index of the current substring.
3. Iterate through the string s using a for loop.
4. For each character char at index i:
    - If char is already in the map, update start to max(start, map[char] + 1) to move the window to the right of the previous occurrence of char.
    -  Update the index of char in the map to i.
    - Update max to max(max, i - start + 1), which represents the length of the current substring.
    - Return max as the result.
    
# Complexity
- Time complexity: O(n), where n is the length of the input string s. We iterate through the string once.

- Space complexity: O(m), where m is the size of the character set (typically constant), as the hash map can contain up to m distinct characters.

# Code
```
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    const map = {};
    let max = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (map[char] !== undefined) {
            start = Math.max(start, map[char] + 1);
        }
        map[char] = i;
        max = Math.max(max, i - start + 1);
    }

    return max;
};


```