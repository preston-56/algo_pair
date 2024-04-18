// Definition for singly-linked list node
function ListNode(val, next) {
  this.val = val;
  this.next = next ? next : null;
}

/**
 * Reverses a singly-linked list.
 * @param {ListNode} head The head of the linked list.
 * @return {ListNode} The head of the reversed linked list.
 */
var reverseList = function (head) {
  let prev = null;
  while (head !== null) {
    const nextTemp = head.next;
    head.next = prev;
    prev = head;
    head = nextTemp;
  }
  return prev;
};

// Function to convert linked list to array
function linkedListToArray(head) {
  let arr = [];
  let current = head;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

// Test cases
const list1 = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
};

console.log(linkedListToArray(reverseList(list1))); // Output: [5, 4, 3, 2, 1]

const list2 = { val: 1, next: { val: 2, next: null } };
console.log(linkedListToArray(reverseList(list2))); // Output: [2, 1]

const list3 = null;
console.log(reverseList(list3)); // Output: null
