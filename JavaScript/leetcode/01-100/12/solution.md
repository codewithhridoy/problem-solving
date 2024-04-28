# [Integer to Roman](https://leetcode.com/problems/integer-to-roman)

# Intuition

My initial thought is to create a mapping between integers and their corresponding Roman numeral symbols. Then, I'll iterate through the integer, subtracting the largest possible value until the integer becomes 0, while appending the corresponding Roman numeral symbols to the result.

# Approach

1. Create an array of objects containing pairs of integer values and their corresponding Roman numeral symbols.
2. Iterate through this array using the reduce method.
3. Within the reduce function:
   - Continuously subtract the largest possible value from the input number.
   - Append the corresponding Roman numeral symbol to the result string.
4. Return the accumulated result.

# Complexity

- Time complexity: Since the algorithm iterates through the array of Roman numeral symbols, its time complexity is O(n), where n is the number of elements in the array.

- Space complexity: The space complexity is O(1) because the algorithm doesn't use any additional space proportional to the size of the input.

# Code

```
/**
 * @param {number} num
 * @return {string}
 */

const intToRoman = function (num) {
  const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  return romanNumerals.reduce((result, { value, symbol }) => {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
    return result;
  }, '');
};
```
