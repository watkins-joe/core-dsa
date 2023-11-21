class ListNode {
  value: string | number;
  next: ListNode;

  constructor(value: string | number, next: ListNode = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  head: ListNode;

  constructor(head: ListNode = null) {
    this.head = head;
  }

  /**
   * Adds a ListNode to the linked list.
   * 
   * Time complexity: `O(1)` if added to the head. Otherwise, `O(n)` due to traveling to the last ListNode in order to add the new ListNode.
   * 
   * Space complexity: `O(n)`, the number of nodes in the ListNode being added.
   * @returns Length of linked list
   */
  add(node: ListNode) {
    let currentNode = this.head;

    // If the list is empty then add an element and it will be head
    if (!currentNode) {
      this.head = node;
      return;
    }
    // If the list is not empty then iterate to the end of the list and add an element at the end of the list
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }

  /**
   * Prints a string representation of the LinkedList.
   * 
   * Time complexity: `O(n)`, as we are iterating through each ListNode in the LinkedList in order to add its value to a temporary array of which we convert into the final string representation.
   * 
   * Space complexity: `O(n)`, we take up `n` storage in memory, storing each value of `n` number of ListNodes in the LinkedList.
   * @returns String representation of LinkedList | `null`
   */
  print() {
    let values = [];

    let currentNode = this.head;

    if(!currentNode) return null;

    while (currentNode) {
        values.push(currentNode.value);
        currentNode = currentNode.next
    }

    return values.join(" > ");
  }

  /**
   * Determines length of linked list.
   * 
   * Time complexity: `O(n)`
   * 
   * Space complexity: `O(1)`
   * @returns Length of linked list
   */
  getSize() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
}

const obj: ListNode = {
  value: 6,
  next: {
    value: 5,
    next: {
      value: 4,
      next: {
        value: 3,
        next: {
          value: 2,
          next: {
            value: 1,
            next: null,
          },
        },
      },
    },
  },
};

const list = new LinkedList(obj);
console.log(list.getSize()); // 6

const obj2 = new ListNode(
  6,
  new ListNode(
    5,
    new ListNode(
      4,
      new ListNode(3, new ListNode(2, new ListNode(1, new ListNode(0))))
    )
  )
);

const list2 = new LinkedList(obj2);
console.log(list2.getSize()); // 7
list2.add(new ListNode(-1));
console.log(list2.getSize()); // 8
console.log(list2.print());

const list3 = new LinkedList(new ListNode(1, new ListNode(2)));
console.log(list3.print());