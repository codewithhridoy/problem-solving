# [Find the Safest Path in a Grid](https://leetcode.com/problems/find-the-safest-path-in-a-grid/description)

![Screenshot from 2024-05-15 07-57-20.png](https://assets.leetcode.com/users/images/6c9aa2cf-749e-4613-b967-1cfaa96bb740_1715738257.627597.png)

# Intuition

The problem involves finding the maximum safeness factor for traversing a grid with obstacles. We need to ensure that the path taken has a certain level of safeness, defined as the minimum distance from any obstacle.

# Approach

1. **Binary Search for Maximum Safeness Factor:**
   - We aim to find the maximum safeness factor required for a path in the grid.
   - Perform a binary search on the safeness factor to determine the highest value possible.
2. **Nearest Thief Distance Calculation:**

   - Utilize BFS (Breadth-First Search) to find the nearest distance from each cell to the nearest thief.
   - This distance represents the safeness factor for each cell.

3. **Check Safeness Factor Feasibility:**

   - With each safeness factor candidate:
     - Check if a path with this safeness factor is feasible from the start to the end.
     - If it's possible, update the lower bound of the binary search range.
     - Otherwise, update the upper bound.

4. **Terminate and Return:**
   - Repeat the binary search until the lower and upper bounds converge.
   - The converged lower bound represents the maximum achievable safeness factor.
   - Return this maximum safeness factor as the result.

# Complexity

- Time complexity:
  - BFS: O(n^2) (where n is the size of the grid)
  - Binary Search: O(log n)
  - Total: O(n^2 log n)
- Space complexity:
  - Nearest distances array: O(n^2)
  - Visited array: O(n^2)
  - Other variables: O(1)
  - Total: O(n^2)

# Code

```
/**
 * Calculates the maximum safeness factor for the given grid.
 * @param {number[][]} grid - The grid representing the map with 0s for empty cells and 1s for cells containing thieves.
 * @returns {number} - The maximum safeness factor of all paths leading to the bottom-right cell.
 */
const maximumSafenessFactor = (grid) => {
    const n = grid.length;
    // Define the directions for traversing adjacent cells (right, down, left, up)
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    // Calculate the nearest distances from each cell to the nearest thief
    const nearestThiefDistances = getNearestThiefDistances(grid, n, directions);

    // Initialize the range for binary search for the maximum safeness factor
    let leftSafeFactor = 0, rightSafeFactor = n - 1;

    // Perform binary search to find the maximum safeness factor
    while (leftSafeFactor < rightSafeFactor) {
        // Calculate the mid safe factor
        const midSafeFactor = Math.floor((leftSafeFactor + rightSafeFactor + 1) / 2);
        // Check if it's possible to achieve the current safe factor
        if (isSafeFactorPossible(midSafeFactor, grid, n, nearestThiefDistances, directions))
            leftSafeFactor = midSafeFactor;
        else rightSafeFactor = midSafeFactor - 1;
    }

    // Return the maximum safeness factor
    return leftSafeFactor;
};

/**
 * Checks if it's possible to achieve the given safeness factor for the path.
 * @param {number} safeFactor - The current safeness factor to check.
 * @param {number[][]} grid - The grid representing the map.
 * @param {number} n - The size of the grid.
 * @param {number[][]} nearestThiefDistances - The nearest distances from each cell to the nearest thief.
 * @param {number[][]} directions - The directions for traversing adjacent cells.
 * @returns {boolean} - True if the safe factor is possible, false otherwise.
 */
const isSafeFactorPossible = (safeFactor, grid, n, nearestThiefDistances, directions) => {
    // Initialize a visited array to track visited cells
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    // Initialize the current cells to start the BFS
    let currentCells = [[0, 0]];

    // Check if the starting or ending cell contains a thief, or if the minimum distance to the nearest thief is less than the safe factor
    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1 || nearestThiefDistances[0][0] < safeFactor)
        return false;
    visited[0][0] = true;

    // Perform BFS until all reachable cells are visited or the ending cell is reached
    for (let nextCells = []; currentCells.length > 0; currentCells = nextCells, nextCells = []) {
        for (const [x, y] of currentCells) {
            for (const [dx, dy] of directions) {
                const newX = x + dx, newY = y + dy;
                // Check if the new cell is valid, unvisited, and has a distance to the nearest thief greater than or equal to the safe factor
                if (isValid(newX, newY, n) && !visited[newX][newY] && grid[newX][newY] === 0 &&
                    nearestThiefDistances[newX][newY] >= safeFactor) {
                    // If the new cell is the ending cell, return true
                    if (newX === n - 1 && newY === n - 1) return true;
                    // Mark the new cell as visited and add it to the next cells to explore
                    visited[newX][newY] = true;
                    nextCells.push([newX, newY]);
                }
            }
        }
    }

    // If the ending cell is not reached, return false
    return false;
};

/**
 * Checks if the given cell coordinates are within the grid boundaries.
 * @param {number} x - The x-coordinate of the cell.
 * @param {number} y - The y-coordinate of the cell.
 * @param {number} n - The size of the grid.
 * @returns {boolean} - True if the cell is valid, false otherwise.
 */
const isValid = (x, y, n) => x >= 0 && x < n && y >= 0 && y < n;

/**
 * Calculates the nearest distances from each cell to the nearest thief using BFS.
 * @param {number[][]} grid - The grid representing the map.
 * @param {number} n - The size of the grid.
 * @param {number[][]} directions - The directions for traversing adjacent cells.
 * @returns {number[][]} - The nearest distances from each cell to the nearest thief.
 */
const getNearestThiefDistances = (grid, n, directions) => {
    // Initialize an array to store the nearest distances from each cell to the nearest thief
    const nearestThiefDistances = Array.from({ length: n }, () => Array(n).fill(Infinity));
    // Initialize the current cells to start BFS from the cells containing thieves
    let currentCells = [];

    // Traverse the grid to find the cells containing thieves
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                // Add cells containing thieves to the current cells
                currentCells.push([i, j]);
                // Set the distance to the nearest thief as 0 for cells containing thieves
                nearestThiefDistances[i][j] = 0;
            }
        }
    }

    // Perform BFS from cells containing thieves to calculate the nearest distances to other cells
    for (let nextCells = []; currentCells.length > 0; currentCells = nextCells, nextCells = []) {
        for (const [x, y] of currentCells) {
            for (const [dx, dy] of directions) {
                const newX = x + dx, newY = y + dy;
                // Check if the new cell is valid and the distance to the nearest thief is not calculated yet
                if (isValid(newX, newY, n) && nearestThiefDistances[newX][newY] === Infinity) {
                    // Update the distance to the nearest thief for the new cell
                    nearestThiefDistances[newX][newY] = nearestThiefDistances[x][y] + 1;
                    // Add the new cell to the next cells to explore in BFS
                    nextCells.push([newX, newY]);
                }
            }
        }
    }

    // Return the array of nearest distances from each cell to the nearest thief
    return nearestThiefDistances;
};

```
