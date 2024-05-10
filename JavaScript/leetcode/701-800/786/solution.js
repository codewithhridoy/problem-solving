/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

const kthSmallestPrimeFraction = function (primes, k) {

  const n = primes.length;

  let [left, right] = [0, 1];

  // Binary search loop
  while (left < right) {

    // Calculate the midpoint
    const mid = left + (right - left) / 2;

    let [maxFraction, totalCount, numerator, denominator] = [0, 0, 0, 0]

    // Compare fractions
    for (let i = 0, j = 1; i < n - 1; i++) {

      // Find the index where the current prime is greater than the product of mid and the next prime
      while (j < n && primes[i] > mid * primes[j]) j++;

      // If the end of the array is reached, exit the loop
      if (n === j) break;

      // Increment the total count of fractions
      totalCount += n - j;

      // Calculate the current fraction
      const currentFraction = primes[i] / primes[j];

      // Update maxFraction and numerator/denominator if the current fraction is greater
      if (currentFraction > maxFraction) {
        numerator = i;
        denominator = j;
        maxFraction = currentFraction;
      }
    }

    // If the total count matches k, return the fraction
    if (totalCount === k) return [primes[numerator], primes[denominator]];

    // If the total count is greater than k, adjust the right boundary
    else if (totalCount > k) right = mid;

    // If the total count is less than k, adjust the left boundary
    else left = mid;
  }

  return [];
}