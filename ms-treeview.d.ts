declare module "ms-treeview/shared/tree-node.interface" {
    export interface TreeNodeInterface {
        parent: TreeNodeInterface;
        children: TreeNodeInterface[];
        add(node: TreeNodeInterface | TreeNodeInterface[]): void;
        remove(node: TreeNodeInterface): void;
        hasDirectAncestor(node: TreeNodeInterface): void;
    }
}
declare module "ms-treeview/shared/tree-node" {
    import { TreeNodeInterface } from "ms-treeview/shared/tree-node.interface";
    export abstract class TreeNode implements TreeNodeInterface {
        private parentNode;
        private childrenNodes;
        constructor(nodes?: TreeNodeInterface | TreeNodeInterface[]);
        parent: TreeNodeInterface;
        children: TreeNodeInterface[];
        hasDirectAncestor(node: TreeNodeInterface): boolean;
        add(nodes: TreeNodeInterface | TreeNodeInterface[]): void;
        remove(node: TreeNodeInterface): boolean;
    }
}
declare module "ms-treeview/shared/tree-node-click.event" {
    import { TreeNodeInterface } from "ms-treeview/shared/tree-node.interface";
    export class TreeNodeClickEvent {
        event: Event;
        node: TreeNodeInterface;
        constructor(event: Event, node: TreeNodeInterface);
    }
}
declare module "ms-treeview/shared/text-treenode" {
    import { TreeNode } from "ms-treeview/shared/tree-node";
    import { TreeNodeInterface } from "ms-treeview/shared/tree-node.interface";
    export class TextTreeNode extends TreeNode {
        text: string;
        constructor(text: string, children?: TreeNodeInterface | TreeNodeInterface[]);
    }
}
declare module "ms-treeview/treeview/treeview.component" {
    import { EventEmitter } from '@angular/core';
    import { TreeNodeInterface } from "ms-treeview/shared/tree-node.interface";
    import { TreeNodeClickEvent } from "ms-treeview/shared/tree-node-click.event";
    export class TreeViewComponent {
        node: TreeNodeInterface;
        nodeClick: EventEmitter<TreeNodeClickEvent>;
        private isTextType;
        private isContentType;
        private isComponentType;
        private childNodeClick(event);
        private emitClick(event);
    }
}
declare module "ms-treeview" {
    export { TreeNodeInterface } from "ms-treeview/shared/tree-node.interface";
    export { TreeNode } from "ms-treeview/shared/tree-node";
    export { TreeNodeClickEvent } from "ms-treeview/shared/tree-node-click.event";
    export { TextTreeNode } from "ms-treeview/shared/text-treenode";
    export { TreeViewComponent } from "ms-treeview/treeview/treeview.component";
}
