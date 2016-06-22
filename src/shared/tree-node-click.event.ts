import {TreeNodeInterface} from "./tree-node.interface";

export class TreeNodeClickEvent {

    constructor(public event: Event, public node: TreeNodeInterface) {}

}