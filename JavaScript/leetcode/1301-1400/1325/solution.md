# [Delete Leaves With a Given Value](https://leetcode.com/problems/delete-leaves-with-a-given-value/description)

![image.png](https://assets.leetcode.com/users/images/c2c8f0b0-a130-49a3-958e-c98838324d71_1715953067.9586835.png)

## Intuition

The problem requires removing leaf nodes from a binary tree if their value equals a given target. A leaf node is defined as a node with no children. To solve this problem, a recursive approach is fitting because we need to traverse the tree and potentially modify its structure.

## Approach

1. **Base Case:** If the current node is `null`, return `null`.
2. **Recursive Case:** Recursively apply the function to the left and right children of the current node.
3. **Post-Order Traversal:** Check if the current node has become a leaf node (both children are `null`) and if its value equals the target. If so, return `null` to remove it; otherwise, return the node itself.

The post-order traversal ensures that we check and potentially remove child nodes before considering the parent node, which is essential for correctly handling the removal of leaf nodes.

## Complexity

- **Time Complexity:** \(O(n)\), where \(n\) is the number of nodes in the tree. Each node is visited once.
- **Space Complexity:** \(O(h)\), where \(h\) is the height of the tree. This is due to the recursion stack.

# Code

```
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
 * @param {number} target
 * @return {TreeNode}
 */
const removeLeafNodes = function (root, target) {
    if (!root) return null;
    if (root.left) root.left = removeLeafNodes(root.left, target);
    if (root.right) root.right = removeLeafNodes(root.right, target);
    return root.val === target && !root.left && !root.right ? null : root;
}
```
