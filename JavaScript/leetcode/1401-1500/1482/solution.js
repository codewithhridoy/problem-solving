/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
function minDays(bloomDay, m, k) {
  // Helper function to check if we can make m bouquets in given days
  const canMakeBouquets = (days) => {
    let bouquets = 0,
      flowers = 0;
    for (let i = 0; i < bloomDay.length; i++) {
      if (bloomDay[i] <= days) {
        flowers++;
        if (flowers === k) {
          bouquets++;
          flowers = 0; // reset flowers count for the next bouquet
        }
      } else {
        flowers = 0; // reset flowers count if the current flower hasn't bloomed
      }
    }
    return bouquets >= m;
  };

  // Edge case: if total flowers are less than required flowers for m bouquets
  if (bloomDay.length < m * k) {
    return -1;
  }

  // Initialize binary search bounds
  let low = Math.min(...bloomDay);
  let high = Math.max(...bloomDay);
  let result = -1;

  // Perform binary search
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (canMakeBouquets(mid)) {
      result = mid;
      high = mid - 1; // try for a smaller number of days
    } else {
      low = mid + 1; // try for a larger number of days
    }
  }

  return result;
}