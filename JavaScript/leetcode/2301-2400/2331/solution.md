# [Evaluate Boolean Binary Tree](https://leetcode.com/problems/evaluate-boolean-binary-tree/description/)

![image.png](https://assets.leetcode.com/users/images/5ddf363b-57a4-44e3-9b5e-6d9b841366ca_1715872228.7969744.png)

# Intuition

To solve this problem, we need to traverse the binary tree recursively and evaluate each node based on its value. If the node is a leaf node, we return its boolean value. If it's an OR node, we return the result of evaluating its left child OR its right child. If it's an AND node, we return the result of evaluating its left child AND its right child.

# Approach

Recursively traverse the binary tree, evaluating each node according to the rules mentioned above.

# Complexity

- Time complexity: O(n), where n is the number of nodes in the binary tree.
- Space complexity: O(h), where h is the height of the binary tree, due to the recursion stack.

# Code

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const evaluateTree = function (root) {
  if (root.val === 2)
    return evaluateTree(root.left) || evaluateTree(root.right);
  if (root.val === 3)
    return evaluateTree(root.left) && evaluateTree(root.right);
  return Boolean(root.val);
};
```
