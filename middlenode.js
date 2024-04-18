function ListNode(val, next) {
    this.val = val;
    this.next = next ? next : null;
}

function middleNode(head) {
    let slow = head;
    let fast = head;
    
    // Move fast pointer two steps ahead and slow pointer one step ahead
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // At this point, the slow pointer will be at the middle or second middle node
    // Convert the remaining list to an array
    const result = [];
    while (slow) {
        result.push(slow.val);
        slow = slow.next;
    }
    return result;
}

// Test cases
const list1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))); // [1,2,3,4,5]
console.log(middleNode(list1)); // Output: [3, 4, 5]

const list2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))); // [1,2,3,4,5,6]
console.log(middleNode(list2)); // Output: [4, 5, 6]
