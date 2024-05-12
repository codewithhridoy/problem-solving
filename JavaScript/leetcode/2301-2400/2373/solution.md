# [Largest Local Values in a Matrix](https://leetcode.com/problems/largest-local-values-in-a-matrix/description/)

# Intuition

To find the largest local values in the given grid, we can iterate through each cell in the grid, excluding the last two rows and columns, and calculate the maximum value within the 3x3 submatrix centered around that cell.

# Approach

1. Initialize variables to store the number of rows and columns in the grid, as well as an empty array to store the final result.
2. Iterate over each row of the grid, excluding the last two rows.
3. Within each row, iterate over each column, excluding the last two columns.
4. For each cell in the grid, calculate the maximum value within the 3x3 submatrix centered around that cell using Math.max().
5. Push the maximum value into an array representing the result for the current row.
6. Push the result array for each row into the final result array.
7. Return the final result.

# Complexity

- Time complexity: O((n-2) \* (n-2)), where n is the size of the grid. We iterate through each cell in the grid once.

- Space complexity: O((n-2) \* (n-2)), the space used to store the final result.

# Code

```
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

```
