import {TreeNode} from "./tree-node";
import {TreeNodeInterface} from "./tree-node.interface";

export class TextTreeNode extends TreeNode {

    constructor(public text: string, children?: TreeNodeInterface|TreeNodeInterface[]) {
        super(children);
    }

}