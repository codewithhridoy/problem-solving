/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
function largestLocal(grid) {
  const numRows = grid.length; // Number of rows in the grid
  const numCols = grid[0].length; // Number of columns in the grid
  const result = []; // Array to store the final result

  // Iterate over each row, excluding the last two rows
  for (let row = 0; row < numRows - 2; row++) {
    const rowResult = []; // Array to store the results for the current row

    // Iterate over each column, excluding the last two columns
    for (let col = 0; col < numCols - 2; col++) {
      // Calculate the maximum value within the 3x3 submatrix centered around (row, col)
      const maxInSubmatrix = Math.max(
        grid[row][col], grid[row][col + 1], grid[row][col + 2], // Values in the first row of the submatrix
        grid[row + 1][col], grid[row + 1][col + 1], grid[row + 1][col + 2], // Values in the second row of the submatrix
        grid[row + 2][col], grid[row + 2][col + 1], grid[row + 2][col + 2] // Values in the third row of the submatrix
      );

      rowResult.push(maxInSubmatrix); // Add the maximum value to the result array for the current row
    }
    result.push(rowResult); // Add the result array for the current row to the final result
  }

  return result; // Return the final result
};
