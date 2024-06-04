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
    numOddChars = ((count + 1) % 2 === 1) ? numOddChars + 1 : numOddChars - 1;
  }

  // If there are odd-count characters, we can use all characters minus (numOddChars - 1)
  return numOddChars > 0 ? s.length - (numOddChars - 1) : s.length;
};