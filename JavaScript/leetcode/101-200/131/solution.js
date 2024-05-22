/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let result = [];
  const backtrack = (s, index, path) => {
    if (index === s.length) {
      result.push(path);
      return;
    }

    for (let i = index; i < s.length; i++) {
      if (isPalindrome(s, index, i)) {
        backtrack(s, i + 1, [...path, s.slice(index, i + 1)]);
      }
    }
  }
  backtrack(s, 0, []);
  return result;
};

function isPalindrome(s, start, end) {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}