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
    const prev = dp.map(row => row.slice());

    // Append a P.
    dp[0][0] = (prev[0][0] + prev[0][1] + prev[0][2]) % kMod;

    // Append an L.
    dp[0][1] = prev[0][0];

    // Append an L.
    dp[0][2] = prev[0][1];

    // Append an A or append a P.
    dp[1][0] = (prev[0][0] + prev[0][1] + prev[0][2] +
      prev[1][0] + prev[1][1] + prev[1][2]) % kMod;

    // Append an L.
    dp[1][1] = prev[1][0];

    // Append an L.
    dp[1][2] = prev[1][1];
  }

  return (dp[0].reduce((a, b) => (a + b) % kMod, 0) +
    dp[1].reduce((a, b) => (a + b) % kMod, 0)) % kMod;
};


// Example usage:
console.log(checkRecord(2));  // Output: 8
console.log(checkRecord(10101));  // Output: 183236316