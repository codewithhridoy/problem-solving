/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function appendCharacters(s, t) {
  let sIndex = 0, tIndex = 0;

  // Traverse through string `s` and `t`
  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      tIndex++; // Move to the next character in `t`
    }
    sIndex++; // Always move to the next character in `s`
  }

  // The remaining characters in `t` are what we need to append
  return t.length - tIndex;
}