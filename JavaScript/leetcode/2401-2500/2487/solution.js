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