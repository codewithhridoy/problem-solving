/**
 * This function takes a string s and an array of words wordDict and returns all possible sentences
 * where each word is a valid dictionary word from wordDict.
 *
 * @param {string} s - The input string to be segmented.
 * @param {string[]} wordDict - The list of valid dictionary words.
 * @return {string[]} - An array of all possible sentences.
 */
var wordBreak = function (s, wordDict) {
  // Recursive helper function to build sentences
  const buildSentences = (remainingString, wordDict, currentSentence = [], results = []) => {
    // Base case: if there is no remaining string, join the current sentence and add to results
    if (!remainingString.length) {
      results.push(currentSentence.join(' '));
      return;
    }

    // Iterate over each word in the dictionary
    for (let word of wordDict) {
      // If the remaining string does not start with the current word, skip it
      if (!remainingString.startsWith(word)) continue;

      // Add the current word to the current sentence
      currentSentence.push(word);

      // Recursively build the sentence with the remaining part of the string
      buildSentences(remainingString.slice(word.length), wordDict, currentSentence, results);

      // Backtrack: remove the last word added to try the next possibility
      currentSentence.pop();
    }

    return results;
  };

  // Start the recursive function with the full input string and an empty sentence
  return buildSentences(s, wordDict);
};