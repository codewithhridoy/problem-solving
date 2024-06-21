/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
function maxSatisfied(customers, grumpy, minutes) {
  let alwaysSatisfied = 0;
  let windowStart = 0;
  let extraSatisfied = 0;
  let maxExtraSatisfied = 0;

  for (let windowEnd = 0; windowEnd < grumpy.length; windowEnd++) {
    // Add customers to alwaysSatisfied if the owner is not grumpy
    if (grumpy[windowEnd] === 0) {
      alwaysSatisfied += customers[windowEnd];
    }

    // Calculate the number of extra satisfied customers within the current window
    if (grumpy[windowEnd] === 1) {
      extraSatisfied += customers[windowEnd];
    }

    // Once the window exceeds the given minutes, slide the window
    if (windowEnd >= minutes) {
      if (grumpy[windowStart] === 1) {
        extraSatisfied -= customers[windowStart];
      }
      windowStart++;
    }

    // Update the maximum extra satisfied customers
    maxExtraSatisfied = Math.max(maxExtraSatisfied, extraSatisfied);
  }

  // The result is the always satisfied customers plus the maximum extra satisfied customers
  return alwaysSatisfied + maxExtraSatisfied;
}

// Example usage
console.log(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)); // Output: 16
console.log(maxSatisfied([1], [0], 1)); // Output: 1