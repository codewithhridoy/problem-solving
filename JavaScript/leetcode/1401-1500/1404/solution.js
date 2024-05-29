/**
 * @param {string} s
 * @return {number}
 */
const numSteps = function (s) {
  let steps = carry = 0;

  for (let i = s.length - 1; i > 0; i--) {
    // Convert the current character to an integer (0 or 1)
    const currentDigit = parseInt(s[i]);

    // If the sum of the current digit and carry is 1
    if (currentDigit + carry === 1) {
      // Add 2 steps: one for adding 1 to the binary number and one for dividing by 2
      steps += 2;
      // Set carry to 1 for the next iteration since adding 1 to 1 results in a carry
      carry = 1;
    } else {
      // If the sum is 0 or 2, add 1 step: divide by 2 (if sum is 2, carry will handle the addition)
      steps += 1;
    }
  }

  // After looping, add any remaining carry to the steps
  return steps + carry;
};
