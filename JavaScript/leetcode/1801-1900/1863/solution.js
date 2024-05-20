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


