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
