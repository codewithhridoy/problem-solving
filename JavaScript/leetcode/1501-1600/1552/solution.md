# [1552. Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls)

---

title: "Maximize Minimum Distance Between Balls"
summary: "This document provides a solution to maximize the minimum distance between balls placed in baskets, using a binary search approach."
date: 2024-06-20
modified_date: 2024-06-20
tags: ["algorithm", "binary search", "greedy", "JavaScript"]
slug: "maximize-minimum-distance-between-balls"

---

# Intuition

The goal is to maximize the minimum distance between any two balls placed in baskets. By leveraging binary search, we can efficiently determine the largest possible minimum distance.

# Approach

1. **Sort the Positions**: Start by sorting the array of basket positions.
2. **Binary Search**: Use binary search to find the maximum minimum distance.
3. **Validation Function**: Implement a helper function to check if a given minimum distance is valid by trying to place all the balls with at least that distance apart.

# Complexity

- Time complexity: \(O(n \log d)\), where \(n\) is the number of baskets and \(d\) is the difference between the maximum and minimum positions in the array.

- Space complexity: \(O(1)\), as we are using only a fixed amount of extra space.

# Code

```javascript
/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
function maxDistance(position, m) {
  position.sort((a, b) => a - b);

  const isValid = (minDist) => {
    let count = 1; // Place the first ball in the first basket
    let lastPos = position[0];

    for (let i = 1; i < position.length; i++) {
      if (position[i] - lastPos >= minDist) {
        count++;
        lastPos = position[i];
      }
      if (count >= m) {
        return true;
      }
    }
    return false;
  };

  let left = 1;
  let right = position[position.length - 1] - position[0];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (isValid(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}
```
