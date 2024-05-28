/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */

function equalSubstring(s, t, maxCost) {
  let left = 0;
  let right = 0;
  let currentCost = 0;
  let maxLength = 0;

  while (right < s.length) {
    // Calculate the cost to change s[right] to t[right]
    currentCost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));

    // If the currentCost exceeds maxCost, shrink the window from the left
    while (currentCost > maxCost) {
      currentCost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
      left++;
    }

    // Update the maximum length of the valid substring
    maxLength = Math.max(maxLength, right - left + 1);

    // Expand the window by moving the right pointer
    right++;
  }

  return maxLength;
}
