# [1051. Height Checker](https://leetcode.com/problems/height-checker)

---

title: "Height Checker Problem Solution"
summary: "A detailed explanation and solution for the Height Checker problem, including approach, complexity analysis, and code implementation."
date: "2024-06-10"
modifiedDate: "2024-06-10"
tags: ["algorithm", "javascript", "sorting", "complexity"]
slug: "height-checker-problem-solution"

---

![image.png](https://assets.leetcode.com/users/images/234ce460-98c6-41b1-9f48-21cb7c608f62_1718029369.8292265.png)

# Intuition

To solve the Height Checker problem, we need to determine how many students are not in their expected positions if they were to be arranged in non-decreasing order by height.

# Approach

1. **Copy the Original Heights**: Create a copy of the original heights array to preserve the initial order.
2. **Sort the Heights**: Sort the copied array to get the expected non-decreasing order of heights.
3. **Count Mismatches**: Compare the original heights with the sorted heights to count how many positions have different values.

# Complexity

- Time complexity: $$O(n \log n)$$ due to the sorting operation.

- Space complexity: $$O(n)$$ because we are creating a copy of the original heights array.

# Code

```javascript
/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = (heights) => {
  // Create a copy of the heights array to keep the original order
  const originalHeights = [...heights];

  // Sort the original heights array to get the expected order
  heights.sort((a, b) => a - b);

  // Initialize a counter to count mismatches
  let count = 0;

  // Compare the original heights with the sorted heights
  originalHeights.forEach((height, index) => {
    if (height !== heights[index]) {
      count++;
    }
  });

  return count;
};
```
