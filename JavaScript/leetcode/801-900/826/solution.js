/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
function maxProfitAssignment(difficulty, profit, worker) {
  // Pair each job's difficulty with its profit and sort by difficulty
  let jobs = difficulty.map((d, i) => [d, profit[i]]);
  jobs.sort((a, b) => a[0] - b[0]);

  // Sort workers based on their abilities
  worker.sort((a, b) => a - b);

  let maxProfit = 0;
  let totalProfit = 0;
  let i = 0;
  let n = jobs.length;

  // Iterate through each worker
  for (let ability of worker) {
    // Update maxProfit for the current worker's ability
    while (i < n && jobs[i][0] <= ability) {
      maxProfit = Math.max(maxProfit, jobs[i][1]);
      i++;
    }
    // Add the best profit the current worker can get
    totalProfit += maxProfit;
  }

  return totalProfit;
}