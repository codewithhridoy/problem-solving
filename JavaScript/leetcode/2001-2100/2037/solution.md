# [2037. Minimum Number of Moves to Seat Everyone](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone)

---
title: "Minimize Moves to Seat Students"
summary: "An algorithm to minimize the number of moves required to seat students in the correct order by sorting and calculating the absolute difference."
date: 2024-06-13
modifiedDate: 2024-06-13
tags: ["algorithm", "sorting", "javascript", "complexity"]
slug: "minimize-moves-to-seat-students"

---

![image.png](https://assets.leetcode.com/users/images/5014e99d-638d-4e12-be8c-859fcc3e8800_1718280552.7824206.png)


# Intuition
The initial intuition to solve this problem is to match the students to the seats in such a way that the total number of moves is minimized. This can be achieved by pairing the smallest available seat with the smallest student, the next smallest seat with the next smallest student, and so on.

# Approach
1. **Sort the Arrays**: Start by sorting both the seats and the students arrays. This ensures that the smallest seat is paired with the smallest student, minimizing the movement.
2. **Calculate Moves**: Iterate through the sorted arrays and compute the absolute difference between the corresponding elements. Sum these differences to get the total number of moves required.

# Complexity
- Time complexity: O(n log n) due to the sorting operation on both arrays.
- Space complexity: O(1) if we do not count the input arrays, as we are using a constant amount of additional space.

# Code
```javascript
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
function minMovesToSeat(seats, students) {
    // Sort both arrays
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);

    let totalMoves = 0;

    // Calculate the total moves required
    for (let i = 0; i < seats.length; i++) {
        totalMoves += Math.abs(seats[i] - students[i]);
    }

    return totalMoves;
}
