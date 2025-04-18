// URL > https://leetcode.com/problems/path-sum/description/

const solution = (root, targetSum) => {
    if (!root) return false;

    // If it's a leaf node
    if (!root.left && !root.right) {
        return root.val === targetSum;
    }

    // Recursively check left and right subtrees
    const remainingSum = targetSum - root.val;
    return solution(root.left, remainingSum) || solution(root.right, remainingSum);
};

