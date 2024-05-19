/**
 * @param {number[]} nums - Array of node values
 * @param {number} k - The XOR value to be applied
 * @param {number[][]} edges - Array of edges representing the tree structure
 * @return {number} - The maximum possible sum of node values
 */
const maximumValueSum = (nums, k) => {
  let totalSum = 0;
  let positiveChangeCount = 0;
  let smallestPositiveChange = Infinity;
  let largestNegativeChange = -Infinity;

  for (let nodeValue of nums) {
    let nodeValueAfterXor = nodeValue ^ k;
    totalSum += nodeValue;
    let netChange = nodeValueAfterXor - nodeValue;

    if (netChange > 0) {
      // If net change is positive, update the smallest positive change and increment the total sum
      smallestPositiveChange = Math.min(smallestPositiveChange, netChange);
      totalSum += netChange;
      positiveChangeCount += 1;
    } else {
      // If net change is negative, update the largest negative change
      largestNegativeChange = Math.max(largestNegativeChange, netChange);
    }
  }

  // If the count of positive changes is even, return the total sum
  // Otherwise, return the maximum sum by adjusting with the smallest positive or largest negative change
  return positiveChangeCount % 2 === 0
    ? totalSum
    : Math.max(totalSum - smallestPositiveChange, totalSum + largestNegativeChange);
};

