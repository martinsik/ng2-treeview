import {Component} from '@angular/core';
import {TextTreeNode, ComponentTreeNode, TreeViewComponent, TreeNodeOptions} from 'ng2-treeview';

@Component({
    selector: 'demo-tree-node',
    host: {
        '(mouseover)': 'hover()',
        '(mouseout)': 'blur()',
    },
    template: `
        <span (click)="nodeClick($event)" [style.background]="hovered ? 'green' : 'transparent'">{{ text }}</span>
    `
})
export class DemoTreeNodeComponent {
    hovered: boolean = false;
    text: string;

    set options(options) {
        this.text = options.text;
    }

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
        <h1>ng2-treeview demo</h1>
        <h2>Text tree view</h2>
        <ng2-treeview [node]="textTreeView" (textNodeClick)="textNodeClick($event)"></ng2-treeview>
        <ng2-treeview [node]="textTreeView2" (textNodeClick)="textNodeClick($event)"></ng2-treeview>
        
        <h2>Custom component tree view</h2>
        <ng2-treeview [node]="componentTreeView"></ng2-treeview>
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
        new TextTreeNode('Child node #2', null, [
            new TextTreeNode('Hello', this.options),
            new TextTreeNode('Ahoy', this.options, [
                new TextTreeNode('Nested'),
            ]),
            new TextTreeNode('Hola', this.options),
        ]),
        new TextTreeNode('Child node #3'),
    ]);

    componentTreeView = new ComponentTreeNode(DemoTreeNodeComponent, new TreeNodeOptions({ text: "demo-tree-component 1" }), [
        new ComponentTreeNode(DemoTreeNodeComponent, new TreeNodeOptions({ text: "demo-tree-component 2" })),
        new ComponentTreeNode(DemoTreeNodeComponent, new TreeNodeOptions({ text: "demo-tree-component 3" })),
        new ComponentTreeNode(DemoTreeNodeComponent, new TreeNodeOptions({ text: "demo-tree-component 4" }), [
            new ComponentTreeNode(DemoTreeNodeComponent, new TreeNodeOptions({ text: "demo-tree-component 5" })),
        ]),
        new ComponentTreeNode(DemoTreeNodeComponent, new TreeNodeOptions({ text: "demo-tree-component 6" })),
    ]);

    textNodeClick(event) {
        console.log(event);
    }
    
}
