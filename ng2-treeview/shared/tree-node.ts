import {TreeNodeInterface} from "./tree-node.interface";
import {TreeNodeOptions} from "./tree-node-options";

export class TreeNode implements TreeNodeInterface {

    private parentNode: TreeNodeInterface;
    private childrenNodes: TreeNodeInterface[] = [];
    options: TreeNodeOptions;

    constructor(options: TreeNodeOptions|Object, nodes: TreeNodeInterface|TreeNodeInterface[] = []) {
        if (!Array.isArray(nodes)) {
            nodes = [<TreeNodeInterface>nodes];
        }
        
        this.options = options instanceof TreeNodeOptions ? options : <TreeNodeOptions>options;

        if (nodes) {
            this.add(nodes);
        }
    }

    get parent() {
        return this.parentNode;
    }

    set parent(newParent: TreeNodeInterface) {
        if (this.parentNode != newParent) {
            if (this.parentNode) {
                this.parentNode.remove(this);
                this.parentNode = newParent;
            }
            if (newParent) {
                this.parentNode = newParent;
                if (!newParent.hasDirectAncestor(this)) {
                    newParent.add(this);
                }
            }
        }
    }

    get children() {
        // console.log(this.childrenNodes);
        return this.childrenNodes;
    }

    hasDirectAncestor(node: TreeNodeInterface) {
        for (var n of this.childrenNodes) {
            if (n === node) {
                return true;
            }
        }
        return false;
    }

    add(nodes: TreeNodeInterface|TreeNodeInterface[]) {
        if (!Array.isArray(nodes)) {
            nodes = <TreeNodeInterface[]>[nodes];
        }

        for (var node of <TreeNodeInterface[]>nodes) {
            this.childrenNodes.push(node);
            node.parent = this;
        }
    }

    remove(node: TreeNodeInterface) {
        for (var i = 0; i < this.childrenNodes.length; i++) {
            var n = this.childrenNodes[i];
            if (node === n) {
                var removed = this.childrenNodes.splice(i, 1)[0];
                removed.parent = null;
                return true;
            }
        }

        return false;
    }

}