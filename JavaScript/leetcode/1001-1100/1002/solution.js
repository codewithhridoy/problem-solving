/**
 * @param {string[]} words
 * @return {string[]}
 */
function commonChars(words) {
  let arr = [];

  words[0].split('').forEach((item, index) => {
    if (words.every(word => word.includes(item))) {
      arr.push(item);
      words = words.map(word => word.replace(item, ''));
    }
  });

  return arr;
}