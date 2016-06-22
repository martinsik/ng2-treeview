System.register("ms-treeview/shared/tree-node", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var TreeNode;
  return {
    setters: [],
    execute: function() {
      TreeNode = (function() {
        function TreeNode(nodes) {
          this.childrenNodes = [];
          if (nodes) {
            this.add(nodes);
          }
        }
        Object.defineProperty(TreeNode.prototype, "parent", {
          get: function() {
            return this.parentNode;
          },
          set: function(newParent) {
            if (this.parentNode != newParent) {
              if (this.parentNode) {
                this.parentNode.remove(this);
                this.parentNode = newParent;
              }
              if (newParent) {
                this.parentNode = newParent;
                if (!newParent.hasDirectAncestor(this)) {
                  newParent.add(this);
                }
              }
            }
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(TreeNode.prototype, "children", {
          get: function() {
            return this.childrenNodes;
          },
          enumerable: true,
          configurable: true
        });
        TreeNode.prototype.hasDirectAncestor = function(node) {
          for (var _i = 0,
              _a = this.childrenNodes; _i < _a.length; _i++) {
            var n = _a[_i];
            if (n === node) {
              return true;
            }
          }
          return false;
        };
        TreeNode.prototype.add = function(nodes) {
          if (!Array.isArray(nodes)) {
            nodes = [nodes];
          }
          for (var _i = 0,
              _a = nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            this.childrenNodes.push(node);
            node.parent = this;
          }
        };
        TreeNode.prototype.remove = function(node) {
          for (var i = 0; i < this.childrenNodes.length; i++) {
            var n = this.childrenNodes[i];
            if (node === n) {
              var removed = this.childrenNodes.splice(i, 1)[0];
              removed.parent = null;
              return true;
            }
          }
          return false;
        };
        return TreeNode;
      }());
      exports_1("TreeNode", TreeNode);
    }
  };
});

System.register("ms-treeview/shared/text-treenode", ["./tree-node"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var tree_node_1;
  var TextTreeNode;
  return {
    setters: [function(tree_node_1_1) {
      tree_node_1 = tree_node_1_1;
    }],
    execute: function() {
      TextTreeNode = (function(_super) {
        __extends(TextTreeNode, _super);
        function TextTreeNode(text, children) {
          _super.call(this, children);
          this.text = text;
        }
        return TextTreeNode;
      }(tree_node_1.TreeNode));
      exports_1("TextTreeNode", TextTreeNode);
    }
  };
});

System.register("ms-treeview/shared/tree-node-click.event", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var TreeNodeClickEvent;
  return {
    setters: [],
    execute: function() {
      TreeNodeClickEvent = (function() {
        function TreeNodeClickEvent(event, node) {
          this.event = event;
          this.node = node;
        }
        return TreeNodeClickEvent;
      }());
      exports_1("TreeNodeClickEvent", TreeNodeClickEvent);
    }
  };
});

System.register("ms-treeview/treeview/treeview.component", ["@angular/core", "../shared/text-treenode", "../shared/tree-node-click.event"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      core_2,
      text_treenode_1,
      tree_node_click_event_1;
  var TreeViewComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
      core_2 = core_1_1;
    }, function(text_treenode_1_1) {
      text_treenode_1 = text_treenode_1_1;
    }, function(tree_node_click_event_1_1) {
      tree_node_click_event_1 = tree_node_click_event_1_1;
    }],
    execute: function() {
      TreeViewComponent = (function() {
        function TreeViewComponent() {
          this.nodeClick = new core_1.EventEmitter();
        }
        Object.defineProperty(TreeViewComponent.prototype, "isTextType", {
          get: function() {
            return this.node instanceof text_treenode_1.TextTreeNode;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(TreeViewComponent.prototype, "isContentType", {
          get: function() {
            return false;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(TreeViewComponent.prototype, "isComponentType", {
          get: function() {
            return false;
          },
          enumerable: true,
          configurable: true
        });
        TreeViewComponent.prototype.childNodeClick = function(event) {
          this.nodeClick.emit(event);
        };
        TreeViewComponent.prototype.emitClick = function(event) {
          this.nodeClick.emit(new tree_node_click_event_1.TreeNodeClickEvent(event, this.node));
        };
        __decorate([core_2.Input(), __metadata('design:type', Object)], TreeViewComponent.prototype, "node", void 0);
        __decorate([core_2.Output(), __metadata('design:type', Object)], TreeViewComponent.prototype, "nodeClick", void 0);
        TreeViewComponent = __decorate([core_2.Component({
          selector: 'ms-treeview',
          directives: [TreeViewComponent],
          template:'<span *ngIf="isTextType" (click)="emitClick($event)">{{ node.text }}</span> <span *ngIf="isComponentType">Not implemented yet</span> <span *ngIf="isContentType">Not implemented yet</span><ms-treeview *ngFor="let child of node.children" [node]="child" (nodeClick)="childNodeClick($event)"></ms-treeview>'
        }), __metadata('design:paramtypes', [])], TreeViewComponent);
        return TreeViewComponent;
      }());
      exports_1("TreeViewComponent", TreeViewComponent);
    }
  };
});

System.register("ms-treeview", ["./ms-treeview/shared/tree-node", "./ms-treeview/shared/tree-node-click.event", "./ms-treeview/shared/text-treenode", "./ms-treeview/treeview/treeview.component"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function exportStar_1(m) {
    var exports = {};
    for (var n in m) {
      if (n !== "default")
        exports[n] = m[n];
    }
    exports_1(exports);
  }
  return {
    setters: [function(tree_node_1_1) {
      exportStar_1(tree_node_1_1);
    }, function(tree_node_click_event_1_1) {
      exportStar_1(tree_node_click_event_1_1);
    }, function(text_treenode_1_1) {
      exportStar_1(text_treenode_1_1);
    }, function(treeview_component_1_1) {
      exportStar_1(treeview_component_1_1);
    }],
    execute: function() {}
  };
});
