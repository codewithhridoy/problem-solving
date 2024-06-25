# [1038. Binary Search Tree to Greater Sum Tree](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree)

---

title: "Converting Binary Search Tree to Greater Sum Tree"
summary: "An approach to solving the problem of converting a binary search tree to a greater sum tree using a reverse in-order traversal."
date: "2024-06-25"
modified_date: "2024-06-25"
tags: ["binary search tree", "algorithm", "JavaScript", "tree traversal"]
slug: "converting-bst-to-gst"

---

# Intuition

The idea is to traverse the binary search tree (BST) in a way that allows us to accumulate the sum of all nodes greater than the current node. A reverse in-order traversal (right-root-left) will help in achieving this, as it processes the nodes in decreasing order.

# Approach

1. Initialize a variable `sum` to keep track of the accumulated sum of node values.
2. Perform a reverse in-order traversal:
   - Traverse the right subtree.
   - Update the current node's value with the accumulated sum.
   - Traverse the left subtree.
3. Return the modified tree.

# Complexity

- Time complexity: $$O(n)$$ because each node is visited exactly once.

- Space complexity: $$O(h)$$, where $$h$$ is the height of the tree, due to the recursion stack.

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
 * @return {TreeNode}
 */
function bstToGst(root) {
  let sum = 0;

  function traverse(node) {
    if (!node) return;

    traverse(node.right);

    sum += node.val;
    node.val = sum;

    traverse(node.left);
  }

  traverse(root);
  return root;
}
```
