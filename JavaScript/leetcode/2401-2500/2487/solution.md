# [Remove Nodes From Linked List](https://leetcode.com/problems/remove-nodes-from-linked-list/description)

# Intuition

My first thought is to utilize a recursive approach to traverse the linked list. At each node, I'll compare its value with the value of its next node. If the next node has a greater value, I'll remove the current node by skipping it in the list.

# Approach

1. Define a recursive function that takes a node as an argument.
2. Base case: If the node is null, return null.
3. Recursively call the function on the next node.
4. Check if the current node should be removed:
   - If the next node exists and its value is greater than the current node's value, skip the current node by returning its next node.
   - Otherwise, keep the current node.
5. Return the updated head of the linked list after removals.

# Complexity

- Time complexity: The time complexity of this approach is O(n), where n is the number of nodes in the linked list. This is because we traverse the entire list once.

- Space complexity: The space complexity is also O(n) due to the recursive calls, where n is the depth of the recursion stack, which is equivalent to the number of nodes in the linked list.

# Code

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const removeNodes = (head) => {
    // Base case: if the head is null, return null as there are no nodes to process.
    if (head === null) return null;

    // Recursively call the function on the next node of the current head.
    head.next = removeNodes(head.next);

    // Check if the current node should be removed.
    // If the next node exists and its value is greater than the current node's value,
    // set the current node's next to the next node's next, effectively removing the current node.
    // Otherwise, keep the current node.
    return head.next !== null && head.val < head.next.val ? head.next : head;
};
```
