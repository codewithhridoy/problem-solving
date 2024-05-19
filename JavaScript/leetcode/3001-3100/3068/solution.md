# [Find the Maximum Sum of Node Values](https://leetcode.com/problems/find-the-maximum-sum-of-node-values/description)

![image.png](https://assets.leetcode.com/users/images/28e38ef3-5cb1-4738-9732-74f6789d79bf_1716133306.0571995.png)

# Intuition

The problem involves maximizing the sum of node values after optionally applying an XOR operation to each node. The XOR operation can either increase or decrease the node value. The goal is to maximize the total sum by strategically choosing which nodes to apply the XOR to.

# Approach

1. **Initial Calculation**:

   - Calculate the total sum of the original node values.
   - Calculate the potential change in each node's value if the XOR is applied.
   - Keep track of the net change in total sum if the XOR operation is applied to each node.

2. **Classification of Changes**:

   - If applying XOR results in a positive change (increase), add this change to the total sum.
   - Keep track of the smallest positive change and the largest negative change.

3. **Even vs. Odd Positive Changes**:
   - If the number of positive changes is even, then directly return the modified total sum.
   - If the number of positive changes is odd, adjust the total sum by potentially swapping the smallest positive change with the largest negative change to ensure the maximum sum.

# Complexity

- Time complexity: \(O(n)\), where \(n\) is the number of nodes. We iterate through the list of nodes once to compute the potential changes.
- Space complexity: \(O(1)\), since we only use a few additional variables to keep track of changes.

# Code

```javascript
/**
 * @param {number[]} nums - Array of node values
 * @param {number} k - The XOR value to be applied
 * @param {number[][]} edges - Array of edges representing the tree structure
 * @return {number} - The maximum possible sum of node values
 */
const maximumValueSum = (nums, k, edges) => {
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
    : Math.max(
        totalSum - smallestPositiveChange,
        totalSum + largestNegativeChange
      );
};
```
