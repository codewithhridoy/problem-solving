# Intuition
The problem involves validating whether a given string contains validly matched parentheses. To solve it, we can utilize a stack data structure. We'll iterate through the string, pushing opening parentheses onto the stack and popping them off when encountering their corresponding closing parentheses. If at any point we encounter a closing parenthesis that doesn't match the top element of the stack, or if the stack becomes empty when it shouldn't, the string is invalid.

# Approach
We'll use a stack to keep track of opening parentheses encountered so far. Iterating through the string character by character:

1. If we encounter an opening parenthesis, we'll push it onto the stack.
2. If we encounter a closing parenthesis, we'll check if it matches the top element of the stack. If it does, we'll pop the top element.
3. If the closing parenthesis doesn't match or if the stack is empty, we'll return false.
4. After iterating through the entire string, if the stack is empty, we'll return true, indicating that the string has validly matched parentheses.

# Complexity
- Time complexity: O(n), where n is the length of the input string. We iterate through each character of the string once.

- Space complexity: O(n), where n is the length of the input string. In the worst case, the stack can contain all opening parentheses from the string.

# Code
```
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (const char of s) {
        if (char in map) {
            stack.push(char);
        } else if (!stack.length || char !== map[stack.pop()]) {
            return false;
        }
    }

    return stack.length === 0;
};

```