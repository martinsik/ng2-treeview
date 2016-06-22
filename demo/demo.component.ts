import {Component} from '@angular/core';
import {TextTreeNode, TreeViewComponent} from 'ms-treeview/ms-treeview';

@Component({
    selector: 'demo',
    directives: [TreeViewComponent],
    template: `
        <h1>ms-treeview demo</h1>
        <h2>Text tree view</h2>
        <ms-treeview [node]="textTreeView" (nodeClick)="textNodeClick($event)"></ms-treeview>
    `
})
export class DemoComponent {

    textTreeView = new TextTreeNode('Root node', [
        new TextTreeNode('Child node #1'),
        new TextTreeNode('Child node #2'),
        new TextTreeNode('Child node #3'),
        new TextTreeNode('Child node #4', [
            new TextTreeNode('Hello'),
            new TextTreeNode('Ahoy'),
            new TextTreeNode('Hola'),
        ]),
        new TextTreeNode('Child node #5'),
    ]);

    textNodeClick(event) {
        console.log(event);
    }
    
}
