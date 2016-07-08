import {TreeNode} from "./tree-node";
import {TreeNodeInterface} from "./tree-node.interface";
import {TreeNodeOptions} from "./tree-node-options";

export class TextTreeNode extends TreeNode {

    constructor(public text: string, options?: TreeNodeOptions|Object, children?: TreeNodeInterface|TreeNodeInterface[]) {
        super(options ? options : new TreeNodeOptions(), children);
    }

}