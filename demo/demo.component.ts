import {Component} from '@angular/core';
import {TextTreeNode, ComponentTreeNode, TreeViewComponent, TreeNodeOptions} from 'ms-treeview';

@Component({
    selector: 'demo-tree-node',
    host: {
        '(mouseover)': 'hover()',
        '(mouseout)': 'blur()',
    },
    template: `
        <span (click)="nodeClick($event)" [style.background]="hovered ? 'red' : 'yellow'">demo-tree-node</span>
    `
})
export class DemoTreeNodeComponent {
    hovered: boolean = false;

    nodeClick(event) {
        console.log(this);
    }
    hover() {
        this.hovered = true;
    }
    blur() {
        this.hovered = false;
    }
}


@Component({
    selector: 'demo',
    directives: [TreeViewComponent],
    template: `
        <h1>ms-treeview demo</h1>
        <h2>Text tree view</h2>
        <ms-treeview [node]="textTreeView" (textNodeClick)="textNodeClick($event)"></ms-treeview>
        
        <ms-treeview [node]="textTreeView2" (textNodeClick)="textNodeClick($event)"></ms-treeview>
        
        <h2>Custom component tree view</h2>
        <ms-treeview [node]="componentTreeView"></ms-treeview>
    `
})
export class DemoComponent {

    textTreeView = new TextTreeNode('Root node', null, [
        new TextTreeNode('Child node #1'),
        new TextTreeNode('Child node #2'),
        new TextTreeNode('Child node #3'),
        new TextTreeNode('Child node #4', null, [
            new TextTreeNode('Hello'),
            new TextTreeNode('Ahoy'),
            new TextTreeNode('Hola'),
        ]),
        new TextTreeNode('Child node #5'),
    ]);

    options = new TreeNodeOptions({
        showExpandCollapse: false
    });
    textTreeView2 = new TextTreeNode('Root node', null, [
        new TextTreeNode('Child node #1'),
        new TextTreeNode('Child node #2'),
        new TextTreeNode('Child node #3'),
        new TextTreeNode('Child node #4', this.options, [
            new TextTreeNode('Hello'),
            new TextTreeNode('Ahoy'),
            new TextTreeNode('Hola'),
        ]),
        new TextTreeNode('Child node #5'),
    ]);

    componentTreeView = new ComponentTreeNode(DemoTreeNodeComponent, null, [
        new ComponentTreeNode(DemoTreeNodeComponent),
        new ComponentTreeNode(DemoTreeNodeComponent),
        new ComponentTreeNode(DemoTreeNodeComponent, null, [
            new ComponentTreeNode(DemoTreeNodeComponent),
        ]),
        new ComponentTreeNode(DemoTreeNodeComponent),
    ]);

    textNodeClick(event) {
        console.log(event);
    }
    
}
