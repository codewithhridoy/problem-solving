# [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

### Intuition

To solve this problem, we can iterate through the linked lists l1 and l2 simultaneously, adding corresponding node values along with any carry from the previous addition. We'll keep track of the carry as we progress and update the result accordingly.

### Approach

- Initialize a dummy head node to simplify the addition process.
- Iterate through the linked lists l1 and l2 simultaneously.
- At each iteration, calculate the sum of the current nodes' values along with any carry from the previous addition.
- Update the carry for the next iteration by dividing the sum by 10 and taking the integer part.
- Create a new node with the sum module 10 and append it to the result linked list.
- Move to the next nodes in both l1 and l2.
- Repeat steps 3-6 until both linked lists are fully traversed and no carry remains.
- Return the next node of the dummy head, which contains the start of the result linked list.

### Complexity
**Time complexity:** O(max(m, n)), where m and n are the lengths of the input linked lists l1 and l2, respectively. We traverse at most max(m, n) nodes in the longer list.

**Space complexity:** O(max(m, n)), the space required by the output linked list, which could be at most the length of the longer input list plus 1 for the carry.

