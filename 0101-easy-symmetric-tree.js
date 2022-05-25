/* Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:

Input: root = [1,2,2,3,4,4,3]
Output: true

      1
   /    \
  2      2
 / \    / \
3   4  4   3

Example 2:
  1
 / \
2   2
 \   \
  3   3

Input: root = [1,2,2,null,3,null,3]
Output: false

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
    if (!root) return true;

    const leftQueue = [root.left];
    const rightQueue = [root.right];
    var leftNode = null;
    var rightNode = null;

    while (leftQueue.length > 0 && rightQueue.length > 0) {
        leftNode = leftQueue.pop();
        rightNode = rightQueue.pop();

        if (!leftNode && !rightNode) continue;
        if (!leftNode || !rightNode) return false;
        if (leftNode.val !== rightNode.val) return false;

        leftQueue.push(leftNode.left);
        leftQueue.push(leftNode.right);
        rightQueue.push(rightNode.right);
        rightQueue.push(rightNode.left);
    }

    return true;
};

function N(val, left, right) {
    return new TreeNode(val, left, right);
}

[
    {
        root: N(1, N(2, N(3), N(4)), N(2, N(4), N(3))),
        output: true
    },
    {
        root: N(1, N(2, null, N(3)), N(2, null, N(3))),
        output: false
    },
    {
        root: N(2, N(3, N(4, null, null), N(5, N(8), N(9))), N(3, N(5, N(9), N(8)), N(4))),
        output: true
    },
].forEach(e => {
    const output = isSymmetric(e.root);
    if (output !== e.output) {
        throw Error(`input: ${JSON.stringify(e.root)} - actual output: ${output} - expected output: ${e.output}`);
    }
})
console.log("success")