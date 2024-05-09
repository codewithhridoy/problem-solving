/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */

const maximumHappinessSum = function (happiness, k) {
  // Sort the happiness array in descending order
  happiness.sort((a, b) => b - a);

  let happinessCount = 0; // Counter for selected happiness elements
  let totalHappiness = 0; // Accumulator for the total happiness sum

  // Iterate through the first k elements to select
  for (let i = 0; i < k; i++) {
    // Calculate the difference between current happiness and counter
    // Add the difference to the total happiness if positive, else add 0
    totalHappiness += happiness[i] - happinessCount > 0 ? happiness[i] - happinessCount : 0;
    happinessCount++; // Increment the counter for selected elements
  }

  return totalHappiness; // Return the maximum sum of happiness
};