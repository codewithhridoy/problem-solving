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
 * @return {number}
 */
var distributeCoins = function (root) {
  let totalMoves = 0;

  const calculateBalance = (node) => {
    if (!node) return 0;

    const nodeBalance = node.val - 1 + calculateBalance(node.left) + calculateBalance(node.right);
    totalMoves += Math.abs(nodeBalance);

    return nodeBalance;
  };

  calculateBalance(root);
  return totalMoves;
};
