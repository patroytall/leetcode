/* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]


Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros. */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    let reminder = 0;
    let previousN;
    let firstN;
    while (l1 || l2) {
        let sum;
        if (l1 && l2) {
            sum = l1.val + l2.val;
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1) {
            sum = l1.val;
            l1 = l1.next;
        } else {
            sum = l2.val;
            l2 = l2.next;
        }
        sum += reminder;
        reminder = Math.floor(sum / 10);
        sum -= reminder * 10;
        const n = {
            val: sum,
            next: null
        }
        if (previousN) {
            previousN.next = n;
        } else {
            firstN = n;
        }
        previousN = n;
    }
    if (reminder > 0) {
        previousN.next = {
            val: reminder,
            next: null
        }
    }
    return firstN;
};

function N(val, next) {
    return new ListNode(val, next);
}

function listToString(l) {
    let str = "";
    let n = l;
    do {
        str += n.val;
        n = n.next;
    } while (n);
    return str;
}

[
    {
        list1: N(2, N(4, N(3))),
        list2: N(5, N(6, N(4))),
        strOutput: "708"
    },
    {
        list1: N(0),
        list2: N(0),
        strOutput: "0"
    },
    {
        list1: N(9, N(9, N(9, N(9, N(9, N(9, N(9))))))),
        list2: N(9, N(9, N(9, N(9)))),
        strOutput: "89990001"
    }
].forEach(e => {
    const output = addTwoNumbers(e.list1, e.list2);
    const strOutput = listToString(output);
    if (strOutput !== e.strOutput) {
        throw Error(`input1: ${listToString(e.list1)} - input2: ${listToString(e.list2)} - actual string output: ${strOutput} - expected string output: ${e.strOutput}`);
    }
})
console.log("success");
