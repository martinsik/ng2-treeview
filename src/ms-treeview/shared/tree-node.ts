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

    get children() {
        // console.log(this.childrenNodes);
        return this.childrenNodes;
    }

    add(nodes: TreeNodeInterface|TreeNodeInterface[]) {
        if (!Array.isArray(nodes)) {
            nodes = <TreeNodeInterface[]>[nodes];
        }

        for (var node of <TreeNodeInterface[]>nodes) {
            this.childrenNodes.push(node);
        }
    }

    remove(node: TreeNodeInterface) {
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