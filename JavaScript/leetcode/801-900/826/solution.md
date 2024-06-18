# [826. Most Profit Assigning Work](https://leetcode.com/problems/most-profit-assigning-work)

---

title: "Max Profit Assignment"
summary: "A solution to the problem of maximizing profit by assigning workers to jobs based on their abilities."
date: "2024-06-18"
modified_date: "2024-06-18"
tags: ["Algorithm", "JavaScript", "Dynamic Programming"]
slug: "max-profit-assignment"

---

![image.png](https://assets.leetcode.com/users/images/a6701003-76f7-4bbf-9d2f-f844e663913a_1718675534.1854534.png)

# Intuition

To solve this problem, the first thought is to match each worker's ability with the most profitable job they can do. This requires sorting both the jobs by their difficulty and the workers by their ability. By iterating through the workers and keeping track of the best profit they can achieve based on their ability, we can ensure that each worker is assigned the most profitable job they can handle.

# Approach

The approach involves the following steps:

1. Pair each job's difficulty with its profit and sort the jobs by difficulty.
2. Sort the workers based on their abilities.
3. Iterate through each worker and for each worker, update the maximum profit they can achieve based on the jobs they can handle.
4. Sum up the profits for all workers to get the total profit.

# Complexity

- Time complexity: $$O(n \log n + m \log m)$$, where $$n$$ is the number of jobs and $$m$$ is the number of workers. This accounts for the sorting of the jobs and workers.

- Space complexity: $$O(n)$$ for storing the job pairs.

# Code

```javascript
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
```
