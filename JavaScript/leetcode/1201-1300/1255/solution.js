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
