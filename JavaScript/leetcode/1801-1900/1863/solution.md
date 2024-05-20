# [Sum of All Subset XOR Totals](https://leetcode.com/problems/sum-of-all-subset-xor-totals/description)

![Screenshot from 2024-05-20 21-27-26.png](https://assets.leetcode.com/users/images/e6df65b7-7d0a-4e05-93e2-aa5a20d01d12_1716218877.7598128.png)

# Intuition

To solve this problem, we need to calculate the XOR total of every subset of the given array and then sum these XOR totals. The XOR operation has useful properties that allow us to systematically generate all possible subsets and calculate their XOR values using a recursive approach.

# Approach

We can use a recursive function to generate all possible subsets of the array. For each subset, we calculate its XOR total and add it to a running total. The recursive function `calculateSubsetXOR` takes the current index and the current XOR value of the subset. It iterates over the elements starting from the current index, recursively including each element in the subset and updating the current XOR value.

1. Initialize `totalXORSum` to 0.
2. Define the recursive function `calculateSubsetXOR(index, currentXOR)`.
3. For each call to the recursive function, add `currentXOR` to `totalXORSum`.
4. Iterate over the elements starting from `index` and recursively call `calculateSubsetXOR` with the next index and the updated XOR value.
5. Start the recursion from index 0 with an initial XOR value of 0.
6. Return `totalXORSum`.

# Complexity

- Time complexity: \(O(n \cdot 2^n)\)
  - Each element can be either included or excluded from a subset, resulting in \(2^n\) subsets. For each subset, calculating the XOR takes \(O(n)\) time in the worst case.
- Space complexity: \(O(n)\)
  - The maximum depth of the recursion tree is \(n\), resulting in \(O(n)\) space for the call stack.

# Code

```
/**
 * @param {number[]} nums
 * @return {number}
 */
const subsetXORSum = function (nums) {
    let totalXORSum = 0;

    // Recursive function to generate subsets and calculate XOR totals
    function calculateSubsetXOR(index, currentXOR) {
        totalXORSum += currentXOR;
        for (let i = index; i < nums.length; i++) {
            calculateSubsetXOR(i + 1, currentXOR ^ nums[i]);
        }
    }

    // Start generating subsets from index 0 with initial XOR total 0
    calculateSubsetXOR(0, 0);

    return totalXORSum;
}



```
