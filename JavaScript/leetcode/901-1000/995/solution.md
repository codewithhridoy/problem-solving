# [995. Minimum Number of K Consecutive Bit Flips](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips)

---

title: "Minimize K Consecutive Bit Flips"
summary: "An approach to solve the problem of minimizing K consecutive bit flips using a greedy algorithm."
date: "2024-06-24"
modified_date: "2024-06-24"
tags: ["algorithm", "greedy", "bit manipulation"]
slug: "minimize-k-consecutive-bit-flips"

---

# Intuition

To solve the problem of flipping k consecutive bits to make all bits 1, we need a strategy that allows us to keep track of the flips efficiently. The naive approach of flipping each bit directly would be too slow, so we need a more optimized method.

# Approach

We use a greedy algorithm combined with an auxiliary array to keep track of the flips. The main idea is to iterate through the array and flip the bits as needed. We also use an auxiliary array to record the flip operations and maintain the current flip state using a variable.

Here's a step-by-step approach:

1. Initialize a counter `flipCount` to count the number of flips.
2. Use an auxiliary array `flipped` to keep track of the flips at each position.
3. Iterate through the array, and for each bit, determine if it needs to be flipped based on the current flip state.
4. If a flip is needed, check if it's possible to flip the next `k` bits. If not, return -1.
5. Update the flip state and mark the current position in the auxiliary array.
6. Continue until all bits are processed.

# Complexity

- **Time complexity:** $$O(n)$$
  Iterate through the array once, making the time complexity linear with respect to the size of the input array.

- **Space complexity:** $$O(n)$$
  Use an auxiliary array of the same size as the input array to keep track of the flips.

# Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minKBitFlips(nums, k) {
  let n = nums.length;
  let flipCount = 0; // to count the number of flips
  let flipped = new Array(n).fill(0); // track the flips using an auxiliary array
  let isFlipped = 0; // track the current state of flips

  for (let i = 0; i < n; i++) {
    if (i >= k) {
      isFlipped ^= flipped[i - k]; // unmark the flip effect of the position that is out of the current window
    }

    if (nums[i] === isFlipped) {
      // if the current bit needs to be flipped
      if (i + k > n) {
        return -1; // not enough elements to flip k bits
      }
      flipped[i] = 1; // mark the flip
      isFlipped ^= 1; // toggle the flip state
      flipCount++; // increment the flip count
    }
  }

  return flipCount;
}
```
