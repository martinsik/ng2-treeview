import {EventEmitter} from '@angular/core';
import {TreeNodeInterface} from "./tree-node.interface";

export abstract class TreeNode implements TreeNodeInterface {

    private parentNode: TreeNodeInterface;
    private childrenNodes: TreeNodeInterface[] = [];

    constructor(nodes?: TreeNodeInterface|TreeNodeInterface[]) {
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
            node.parent = this;
            this.childrenNodes.push(node);
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