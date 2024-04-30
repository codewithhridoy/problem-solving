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

