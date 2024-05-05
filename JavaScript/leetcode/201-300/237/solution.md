# [Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/description/)

# Intuition
The problem provides a singly-linked list and a node to be deleted. Since we don't have direct access to the head node of the linked list, we need to delete the given node in-place.

# Approach
To delete the given node node from the linked list, we can copy the value of the next node into node, effectively overwriting node's value. Then, we skip over the next node by setting node.next to node.next.next.

# Complexity
- Time complexity: O(1) as We are directly modifying the given node and its next node, so the time complexity is constant.


- Space complexity: O(1) as We are not using any extra space that scales with the input size.


# Code
```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function (node) {
    if (node === null || node.next === null) return;

    // Copy the value of the next node into the current node
    node.val = node.next.val;

    // Skip over the next node
    node.next = node.next.next;
};
```