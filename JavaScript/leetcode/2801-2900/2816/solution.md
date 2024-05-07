# [Double a Number Represented as a Linked List](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/description/)

# Intuition

We need to double the value of each node in a singly-linked list and handle any carry that might occur. One approach could be to iterate through the list, doubling each node's value and adjusting the carry if necessary.

# Approach

1. Start with a reference to the head node.
2. Check if the head node's value is greater than or equal to 5. If so, create a new node with value 0 before the current head to handle any potential carry.
3. Iterate through the linked list.
4. Double the value of each node and take mod 10 to handle any carry.
5. If the current node has a next node and its value is greater than or equal to 5, increment the current node's value to handle the carry.
6. Move to the next node and repeat steps 4-5.
7. Return the head of the modified linked list.

# Complexity

- Time complexity: O(n), where n is the number of nodes in the linked list.

- Space complexity: O(1) because we are using constant extra space, except for the input and output.

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
const doubleIt = function (head) {
    // Store a reference to the head node
    let current = head;

    // Check if the head node's value is greater than or equal to 5
    // If so, create a new node with value 0 before the current head
    if (head.val >= 5) {
        current = new ListNode(0, head);
    }

    // Store the reference to the head of the modified linked list
    let result = current;

    // Iterate through the linked list
    while (current !== null) {
        // Double the value of the current node and take mod 10
        current.val = (current.val * 2) % 10;

        // If the current node has a next node and its value is greater than or equal to 5,
        // increment the current node's value to handle the carry
        if (current.next !== null && current.next.val >= 5) {
            current.val++;
        }

        // Move to the next node
        current = current.next;
    }

    // Return the head of the modified linked list
    return result;
};
```
