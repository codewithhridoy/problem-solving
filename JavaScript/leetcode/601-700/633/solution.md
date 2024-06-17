# [633. Sum of Square Numbers](https://leetcode.com/problems/sum-of-square-numbers)

---

title: "Judging Square Sums in JavaScript"
summary: "A detailed approach to solving the problem of determining if a given number can be expressed as the sum of two squares in JavaScript."
date: "2024-06-17"
modified_date: "2024-06-17"
tags: ["JavaScript", "Algorithm", "Two Pointers", "Math"]
slug: "judging-square-sums-in-javascript"

---

![image.png](https://assets.leetcode.com/users/images/6e279717-a06a-4254-aa95-c83f66d2ce4f_1718587192.8270721.png)


# Intuition

When given a number \( c \), the goal is to determine if it can be expressed as the sum of two squares. The first thought is to leverage a two-pointer approach to systematically check potential pairs of squares that sum to \( c \).

# Approach

To solve this problem, we use a two-pointer technique. One pointer starts at 0 (`left`), and the other starts at the largest possible integer whose square is less than or equal to \( c \) (`right`). We then iterate and adjust these pointers based on the sum of their squares:

1. Calculate the sum of squares of the two pointers.
2. If the sum equals \( c \), return true.
3. If the sum is less than \( c \), increment the `left` pointer.
4. If the sum is greater than \( c \), decrement the `right` pointer.
5. Continue this process until the `left` pointer exceeds the `right` pointer.

This method ensures that we efficiently explore all possible pairs of squares without redundancy.

# Complexity

- Time complexity:
  The time complexity of this approach is \( O(\sqrt{c}) \) because in the worst case, both pointers will traverse from 0 to \( \sqrt{c} \).

- Space complexity:
  The space complexity is \( O(1) \) since we are only using a fixed amount of extra space for the two pointers and the sum calculation.

# Code

```javascript
/**
 * @param {number} c
 * @return {boolean}
 */
function judgeSquareSum(c) {
    let left = 0;
    let right = Math.floor(Math.sqrt(c));

    while (left <= right) {
        let sumOfSquares = left * left + right * right;
        if (sumOfSquares === c) {
            return true;
        } else if (sumOfSquares < c) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}
