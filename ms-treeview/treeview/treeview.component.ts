import {EventEmitter} from '@angular/core';
import {Component, Input, Output} from '@angular/core';
import {TreeNodeInterface} from "../shared/tree-node.interface";
import {TextTreeNode} from "../shared/text-treenode";
import {TreeNodeClickEvent} from "../shared/tree-node-click.event";

@Component({
    selector: 'ms-treeview',
    directives: [ TreeViewComponent ],
    templateUrl: 'treeview/treeview.component.html'
})
export class TreeViewComponent
{
    @Input() node: TreeNodeInterface;
    @Output() nodeClick = new EventEmitter<TreeNodeClickEvent>();

    private get isTextType() {
        return this.node instanceof TextTreeNode;
    }

    private get isContentType() {
        return false;
    }

    private get isComponentType() {
        return false;
    }
    
    private childNodeClick(event) {
        this.nodeClick.emit(event);
    }

    private emitClick(event) {
        this.nodeClick.emit(new TreeNodeClickEvent(event, this.node));
    }
}