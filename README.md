# ng2-treeview

Angular2 component for displaying tree structures.

## Installation

Via `npm`:

    npm i ng2-treeview
    
Packaged version contains `bundles/ng2-treeview.js` SystemJS bundle. Add 

    var bundles = {
        '/vendor/ng2-treeview.js': ['ng2-treeview']
    };

    var config = {
        bundles: bundles,
        // ... other Angular2 configuration
    };
    System.config(config);
    
Import package:

    import {TextTreeNode, TreeViewComponent} from 'ng2-treeview';
    
# Examples

This package allows three ways of creating tree structures:

 - text nodes - each tree node is just a text
 - component nodes - each tree node is a custom Angular2 component
 - ng-content nodes (not implemented yet) - each tree node clones content of ng-content

## 1. Text nodes

See [demo project](https://github.com/martinsik/ng2-treeview/blob/master/demo/demo.component.ts) for complete example:
  
    import {TextTreeNode, TreeViewComponent} from 'ng2-treeview';
    
    @Component({
        selector: 'demo',
        directives: [TreeViewComponent],
        template: `
            <h1>ng2-treeview - Text nodes</h1>
            <ng2-treeview [node]="textTreeView" (textNodeClick)="onTextNodeClick($event)"></ms-treeview>
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
        
        onTextNodeClick(event) {
            console.log(event);
        }
    }
    