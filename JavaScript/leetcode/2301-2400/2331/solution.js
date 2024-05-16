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
  if (root.val === 2) return evaluateTree(root.left) || evaluateTree(root.right)
  if (root.val === 3) return evaluateTree(root.left) && evaluateTree(root.right)
  return Boolean(root.val)
};