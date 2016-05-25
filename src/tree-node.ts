
export class TreeNode {

    private parentNode: TreeNode;
    private childrenNodes: TreeNode[] = [];

    get parent() {
        return this.parentNode;
    }

    addChild(node: TreeNode) {
        this.childrenNodes.push(node);
    }

    removeChild(node: TreeNode) {
        for (var i = 0; i < this.childrenNodes.length; i++) {
            var n = this.childrenNodes[i];
            if (node === n) {
                this.childrenNodes = this.childrenNodes.slice(i, 1);
                return true;
            }
        }

        return false;
    }

}