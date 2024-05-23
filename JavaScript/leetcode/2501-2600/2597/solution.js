/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const beautifulSubsets = (nums, k) => {
  const countBeautifulSubsets = (subset) => {
    const len = subset.length;
    if (len === 0) return 0;

    let totalBeautifulSubsets = 0;

    for (let i = 0; i < len; i++) {
      const newSubset = [];
      for (let j = i + 1; j < len; j++) {
        if (Math.abs(subset[i] - subset[j]) !== k) {
          newSubset.push(subset[j]);
        }
      }
      totalBeautifulSubsets += 1 + countBeautifulSubsets(newSubset);
    }

    return totalBeautifulSubsets;
  };

  return countBeautifulSubsets(nums);
};

// Example
console.log(beautifulSubsets([2, 4, 6], 2)); // Output: 4
