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
    return profits.slice(0, k).reduce((totalCapital, profit) => totalCapital + profit, initialCapital);
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
};
