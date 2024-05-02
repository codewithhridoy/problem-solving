# [Largest Positive Integer That Exists With Its Negative](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative)

# Intuition

To find the largest positive integer k such that -k also exists in the array, we can iterate through the array and keep track of positive integers encountered. For each positive integer k, we check if its negative counterpart -k exists in the array. If it does, we update the maximum value of k found so far. Finally, we return the maximum value of k found, or -1 if no such k exists.

# Approach

1. We initialize a variable maxK to store the maximum positive integer k found so far, initialized to -1. We also create a Set numSet containing all the numbers in the input array nums.
2. Then, we iterate through the array nums. For each positive number num, we check if its negative counterpart -num exists in numSet. If it does, we update maxK to be the maximum of its current value and num.
3. Finally, we return maxK if it is not -1, indicating that a valid positive integer k exists, otherwise, we return -1.

# Complexity

- Time complexity: O(n), where n is the length of the input array nums. We iterate through the array once.

- Space complexity: O(n), where n is the length of the input array nums. We use a Set to store the numbers in the array.

# Code

```
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxK = function (nums) {
    let maxK = -1;
    const numSet = new Set(nums);

    for (const num of nums) {
        if (num > 0 && numSet.has(-num)) {
            maxK = Math.max(maxK, num);
        }
    }

    return maxK;
};
```
