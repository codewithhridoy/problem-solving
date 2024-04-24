# [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists)

# Intuition
We are given two sorted linked lists, and our goal is to merge them into a single sorted linked list. A common approach to this problem is to use a pointer for each list and traverse both lists simultaneously, comparing the values at each step and appending the smaller value to the merged list. This process continues until one of the lists is exhausted. Then, we can simply append the remaining nodes from the non-empty list to the merged list.

# Approach
1. Initialize pointers p1 and p2 to the heads of the input lists list1 and list2, respectively.
2. Create a dummy node head with a value of 0, and set current pointer to this dummy node.
3. Iterate through both lists using a while loop until either p1 or p2 becomes null.
4. Compare the values pointed to by p1 and p2.
    - If p1.val is smaller or equal to p2.val, append p1 to the merged list and move p1 to its next node.
    - Otherwise, append p2 to the merged list and move p2 to its next node.
5. After the loop ends, check if either p1 or p2 is not null (i.e., there are remaining nodes in either list). If so, append those remaining nodes to the merged list.
6. Return the next node after the dummy head, which represents the merged list.

# Complexity
- Time complexity: O(n), where n is the total number of nodes in the merged list. We traverse each node of both input lists exactly once.

- Space complexity: O(1), as we only use a constant amount of extra space for pointers and dummy nodes.

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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  const head = new ListNode(0);
  let current = head;
  let [p1, p2] = [l1, l2];
  
  while (p1 && p2) {
    if (p2.val < p1.val) {
      current.next = p2;
      p2 = p2.next;
    } else {
      current.next = p1;
      p1 = p1.next;
    }
    current = current.next;
  }
  
  current.next = p1 || p2;
  
  return head.next;
};

```