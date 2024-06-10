/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = (heights) => {
  // Create a copy of the heights array to keep the original order
  const originalHeights = [...heights];

  // Sort the original heights array to get the expected order
  heights.sort((a, b) => a - b);

  // Initialize a counter to count mismatches
  let count = 0;

  // Compare the original heights with the sorted heights
  originalHeights.forEach((height, index) => {
    if (height !== heights[index]) {
      count++;
    }
  });

  return count;
};