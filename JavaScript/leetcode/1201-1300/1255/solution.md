# [1255. Maximum Score Words Formed by Letters](https://leetcode.com/problems/maximum-score-words-formed-by-letters/description)

![image.png](https://assets.leetcode.com/users/images/d612ad6c-e0a9-460c-946d-e85d1ca3b91a_1716563208.9041727.png)

# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

Given a list of words and available letters with corresponding scores, the goal is to find the maximum score by forming words from the letters. We need to consider all possible combinations of words and check if they can be formed with the available letters while maximizing the score.

# Approach

<!-- Describe your approach to solving the problem. -->

1. **Frequency Array**: Create a frequency array to count the occurrences of each letter in the given letters.
2. **DFS (Depth First Search)**: Use a recursive DFS approach to explore all combinations of words:
   - For each word, we have two choices: skip the word or pick the word (if possible).
   - Calculate the score if we skip the current word.
   - Calculate the score if we pick the current word, ensuring that there are enough letters available.
   - Restore the letter frequencies after considering the word to backtrack correctly.
3. **Base Case**: If all words have been considered, return 0.
4. **Return Maximum**: Return the maximum score obtained by either skipping or picking the word.

# Complexity

- Time complexity:
  The time complexity is \(O(2^n \cdot m)\), where \(n\) is the number of words and \(m\) is the average length of the words. This is because we are exploring all subsets of words (which is \(2^n\)) and for each subset, we are checking the validity by iterating over the letters of the words.

- Space complexity:
  The space complexity is \(O(26 + n)\) which simplifies to \(O(n)\), due to the recursive call stack and the frequency array.

# Code

```javascript
/**
 * @param {string[]} words
 * @param {string} letters
 * @param {number[]} score
 * @returns {number}
 */
const maxScoreWords = function (words, letters, score) {
  // Initialize an array to store frequency of each letter (a-z).
  const letterFrequency = new Array(26).fill(0);

  // Count the frequency of each letter in the given letters.
  for (let char of letters) {
    letterFrequency[char.charCodeAt(0) - 97]++;
  }

  /**
   * Depth First Search to compute the maximum score achievable.
   * @param {number} wordIndex - Index of the current word being considered.
   * @param {number[]} frequency - Array representing frequency of each letter.
   * @returns {number} - Maximum score achievable.
   */
  function dfs(wordIndex, frequency) {
    // Base case: If all words have been considered, return 0.
    if (wordIndex == words.length) return 0;

    // Recursive case:
    // 1. Skip the current word and move to the next.
    var skipScore = dfs(wordIndex + 1, frequency); // Score if current word is skipped.

    // 2. Try to pick the current word if there are enough available letters.
    var pickScore = 0; // Score if current word is picked.
    var currentWordScore = 0; // Score of the current word.
    var canPickWord = 1; // Flag indicating whether the current word can be picked.
    var currentWord = words[wordIndex];

    // Calculate the score of the current word and check if it can be formed.
    for (var char of currentWord) {
      var charIndex = char.charCodeAt(0) - 97;

      if (frequency[charIndex] == 0) {
        canPickWord = 0; // Insufficient letters to form the word.
      }

      frequency[charIndex]--; // Use the letter.
      currentWordScore += score[charIndex]; // Update the score of the current word.
    }

    // If all required letters are available, pick the word and compute its score.
    if (canPickWord == 1) {
      pickScore = currentWordScore + dfs(wordIndex + 1, frequency);
    }

    // Restore the frequency of letters after checking/picking the word.
    for (var char of currentWord) {
      var charIndex = char.charCodeAt(0) - 97;
      frequency[charIndex]++; // Restore the letter frequency.
    }

    // Return the maximum score achievable by either skipping or picking the word.
    return Math.max(skipScore, pickScore);
  }

  // Start DFS from the first word with initial frequency array.
  return dfs(0, letterFrequency);
};
```
