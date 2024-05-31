/**
 * @param {number[]} nums
 * @return {number[]}
 */
function singleNumber(nums) {
  // Step 1: XOR all the numbers to get the XOR of the two unique numbers
  let xor = 0;
  for (const num of nums) {
    xor ^= num;
  }

  // Step 2: Find a bit that is set in the xor result (this bit must be different between the two unique numbers)
  let bit = 1;
  while ((xor & bit) === 0) {
    bit <<= 1;
  }

  // Step 3: Partition the numbers into two groups based on the selected bit
  let num1 = 0, num2 = 0;
  for (const num of nums) {
    if (num & bit) {
      num1 ^= num; // The bit is set
    } else {
      num2 ^= num; // The bit is not set
    }
  }

  // Step 4: The two unique numbers are num1 and num2
  return [num1, num2];
}
