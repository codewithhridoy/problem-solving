# [The Number of Beautiful Subsets](https://leetcode.com/problems/the-number-of-beautiful-subsets/description)

![image.png](https://assets.leetcode.com/users/images/e13e93ce-1f5c-4b32-a784-0cff88680c7b_1716478445.6708097.png)

# Intuition

To solve this problem, we need to count all non-empty subsets of the given array `nums` where no two elements in any subset have an absolute difference equal to `k`. This involves generating all possible subsets and checking the condition for each subset.

# Approach

1. Use a recursive function to generate all possible subsets of the given array.
2. For each element in the array, create a new subset excluding elements that have an absolute difference of `k` with the current element.
3. Recursively count the beautiful subsets for the newly formed subset.
4. Keep track of the total count of beautiful subsets.

# Complexity

- Time complexity: $$O(2^n)$$ because we are generating all possible subsets of the array.

- Space complexity: $$O(2^n)$$ due to the recursion stack and storage of subsets.

# Code

```javascript
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
```
