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