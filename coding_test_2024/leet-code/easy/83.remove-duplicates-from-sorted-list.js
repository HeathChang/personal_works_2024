// URL > https://leetcode.com/problems/remove-duplicates-from-sorted-list/

const solution = (head) => {
    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            // Skip the duplicate node
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};

