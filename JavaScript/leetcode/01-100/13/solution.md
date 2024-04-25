# [Roman to Integer](https://leetcode.com/problems/roman-to-integer/description/)

# Intuition
The problem requires converting a Roman numeral string to an integer. My initial thought is to iterate through the string, converting each Roman numeral character to its corresponding integer value and summing them up.

# Approach
I'll create a mapping of Roman numeral characters to their integer values. Then, I'll iterate through the input string. For each character, I'll compare its value to the next character's value. If the current value is less than the next value, I'll subtract the current value from the result; otherwise, I'll add it to the result.

# Complexity
- Time complexity: The time complexity of this approach is O(n), where n is the length of the input string. We iterate through the string once.


- Space complexity: The space complexity is O(1) because we only use a fixed-size map for the Roman numeral values and a few variables for iteration and storing the result. The space complexity does not grow with the size of the input.

# Code
```
/**
 * @param {string} s
 * @return {number}
 */

const mapRomanValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

const romanToInt = function (s) {
  const chars = s.split('');

  return chars.reduce((result, current, index) => {
    const currentValue = mapRomanValues[current];
    const nextValue = mapRomanValues[chars[index + 1]];

    if (currentValue < nextValue) {
      return result - currentValue;
    } else {
      return result + currentValue;
    }
  }, 0);
};

```