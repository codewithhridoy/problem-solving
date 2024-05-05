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