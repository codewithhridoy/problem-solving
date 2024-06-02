/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  let left = 0, right = s.length - 1;

  while (left < right) {
    // Using destructuring assignment for swapping elements
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};