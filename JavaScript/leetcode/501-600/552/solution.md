# [552. Student Attendance Record II](https://leetcode.com/problems/student-attendance-record-ii/description)

![image.png](https://assets.leetcode.com/users/images/ee7516d9-dbbc-472a-ae41-990c07f6127b_1716733144.937796.png)

# Intuition

The problem requires us to find the number of valid attendance records of a given length \( n \). A valid attendance record must not contain more than one 'A' (absent) and must not contain more than two consecutive 'L's (late).

We can solve this problem using dynamic programming. The idea is to use a state to represent the current count of 'A's and the number of consecutive 'L's.

# Approach

We will use a 2D array `dp` where `dp[i][j]` represents the number of valid sequences of length `i` where `i` can be 0 or 1 indicating the number of 'A's used, and `j` can be 0, 1, or 2 representing the number of consecutive 'L's used at the end of the sequence.

1. Initialize the `dp` array. Set `dp[0][0]` to 1 as the base case since there's one way to have a sequence of length 0 with no 'A' and no consecutive 'L'.
2. Iterate through the length of the sequence from 0 to \( n-1 \).
3. For each length, update the `dp` array by considering the following possibilities:
   - Append 'P' (present): This doesn't change the count of 'A's or consecutive 'L's.
   - Append 'A' (absent): This can only be appended if there are no 'A's used yet.
   - Append 'L' (late): This can be appended if there are less than two consecutive 'L's at the end.
4. Sum up all the possible valid sequences of length \( n \).

# Complexity

- Time complexity: \( O(n) \)
  - We iterate through the sequence length from 0 to \( n \), and in each iteration, we update a fixed number of states.
- Space complexity: \( O(1) \)
  - We use a constant amount of space regardless of the input size because we only need a fixed number of states to keep track of the current and previous states.

# Code

```javascript
/**
 * @param {number} n
 * @return {number}
 */

const checkRecord = (n) => {
  const kMod = 1000000007;

  // dp[i][j] := the length so far with i A's and the last letters are j L's
  let dp = Array.from({ length: 2 }, () => Array(3).fill(0));
  dp[0][0] = 1;

  for (let i = 0; i < n; i++) {
    const prev = dp.map((row) => row.slice());

    // Append a P.
    dp[0][0] = (prev[0][0] + prev[0][1] + prev[0][2]) % kMod;

    // Append an L.
    dp[0][1] = prev[0][0];

    // Append an L.
    dp[0][2] = prev[0][1];

    // Append an A or append a P.
    dp[1][0] =
      (prev[0][0] +
        prev[0][1] +
        prev[0][2] +
        prev[1][0] +
        prev[1][1] +
        prev[1][2]) %
      kMod;

    // Append an L.
    dp[1][1] = prev[1][0];

    // Append an L.
    dp[1][2] = prev[1][1];
  }

  return (
    (dp[0].reduce((a, b) => (a + b) % kMod, 0) +
      dp[1].reduce((a, b) => (a + b) % kMod, 0)) %
    kMod
  );
};
```
