# [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix)

# Intuition

To find the longest common prefix among an array of strings, we can start by comparing characters at each index position across all strings. We continue until we find a character mismatch or reach the end of any string.

# Approach

1. Check if the input array is empty. If it is, return an empty string as there is no common prefix.
2. Use the reduce method to iteratively compare characters at each index position.
3. Initialize the accumulator with the first string in the array.
4. For each subsequent string, compare characters at each index with the accumulator.
5. If a character mismatch is found or the end of any string is reached, update the accumulator with the common prefix found so far.
6. Return the final accumulator, which represents the longest common prefix among all strings.

# Complexity

- Time complexity:

  - Let n be the total number of characters across all strings and m be the length of the shortest string.
  - The worst-case time complexity is O(n - m) because we potentially iterate over all characters in all strings.

- Space complexity: The space complexity is O(m) because we only store the longest common prefix found so far.

# Code

```
/**
 * @param {string[]} strings
 * @return {string}
 */
const longestCommonPrefix = function (strings) {
  if (strings.length === 0) return '';

  return strings.reduce((prefix, current) => {
    let i = 0;
    while (prefix[i] && prefix[i] === current[i]) i++;
    return prefix.slice(0, i);
  }, strings[0]);

//   Alternative Solution:
//   let prefix = strings[0];
//   for (let i = 1; i < strings.length; i++) {
//     while (strings[i].indexOf(prefix) !== 0) {
//       prefix = prefix.substring(0, prefix.length - 1);
//       if (prefix.length === 0) {
//         return '';
//       }
//     }
//   }
//   return prefix;
};
```
