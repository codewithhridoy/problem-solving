# [140. Word Break II](https://leetcode.com/problems/word-break-ii/description/)

## Intuition

The task is to find all possible sentences that can be formed by concatenating words from a given dictionary such that they match the input string. This problem can be tackled using a backtracking approach, where we try to build sentences by recursively exploring each possible word in the dictionary that can form the starting part of the remaining string. If we reach the end of the string and it is successfully decomposed into words from the dictionary, we have found a valid sentence.

## Approach

1. Define a helper function `buildSentences` that will perform the backtracking.
2. The function will take the remaining part of the string, the word dictionary, the current sentence being built, and the results list.
3. If the remaining string is empty, it means we have successfully formed a sentence. Add the current sentence to the results list.
4. Iterate over each word in the dictionary:
   - If the current word is a prefix of the remaining string, add this word to the current sentence.
   - Recursively call the helper function with the remaining part of the string (after removing the prefix).
   - Backtrack by removing the last word added to the current sentence.
5. Continue this process until all possible sentences are found.
6. Return the results list containing all valid sentences.

## Complexity

- **Time complexity:** The time complexity is exponential in the worst case because we are exploring all possible combinations of words that can form the string. If `n` is the length of the string and `m` is the size of the dictionary, the time complexity can be approximated as \(O(2^n)\) in the worst case.
- **Space complexity:** The space complexity is \(O(n)\) due to the recursion stack, where `n` is the length of the string. Additionally, the space required for storing the results is also proportional to the number of valid sentences formed.

## Code

```javascript
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const buildSentences = (
    remainingString,
    wordDict,
    currentSentence = [],
    results = []
  ) => {
    if (!remainingString.length) {
      results.push(currentSentence.join(" "));
      return;
    }

    for (let word of wordDict) {
      if (!remainingString.startsWith(word)) continue;
      currentSentence.push(word);
      buildSentences(
        remainingString.slice(word.length),
        wordDict,
        currentSentence,
        results
      );
      currentSentence.pop();
    }

    return results;
  };

  return buildSentences(s, wordDict);
};
```
