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