# [Distribute Coins in Binary Tree](https://leetcode.com/problems/distribute-coins-in-binary-tree/description)

![image.png](https://assets.leetcode.com/users/images/194f959a-c420-4347-a3b8-016c9edb4c91_1716038974.804643.png)

# Intuition

The problem requires redistributing coins across the binary tree such that each node has exactly one coin. The intuition is to use a post-order traversal of the tree to calculate the number of moves required to balance the coins at each node. Each node will either give or take coins from its children, and we'll accumulate the total number of such moves.

# Approach

1. Perform a post-order traversal of the tree using a helper function `calculateBalance`.
2. For each node, calculate the balance as `node.val - 1` plus the balances of its left and right children.
3. The balance of a node indicates how many coins need to be moved to or from this node to make it balanced (having exactly one coin).
4. Accumulate the absolute values of these balances in `totalMoves` to get the total number of moves required.
5. Return the accumulated `totalMoves` after traversing the entire tree.

# Complexity

- Time complexity: $$O(n)$$ because we traverse each node of the tree exactly once.

- Space complexity: $$O(h)$$, where $$h$$ is the height of the tree. This is due to the recursive call stack.

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
 * @return {number}
 */
var distributeCoins = function (root) {
  let totalMoves = 0;

  const calculateBalance = (node) => {
    if (!node) return 0;

    const nodeBalance =
      node.val - 1 + calculateBalance(node.left) + calculateBalance(node.right);
    totalMoves += Math.abs(nodeBalance);

    return nodeBalance;
  };

  calculateBalance(root);
  return totalMoves;
};
```
