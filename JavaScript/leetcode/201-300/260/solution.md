# [Single Number III](https://leetcode.com/problems/single-number-iii/description)

---

title: "Finding Two Unique Numbers in an Array"
summary: "A detailed approach to solve the problem of finding two unique numbers in an array where every other number appears twice."
date: "2024-05-31"
modifiedDate: "2024-05-31"
tags: ["algorithm", "bit manipulation", "XOR", "JavaScript"]
slug: "finding-two-unique-numbers"

---

# Intuition

To solve the problem of finding two unique numbers in an array where every other number appears twice, we need a method that efficiently identifies the two numbers that are different. The XOR operation is particularly useful for this problem because it has properties that can help us differentiate the unique numbers.

# Approach

1. **XOR All Numbers**: First, XOR all the numbers in the array. Since XOR-ing two identical numbers results in 0, the result will be the XOR of the two unique numbers.
2. **Find a Differentiating Bit**: Identify a bit that is set (1) in the result of the XOR. This bit is guaranteed to be different between the two unique numbers.
3. **Partition the Numbers**: Partition the numbers in the array into two groups based on whether the differentiating bit is set. XOR-ing the numbers in each group will result in the two unique numbers.
4. **Return the Unique Numbers**: The results from the previous step are the two unique numbers.

# Complexity

- Time complexity: $$O(n)$$, where $$n$$ is the number of elements in the array. We iterate through the array a constant number of times.
- Space complexity: $$O(1)$$. We use a constant amount of extra space.

# Code

```javascript
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
  let num1 = 0,
    num2 = 0;
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
```
