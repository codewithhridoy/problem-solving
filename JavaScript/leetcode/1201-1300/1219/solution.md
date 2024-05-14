# [Maximum Gold Collection](https://leetcode.com/problems/path-with-maximum-gold/description)

## Problem Description

Given a 2D grid `grid` representing a grid of gold mines. Each cell in `grid` has a certain amount of gold. The starting point is the top-left cell, and you can move in four directions: up, down, left, and right. You cannot visit the same cell more than once. The aim is to collect the maximum amount of gold by visiting each non-empty cell exactly once.

# Intuition

The problem seems to involve exploring a grid to collect gold, moving from one cell to another, with the constraint of not visiting the same cell twice. A backtracking approach appears suitable, where we explore all possible paths from each cell and keep track of the maximum gold collected.

## Approach

1. **Explore Each Cell**:
   - Iterate through each cell in the grid.
2. **Calculate Total Gold and Slots**:
   - During the first iteration, calculate the total amount of gold and the total number of slots in the grid.
3. **Backtracking Exploration**:
   - For each cell containing gold, perform a backtracking exploration to find the maximum amount of gold that can be collected starting from that cell.
   - Start the exploration from each cell with gold, moving to neighboring cells recursively.
   - Keep track of the maximum amount of gold collected during each exploration.
   - If the maximum gold collected equals the total gold in the grid, return this maximum value.
4. **Exploration Function**:
   - Within the exploration function:
     1. Check boundaries: Ensure the current cell is within the grid boundaries.
     2. Check if maximum gold is already found: If the maximum gold has been found, stop further exploration.
     3. Check if all slots are visited: If all slots in the grid are visited, stop further exploration.
     4. Check if the current cell contains gold: If the current cell contains gold, continue exploration; otherwise, stop.
     5. Mark the current cell as visited and increment the visit count.
     6. Recursively explore neighboring cells (up, down, left, right) and backtrack after exploration.
     7. Return the maximum amount of gold collected in the current exploration path.

## Complexity Analysis

- **Time Complexity**: \(O(m \times n \times 4^k)\), where \(m\) is the number of rows, \(n\) is the number of columns, and \(k\) is the average length of the paths.
- **Space Complexity**: \(O(m \times n)\) for the recursion stack.

# Code

```
/**
 * @param {number[][]} grid
 * @return {number}
 */
const getMaximumGold = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    let totalGold = 0, totalSlots = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            totalGold += grid[i][j];
            totalSlots++;
        }
    }

    let hasCoveredAllSlots = false, maxGold = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            maxGold = Math.max(maxGold, exploreForMaxGold(i, j, 0));

            if (maxGold === totalGold) {
                return maxGold;
            }
        }
    }
    return maxGold;

    function exploreForMaxGold(row, col, visitCount) {
        if (row < 0 || row >= rows || col < 0 || col >= cols) {
            return 0;
        }

        // If already found max, no need to explore further
        if (hasCoveredAllSlots) {
            return 0;
        }

        // If all slots are visited, no need to explore further
        if (visitCount === totalSlots) {
            hasCoveredAllSlots = true;
            return 0;
        }

        if (grid[row][col] === 0) {
            return 0;
        }

        const goldInCurrentCell = grid[row][col];
        grid[row][col] = 0; // Mark as visited
        visitCount++;

        const up = exploreForMaxGold(row - 1, col, visitCount);
        const down = exploreForMaxGold(row + 1, col, visitCount);
        const left = exploreForMaxGold(row, col - 1, visitCount);
        const right = exploreForMaxGold(row, col + 1, visitCount);

        grid[row][col] = goldInCurrentCell; // Backtrack: restore the cell value

        return goldInCurrentCell + Math.max(up, down, left, right);
    }
};

```
