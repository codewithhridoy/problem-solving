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