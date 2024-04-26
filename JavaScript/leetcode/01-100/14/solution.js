/**
 * @param {string[]} strings
 * @return {string}
 */
const longestCommonPrefix = function (strings) {
  if (strings.length === 0) {
    return '';
  }
  let prefix = strings[0];
  for (let i = 1; i < strings.length; i++) {
    while (strings[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.length === 0) {
        return '';
      }
    }
  }
  return prefix;
};

return strings.reduce((result, current) => {
  if (result.length === 0) {
    return current;
  }
  return result.substring(0, Math.min(result.length, current.length));
}, '')