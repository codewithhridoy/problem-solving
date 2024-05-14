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