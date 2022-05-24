/* Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

Example 1:

      5
     / \
    4    8
   /    / \
  11   13  4
 / \        \
7   2        1

Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.

Example 2:

  1
 / \
2   3

Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.

Example 3:

Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
function hasPathSum(root, targetSum) {
    if (root === null) {
        return false;
    }
    targetSum -= root.val;
    if (targetSum === 0 && !root.left && !root.right) {
        return true;
    }
    if (hasPathSum(root.left, targetSum)) {
        return true;
    };
    if (hasPathSum(root.right, targetSum)) {
        return true;
    };
    return false;
}

function N(val, left, right) {
    return new TreeNode(val, left, right);
}

[
    {
        root: N(5, N(4, N(11, N(7), N(2))), N(8, N(13), N(4, null, N(1)))),
        targetSum: 22,
        output: true
    },
    {
        root: N(1, N(2), N(3)),
        targetSum: 5,
        output: false
    },
    {
        root: null,
        targetSum: 0,
        output: false
    },
    {
        root: N(1, N(2)),
        targetSum: 1,
        output: false
    }
].forEach(e => {
    const output = hasPathSum(e.root, e.targetSum);
    if (output !== e.output) {
        throw Error(`input: ${JSON.stringify(e.root)} - actual output: ${output} - expected output: ${e.output}`);
    }
})
console.log("success")