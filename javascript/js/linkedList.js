/**
 * Finds the last ListNode in any given ListNode of a LinkedList.
 *
 * Time complexity: `O(n)`, `n` being the number of ListNodes in the LinkedList.
 * Space complexity: `O(1)`, no additional space is being used to search through the LinkedList.
 * @param node ListNode in which you want to find the last ListNode
 * @returns Last ListNode in the LinkedList
 */
function findLast(node) {
    var currentNode = node;
    if (!currentNode)
        return null;
    while (currentNode.next) {
        if (!currentNode.next)
            return currentNode;
        currentNode = currentNode.next;
    }
    return currentNode;
}
var ListNode = /** @class */ (function () {
    function ListNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(head) {
        if (head === void 0) { head = null; }
        this.head = head;
    }
    /**
     * Adds a ListNode to the linked list.
     *
     * Time complexity: `O(1)` if added to the head. Otherwise, `O(n)` due to traveling to the last ListNode in order to add the new ListNode.
     *
     * Space complexity: `O(n)`, `n` being the number of nodes in the ListNode being added.
     * @returns Length of linked list
     */
    LinkedList.prototype.add = function (node) {
        var currentNode = this.head;
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
    };
    /**
     * Searches the LinkedList for the given value. Returns the first instance of the value in the LinkedList or `null` if the value does not exist in the LinkedList.
     *
     * Time complexity: `O(n)`, n being the total number of ListNodes in the LinkedList to search.
     * Space complexity: `O(1)`, no additional space is being used to search through the LinkedList.
     * @param value The value to search the LinkedList for.
     * @returns ListNode
     */
    LinkedList.prototype.find = function (value) {
        var currentNode = this.head;
        if (!currentNode)
            return null;
        while (currentNode) {
            if (currentNode.value === value)
                return currentNode;
            currentNode = currentNode.next;
        }
        return null;
    };
    /**
     * Adds a new ListNode to the LinkedList. New ListNode will be added as the `.next` value of the requested ListNode.
     *
     * Time complexity: `O(n + m)`, `n` being the number of ListNodes we must search through in order to determine if the value `node` exists in the LinkedList, `m` being the number of ListNodes we must search for in finding the last node.
     * Space complexity: `O(1)`, no additional space is being used to search through the LinkedList.
     * @param value The ListNode value we are searching for and modifying.
     * @param node The ListNode node we are adding.
     * @returns `void` if successful, otherwise `null` if the `value` is not found in the LinkedList.
     */
    LinkedList.prototype.addAt = function (value, node) {
        var searchNode = this.find(value);
        if (!searchNode)
            return null;
        // Assign the current .next value of found node to temp
        var temp = searchNode.next;
        // Assign the new .next value of found node to the node we want to add
        searchNode.next = node;
        var lastNode = findLast(node);
        // Assign the .next value of the new node we added to our found node to the original .next value stored in temp
        lastNode.next = temp;
    };
    /**
     * Prints a string representation of the LinkedList.
     *
     * Time complexity: `O(n)`, as we are iterating through each ListNode in the LinkedList in order to add its value to a temporary array of which we convert into the final string representation.
     *
     * Space complexity: `O(n)`, we take up `n` storage in memory, storing each value of `n` number of ListNodes in the LinkedList.
     * @returns String representation of LinkedList | `null`
     */
    LinkedList.prototype.print = function () {
        var values = [];
        var currentNode = this.head;
        if (!currentNode)
            return null;
        while (currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return values.join(" > ");
    };
    LinkedList.prototype.getFirst = function () {
    };
    /**
     * Determines length of linked list.
     *
     * Time complexity: `O(n)`
     *
     * Space complexity: `O(1)`
     * @returns Length of linked list
     */
    LinkedList.prototype.getSize = function () {
        var count = 0;
        var node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    };
    return LinkedList;
}());
var obj = {
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
// const list = new LinkedList(obj);
// console.log(list.getSize()); // 6
// const obj2 = new ListNode(
//   6,
//   new ListNode(
//     5,
//     new ListNode(
//       4,
//       new ListNode(3, new ListNode(2, new ListNode(1, new ListNode(0))))
//     )
//   )
// );
// const list2 = new LinkedList(obj2);
// console.log(list2.getSize()); // 7
// list2.add(new ListNode(-1));
// console.log(list2.getSize()); // 8
// console.log(list2.print());
// const list3 = new LinkedList(new ListNode(1, new ListNode(2)));
// console.log(list3.print());
// console.log(list3.find(2)); // ListNode { value: 2, next: null }
// console.log(list3.find(3)); // -1
// const list4 = new LinkedList(new ListNode(1, new ListNode(2, new ListNode(3))));
// console.log(list4.print()); // 1 > 2 > 3
// list4.addAt(2, new ListNode(4));
// console.log(list4.print()); // 1 > 2 > 4 > 3
// const largeNode = new ListNode(5, new ListNode(6, new ListNode(7)));
// need to get last Node of node passed in to the add function, in the event there is more than one node to add, like multiple nodes. Find the last node in the list and set that node's .next value to the temp
// console.log(largeNode);
// list4.addAt(2, largeNode);
// console.log(list4.print()); // 1 > 2 > 5 > 6 > 7 > 4 > 3
// console.log(list4.findLast(largeNode));
var list5 = new LinkedList(new ListNode(1, new ListNode(2, new ListNode(3))));
console.log(list5.print());
console.log(findLast(list5.head));
list5.addAt(2, new ListNode(4, new ListNode(5, new ListNode(6))));
console.log(list5.print());
