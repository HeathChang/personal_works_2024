// URL > https://leetcode.com/problems/binary-tree-inorder-traversal/?envType=problem-list-v2&envId=depth-first-search&
const solution = (root) => {
    const result = [];

    const dfs = (node) => {
        if (!node) return;
        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    };

    dfs(root);
    return result;
};
// 트리 노드 정의
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// 트리 구성
const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

// 실행
console.log(solution(root)); // 출력: [1, 3, 2]
