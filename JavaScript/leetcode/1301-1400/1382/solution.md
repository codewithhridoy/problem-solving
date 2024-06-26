# [1382. Balance a Binary Search Tree](https://leetcode.com/problems/balance-a-binary-search-tree)

---

title: "Balancing a Binary Search Tree"
summary: "A detailed explanation on how to balance a Binary Search Tree (BST) using in-order traversal and constructing a balanced BST from a sorted array."
date: "2024-06-26"
modifiedDate: "2024-06-26"
tags: ["Binary Search Tree", "Algorithms", "JavaScript"]
slug: "balancing-a-binary-search-tree"

---

# Intuition

To balance a Binary Search Tree (BST), the primary idea is to convert it into a sorted array using in-order traversal, and then build a balanced BST from that sorted array. This approach ensures that the middle element of the array becomes the root of the balanced BST, and recursively applying this logic to the subarrays results in a balanced tree.

# Approach

1. **In-order Traversal**: Perform an in-order traversal of the BST to retrieve the node values in a sorted order.
2. **Build Balanced BST**: Use the sorted array of node values to construct a balanced BST. The middle element of the array will be the root, and this process is applied recursively to build the left and right subtrees.

# Complexity

- **Time complexity**: \(O(n)\), where \(n\) is the number of nodes in the BST. This is because we perform in-order traversal in \(O(n)\) time and constructing the balanced BST also takes \(O(n)\) time.

- **Space complexity**: \(O(n)\) due to the storage required for the array of node values and the recursion stack during the tree construction process.

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

// Helper function to perform in-order traversal
function inorderTraversal(root, nodes) {
  if (root === null) return;
  inorderTraversal(root.left, nodes);
  nodes.push(root.val);
  inorderTraversal(root.right, nodes);
}

// Helper function to build a balanced BST from a sorted array
function buildBalancedBST(sortedNodes, start, end) {
  if (start > end) return null;
  const mid = Math.floor((start + end) / 2);
  const node = new TreeNode(sortedNodes[mid]);
  node.left = buildBalancedBST(sortedNodes, start, mid - 1);
  node.right = buildBalancedBST(sortedNodes, mid + 1, end);
  return node;
}

// Main function to balance a BST
function balanceBST(root) {
  const nodes = [];
  inorderTraversal(root, nodes);
  return buildBalancedBST(nodes, 0, nodes.length - 1);
}
```
