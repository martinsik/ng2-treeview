import {Component, Input, Output, EventEmitter, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactory, ComponentResolver} from '@angular/core';

import {TreeNodeInterface} from "../shared/tree-node.interface";
import {TextTreeNode} from "../shared/text-treenode";
import {TreeNodeClickEvent} from "../shared/tree-node-click.event";
import {ComponentTreeNode} from "../shared/component-tree-node";
import {TreeViewInterface} from "./treeview.interface";

@Component({
    selector: 'ms-treeview',
    directives: [ TreeViewComponent ],
    styles: [`
        .line {
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMUU2NzY3OTNDN0IxMUU2QkQwRUFDNjIyQ0U5OUE0MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMUU2NzY3QTNDN0IxMUU2QkQwRUFDNjIyQ0U5OUE0MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUxRTY3Njc3M0M3QjExRTZCRDBFQUM2MjJDRTk5QTQzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUxRTY3Njc4M0M3QjExRTZCRDBFQUM2MjJDRTk5QTQzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+D/OyiwAAAAZQTFRFHR0bAAAABUcrJwAAAAJ0Uk5T/wDltzBKAAAAIklEQVR42mJgRAMMBPiMhDSMmjDMTECHpJowqmAIKwAIMAAbmAPxv65NVAAAAABJRU5ErkJggg==');
            background-position: center center;
            width: 16px;
            height: 16px;
            display: inline-block;
            position: absolute;
            margin-left: -20px;
        }
    `],
    template: `
        <span *ngIf="node.options.showExpandCollapse && depth > 0" class="line"></span>
        
        <span *ngIf="isTextType" (click)="emitClick($event)">{{ node.text }}</span>
        <span *ngIf="isComponentType" #componentAnchor></span>
        <span *ngIf="isContentType">Not implemented yet</span>
        
        <ms-treeview *ngFor="let child of node.children" [node]="child" [depth]="depth + 1" (textNodeClick)="childTextNodeClick($event)"></ms-treeview>
    `
})
export class TreeViewComponent implements TreeViewInterface, AfterViewInit
{
    @Input() node: TreeNodeInterface;
    @Input() depth: number = 0;
    @Output() textNodeClick = new EventEmitter<TreeNodeClickEvent>();
    @ViewChild('componentAnchor', {read: ViewContainerRef}) private componentAnchor: ViewContainerRef;


    constructor(private componentResolver: ComponentResolver) { }

    ngAfterViewInit() {
        if (this.isComponentType) {
            var node = <ComponentTreeNode>this.node;
            this.componentResolver.resolveComponent(node.component).then((factory: ComponentFactory<any>) => {
                var component = this.componentAnchor.createComponent(factory);
                this.componentAnchor.insert(component.hostView);

                component.instance.options = node.options;
            });
        }
    }

    private get isTextType(): boolean {
        return this.node instanceof TextTreeNode;
    }

    private get isContentType() {
        return false;
    }

    private get isComponentType() {
        return this.node instanceof ComponentTreeNode;
    }
    
    private childTextNodeClick(event) {
        this.textNodeClick.emit(event);
    }

    private emitClick(event) {
        this.textNodeClick.emit(new TreeNodeClickEvent(event, this.node));
    }
}
