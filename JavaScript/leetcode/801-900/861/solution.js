/**
 * @param {number[][]} grid
 * @return {number}
 */
const matrixScore = function (grid) {
  const rows = grid.length; // number of rows in the grid
  const cols = grid[0].length; // number of columns in the grid

  // Step 1: Toggle rows to ensure the first column has all 1s
  for (let row = 0; row < rows; ++row) {
    if (grid[row][0] === 0) {
      // If the first cell is 0, toggle the entire row
      for (let col = 0; col < cols; ++col) {
        grid[row][col] ^= 1; // XOR with 1 will toggle the bit
      }
    }
  }

  let score = 0; // Initialize the total score

  // Step 2: Maximize each column by toggling if necessary
  for (let col = 0; col < cols; ++col) {
    let countOnes = 0; // Count of ones in the current column
    for (let row = 0; row < rows; ++row) {
      // Count how many 1s are there in the current column
      countOnes += grid[row][col];
    }
    // Choose the max between countOnes and the number of 0s (which is rows - countOnes)
    score += Math.max(countOnes, rows - countOnes) * (1 << (cols - col - 1));
  }

  return score; // Return the total score
};