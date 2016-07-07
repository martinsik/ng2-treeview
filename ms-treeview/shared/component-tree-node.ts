import {Type} from '@angular/core';
import {TreeNodeOptions} from "./tree-node-options";
import {TreeNodeInterface} from "./tree-node.interface";
import {TreeNode} from "./tree-node";

export class ComponentTreeNode extends TreeNode {

    constructor(public component: Type, options?: TreeNodeOptions, children?: TreeNodeInterface|TreeNodeInterface[]) {
        super(options ? options : new TreeNodeOptions(), children);
    }

}