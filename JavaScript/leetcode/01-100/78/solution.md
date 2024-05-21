# [Subsets](https://leetcode.com/problems/subsets/description/)

![image.png](https://assets.leetcode.com/users/images/bd80024e-fbd5-48a2-a56e-418ac5441f5f_1716307038.1541502.png)

# Intuition

To generate all possible subsets of a given set of numbers, we can use a backtracking approach. Backtracking is well-suited for exploring all possible combinations and permutations in a systematic way. By starting with an empty subset and iteratively adding elements, we can generate all possible subsets.

# Approach

1. **Initialize Result**: Create an empty array `result` to store all subsets.
2. **Backtracking Function**: Define a recursive function `backtrack` which takes the current index and the current path (subset being constructed).
   - **Base Case**: At each call, add the current path to the result.
   - **Iterate**: Loop through the remaining elements starting from the current index.
     - **Recursive Call**: For each element, make a recursive call to `backtrack` with the next index and the path including the current element.
3. **Start Backtracking**: Start the backtracking process from index `0` with an empty path.

# Complexity

- **Time Complexity**: \(O(2^n \cdot n)\)
  - Generating all subsets involves \(2^n\) combinations (each element can either be included or not).
  - Copying each subset into the result takes \(O(n)\) time in the worst case.
- **Space Complexity**: \(O(2^n \cdot n)\)
  - Storing all subsets requires \(2^n\) subsets, each of which can be up to \(n\) elements long.

# Code

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  let result = [];

  const backtrack = (nums, index, path) => {
    // Add the current subset (path) to the result
    result.push([...path]);

    // Iterate over the remaining elements starting from 'index'
    for (let i = index; i < nums.length; i++) {
      // Include nums[i] in the current subset and proceed recursively
      path.push(nums[i]);
      backtrack(nums, i + 1, path);
      // Backtrack: remove the last element added
      path.pop();
    }
  };

  // Start backtracking from index 0 with an empty path
  backtrack(nums, 0, []);

  return result;
};
```
