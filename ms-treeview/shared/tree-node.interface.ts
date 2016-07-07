import {TreeNodeOptions} from "./tree-node-options";

export interface TreeNodeInterface {

    parent: TreeNodeInterface;
    children: TreeNodeInterface[];
    options: TreeNodeOptions;

    add(node: TreeNodeInterface|TreeNodeInterface[]): void;
    remove(node: TreeNodeInterface): void;
    hasDirectAncestor(node: TreeNodeInterface): void;

}