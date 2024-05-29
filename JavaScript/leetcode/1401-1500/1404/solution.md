# [Number of Steps to Reduce a Number in Binary Representation to One](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/description/)

---

title: "Counting Steps to Reduce a Binary Number to One"
summary: "An algorithm to count the number of steps to reduce a binary number to one, with detailed explanation and code implementation."
date: 2024-05-29
modifiedDate: 2024-05-29
tags: ["algorithm", "binary number", "steps", "JavaScript"]
slug: "counting-steps-to-reduce-a-binary-number-to-one"

---

![image.png](https://assets.leetcode.com/users/images/dca88ab8-14d2-4534-828a-4ef1255465f5_1716999197.5114245.png)

## Intuition

To solve this problem, the primary goal is to determine how many steps it takes to reduce a binary number to one. The steps include either subtracting one from the number or dividing the number by two, depending on whether the number is odd or even.

## Approach

1. Start by initializing `steps` and `carry` to zero.
2. Traverse the binary string from right to left, beginning from the second-to-last character.
3. For each character, convert it to an integer to determine the current digit.
4. Depending on the value of the current digit plus any carry from the previous step, increment the steps accordingly:
   - If the sum is 1, increment steps by 2 and set the carry to 1 (since we need to both add one and then divide by two).
   - If the sum is 0 or 2, increment steps by 1.
5. Continue until the loop finishes.
6. Finally, return the total number of steps plus any remaining carry.

## Complexity

- Time complexity: $$O(n)$$

  - We traverse the string once from right to left, making the time complexity linear with respect to the length of the string.

- Space complexity: $$O(1)$$
  - We use a constant amount of extra space regardless of the input size.

## Code

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  let steps = (carry = 0);

  for (let i = s.length - 1; i > 0; i--) {
    const currentDigit = parseInt(s[i]);
    if (currentDigit + carry === 1) {
      steps += 2;
      carry = 1;
    } else {
      steps += 1;
    }
  }

  return steps + carry;
};
```
