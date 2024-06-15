# [502. IPO](https://leetcode.com/problems/ipo/description)

---

title: "Maximized Capital Calculation"
summary: "A guide to solving the problem of finding maximized capital after investing in up to 'k' projects."
date: "2024-06-15"
modifiedDate: "2024-06-15"
tags: ["algorithm", "capital", "investing"]
slug: "maximized-capital-calculation"

---

![image.png](https://assets.leetcode.com/users/images/e283c535-2d2c-40ca-a5a7-bb349f8146f1_1718424122.7133617.png)

# Intuition

To solve the problem of finding the maximized capital after investing in up to 'k' projects, we need to consider both the capital requirements and the potential profits from each project. The goal is to strategically choose projects that yield the highest profits while respecting the capital constraints.

# Approach

1. **Initial Check**: If the initial capital is sufficient to fund any project, sort the profits in descending order and sum the top 'k' profits.
2. **Iterative Selection**: If the initial capital is not sufficient:
   - Initialize the current capital with the initial capital.
   - For up to 'k' projects, iteratively select the project with the highest profit that can be funded with the current capital.
   - Update the capital and mark the selected project as funded to avoid re-selection.

This approach ensures that we always choose the most profitable project available within the current capital constraints.

# Complexity

- **Time complexity**: $$O(k \cdot n)$$

  - Where 'k' is the number of projects we can invest in, and 'n' is the number of projects. In the worst case, we may need to iterate through all projects 'k' times.

- **Space complexity**: $$O(1)$$
  - The space used is constant, as we are only storing a few variables for the current capital and indexes.

# Code

```javascript
/**
 * @param {number} k - The maximum number of projects to invest in.
 * @param {number} initialCapital - The initial capital.
 * @param {number[]} profits - An array containing the profits from each project.
 * @param {number[]} capitalRequirements - An array containing the capital requirements for each project.
 * @return {number} - The maximized capital after investing in up to 'k' projects.
 */
function findMaximizedCapital(k, initialCapital, profits, capitalRequirements) {
  if (initialCapital >= Math.max(...capitalRequirements)) {
    profits.sort((a, b) => b - a);
    return profits
      .slice(0, k)
      .reduce((totalCapital, profit) => totalCapital + profit, initialCapital);
  }

  let currentCapital = initialCapital;

  for (let i = 0; i < k; i++) {
    let maxProfit = -Infinity;
    let selectedProjectIndex = -1;

    for (let j = 0; j < profits.length; j++) {
      if (currentCapital < capitalRequirements[j]) continue;

      if (profits[j] > maxProfit) {
        selectedProjectIndex = j;
        maxProfit = profits[j];
      }
    }

    if (selectedProjectIndex === -1) {
      break;
    }

    capitalRequirements[selectedProjectIndex] = Infinity;
    currentCapital += maxProfit;
  }

  return currentCapital;
}
```
