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