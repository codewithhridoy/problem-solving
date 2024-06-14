# [945. Minimum Increment to Make Array Unique](https://leetcode.com/problems/minimum-increment-to-make-array-unique/)

---
title: "Min Increment For Unique"
summary: "This document provides a solution to the problem of finding the minimum number of increments required to make all elements in an array unique."
date: "2024-06-14"
modifiedDate: "2024-06-14"
tags: ["Algorithm", "JavaScript", "Sorting", "Array"]
slug: "min-increment-for-unique"

---
![image.png](https://assets.leetcode.com/users/images/ff35de28-0590-432b-9654-0c7dfc9d9464_1718340363.2917986.png)


## Intuition

The first thought to solve this problem is to ensure that each element in the array is unique by incrementing the necessary elements. Sorting the array initially can help in easily identifying the elements that need to be incremented.

## Approach

1. Sort the array in ascending order.
2. Iterate through the sorted array starting from the second element.
3. For each element, check if it is less than or equal to the previous element.
4. If it is, calculate the increment needed to make it one more than the previous element.
5. Increment the element and add the increment count to the total moves.
6. Continue this process until the end of the array.
7. Return the total moves as the result.

## Complexity

- **Time complexity:** O(n log n) due to the sorting step. The subsequent iteration through the array is O(n), but the sorting dominates the overall time complexity.

- **Space complexity:** O(1) as the sorting can be done in-place, and only a few extra variables are used.

## Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
function minIncrementForUnique(nums) {
    nums.sort((a, b) => a - b);

    let moves = 0;

    // Iterate through the sorted array
    for (let i = 1; i < nums.length; i++) {
        // If the current element is not greater than the previous one
        if (nums[i] <= nums[i - 1]) {
            // Calculate the number of moves needed to make it greater
            let increment = nums[i - 1] - nums[i] + 1;
            // Increment the current element
            nums[i] += increment;
            // Add the moves to the total count
            moves += increment;
        }
    }

    return moves;
}
