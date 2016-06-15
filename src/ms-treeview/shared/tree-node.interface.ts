
export interface TreeNodeInterface {

    parent: TreeNodeInterface;
    children: TreeNodeInterface[];

    add(node: TreeNodeInterface|TreeNodeInterface[]): void;
    remove(node: TreeNodeInterface): void;
    hasDirectAncestor(node: TreeNodeInterface): void;

}