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

    if (nums[i] === isFlipped) { // if the current bit needs to be flipped
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