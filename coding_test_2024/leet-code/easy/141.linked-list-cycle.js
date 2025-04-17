// URL > https://leetcode.com/problems/linked-list-cycle/description/?envType=study-plan-v2&envId=top-interview-150

const solution = (head) => {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;           // Move one step
        fast = fast.next.next;      // Move two steps

        if (slow === fast) {
            return true;              // Cycle detected
        }
    }

    return false;                 // No cycle
};
