var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("ms-treeview/shared/tree-node.interface", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TreeNodeInterface;
    return {
        setters:[],
        execute: function() {
            TreeNodeInterface = (function () {
                function TreeNodeInterface() {
                }
                return TreeNodeInterface;
            }());
            exports_1("TreeNodeInterface", TreeNodeInterface);
        }
    }
});
System.register("ms-treeview/shared/tree-node", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var TreeNode;
    return {
        setters:[],
        execute: function() {
            TreeNode = (function () {
                function TreeNode(nodes) {
                    this.childrenNodes = [];
                    if (nodes) {
                        this.add(nodes);
                    }
                }
                Object.defineProperty(TreeNode.prototype, "parent", {
                    get: function () {
                        return this.parentNode;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TreeNode.prototype, "children", {
                    get: function () {
                        // console.log(this.childrenNodes);
                        return this.childrenNodes;
                    },
                    enumerable: true,
                    configurable: true
                });
                TreeNode.prototype.add = function (nodes) {
                    if (!Array.isArray(nodes)) {
                        nodes = [nodes];
                    }
                    for (var _i = 0, _a = nodes; _i < _a.length; _i++) {
                        var node = _a[_i];
                        this.childrenNodes.push(node);
                    }
                };
                TreeNode.prototype.remove = function (node) {
                    for (var i = 0; i < this.childrenNodes.length; i++) {
                        var n = this.childrenNodes[i];
                        if (node === n) {
                            this.childrenNodes = this.childrenNodes.slice(i, 1);
                            return true;
                        }
                    }
                    return false;
                };
                return TreeNode;
            }());
            exports_2("TreeNode", TreeNode);
        }
    }
});
System.register("ms-treeview/shared/tree-node-click.event", [], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var TreeNodeClickEvent;
    return {
        setters:[],
        execute: function() {
            TreeNodeClickEvent = (function () {
                function TreeNodeClickEvent(event, node) {
                    this.event = event;
                    this.node = node;
                }
                return TreeNodeClickEvent;
            }());
            exports_3("TreeNodeClickEvent", TreeNodeClickEvent);
        }
    }
});
System.register("ms-treeview/shared/text-treenode", ["ms-treeview/shared/tree-node"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var tree_node_1;
    var TextTreeNode;
    return {
        setters:[
            function (tree_node_1_1) {
                tree_node_1 = tree_node_1_1;
            }],
        execute: function() {
            TextTreeNode = (function (_super) {
                __extends(TextTreeNode, _super);
                function TextTreeNode(text, children) {
                    _super.call(this, children);
                    this.text = text;
                }
                return TextTreeNode;
            }(tree_node_1.TreeNode));
            exports_4("TextTreeNode", TextTreeNode);
        }
    }
});
System.register("ms-treeview/treeview/treeview.component", ['@angular/core', "ms-treeview/shared/tree-node.interface", "ms-treeview/shared/text-treenode", "ms-treeview/shared/tree-node-click.event"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_1, core_2, tree_node_interface_1, text_treenode_1, tree_node_click_event_1;
    var TreeViewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (tree_node_interface_1_1) {
                tree_node_interface_1 = tree_node_interface_1_1;
            },
            function (text_treenode_1_1) {
                text_treenode_1 = text_treenode_1_1;
            },
            function (tree_node_click_event_1_1) {
                tree_node_click_event_1 = tree_node_click_event_1_1;
            }],
        execute: function() {
            TreeViewComponent = (function () {
                function TreeViewComponent() {
                    this.nodeClick = new core_1.EventEmitter();
                }
                Object.defineProperty(TreeViewComponent.prototype, "isTextType", {
                    get: function () {
                        return this.node instanceof text_treenode_1.TextTreeNode;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TreeViewComponent.prototype, "isContentType", {
                    get: function () {
                        return false;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TreeViewComponent.prototype, "isComponentType", {
                    get: function () {
                        return false;
                    },
                    enumerable: true,
                    configurable: true
                });
                TreeViewComponent.prototype.childNodeClick = function (event) {
                    this.nodeClick.emit(event);
                };
                TreeViewComponent.prototype.emitClick = function (event) {
                    this.nodeClick.emit(new tree_node_click_event_1.TreeNodeClickEvent(event, this.node));
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', tree_node_interface_1.TreeNodeInterface)
                ], TreeViewComponent.prototype, "node", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', Object)
                ], TreeViewComponent.prototype, "nodeClick", void 0);
                TreeViewComponent = __decorate([
                    core_2.Component({
                        selector: 'ms-treeview',
                        directives: [TreeViewComponent],
                        template:'<span *ngIf="isTextType" (click)="emitClick($event)">{{ node.text }}</span> <span *ngIf="isComponentType">Not implemented yet</span> <span *ngIf="isContentType">Not implemented yet</span><ms-treeview *ngFor="let child of node.children" [node]="child" (nodeClick)="childNodeClick($event)"></ms-treeview>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TreeViewComponent);
                return TreeViewComponent;
            }());
            exports_5("TreeViewComponent", TreeViewComponent);
        }
    }
});
System.register("ms-treeview", ["ms-treeview/shared/tree-node.interface", "ms-treeview/shared/tree-node", "ms-treeview/shared/tree-node-click.event", "ms-treeview/shared/text-treenode", "ms-treeview/treeview/treeview.component"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    return {
        setters:[
            function (tree_node_interface_2_1) {
                exports_6({
                    "TreeNodeInterface": tree_node_interface_2_1["TreeNodeInterface"]
                });
            },
            function (tree_node_2_1) {
                exports_6({
                    "TreeNode": tree_node_2_1["TreeNode"]
                });
            },
            function (tree_node_click_event_2_1) {
                exports_6({
                    "TreeNodeClickEvent": tree_node_click_event_2_1["TreeNodeClickEvent"]
                });
            },
            function (text_treenode_2_1) {
                exports_6({
                    "TextTreeNode": text_treenode_2_1["TextTreeNode"]
                });
            },
            function (treeview_component_1_1) {
                exports_6({
                    "TreeViewComponent": treeview_component_1_1["TreeViewComponent"]
                });
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=ms-treeview.js.map