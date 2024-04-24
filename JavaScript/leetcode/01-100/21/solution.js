 // Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

/**
 * @return {ListNode}
 * @param l1
 * @param l2
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
