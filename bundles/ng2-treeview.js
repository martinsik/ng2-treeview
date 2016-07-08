System.register("ng2-treeview/shared/text-treenode", ["./tree-node", "./tree-node-options"], function(exports_1, context_1) {
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
  var tree_node_1,
      tree_node_options_1;
  var TextTreeNode;
  return {
    setters: [function(tree_node_1_1) {
      tree_node_1 = tree_node_1_1;
    }, function(tree_node_options_1_1) {
      tree_node_options_1 = tree_node_options_1_1;
    }],
    execute: function() {
      TextTreeNode = (function(_super) {
        __extends(TextTreeNode, _super);
        function TextTreeNode(text, options, children) {
          _super.call(this, options ? options : new tree_node_options_1.TreeNodeOptions(), children);
          this.text = text;
        }
        return TextTreeNode;
      }(tree_node_1.TreeNode));
      exports_1("TextTreeNode", TextTreeNode);
    }
  };
});

System.register("ng2-treeview/shared/tree-node-click.event", [], function(exports_1, context_1) {
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

System.register("ng2-treeview/shared/tree-node-options", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var TreeNodeOptions;
  return {
    setters: [],
    execute: function() {
      TreeNodeOptions = (function() {
        function TreeNodeOptions(options) {
          if (options === void 0) {
            options = {};
          }
          this.showExpandCollapse = true;
          for (var _i = 0,
              _a = Object.keys(options); _i < _a.length; _i++) {
            var key = _a[_i];
            this[key] = options[key];
          }
        }
        return TreeNodeOptions;
      }());
      exports_1("TreeNodeOptions", TreeNodeOptions);
    }
  };
});

System.register("ng2-treeview/shared/tree-node", ["./tree-node-options"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var tree_node_options_1;
  var TreeNode;
  return {
    setters: [function(tree_node_options_1_1) {
      tree_node_options_1 = tree_node_options_1_1;
    }],
    execute: function() {
      TreeNode = (function() {
        function TreeNode(options, nodes) {
          if (nodes === void 0) {
            nodes = [];
          }
          this.childrenNodes = [];
          if (!Array.isArray(nodes)) {
            nodes = [nodes];
          }
          this.options = options instanceof tree_node_options_1.TreeNodeOptions ? options : options;
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

System.register("ng2-treeview/shared/component-tree-node", ["./tree-node-options", "./tree-node"], function(exports_1, context_1) {
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
  var tree_node_options_1,
      tree_node_1;
  var ComponentTreeNode;
  return {
    setters: [function(tree_node_options_1_1) {
      tree_node_options_1 = tree_node_options_1_1;
    }, function(tree_node_1_1) {
      tree_node_1 = tree_node_1_1;
    }],
    execute: function() {
      ComponentTreeNode = (function(_super) {
        __extends(ComponentTreeNode, _super);
        function ComponentTreeNode(component, options, children) {
          _super.call(this, options ? options : new tree_node_options_1.TreeNodeOptions(), children);
          this.component = component;
        }
        return ComponentTreeNode;
      }(tree_node_1.TreeNode));
      exports_1("ComponentTreeNode", ComponentTreeNode);
    }
  };
});

System.register("ng2-treeview/treeview/treeview.component", ["@angular/core", "../shared/text-treenode", "../shared/tree-node-click.event", "../shared/component-tree-node"], function(exports_1, context_1) {
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
      text_treenode_1,
      tree_node_click_event_1,
      component_tree_node_1;
  var TreeViewComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(text_treenode_1_1) {
      text_treenode_1 = text_treenode_1_1;
    }, function(tree_node_click_event_1_1) {
      tree_node_click_event_1 = tree_node_click_event_1_1;
    }, function(component_tree_node_1_1) {
      component_tree_node_1 = component_tree_node_1_1;
    }],
    execute: function() {
      TreeViewComponent = (function() {
        function TreeViewComponent(componentResolver) {
          this.componentResolver = componentResolver;
          this.depth = 0;
          this.textNodeClick = new core_1.EventEmitter();
        }
        TreeViewComponent.prototype.ngAfterViewInit = function() {
          var _this = this;
          if (this.isComponentType) {
            var node = this.node;
            this.componentResolver.resolveComponent(node.component).then(function(factory) {
              var component = _this.componentAnchor.createComponent(factory);
              _this.componentAnchor.insert(component.hostView);
              component.instance.options = node.options;
            });
          }
        };
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
            return this.node instanceof component_tree_node_1.ComponentTreeNode;
          },
          enumerable: true,
          configurable: true
        });
        TreeViewComponent.prototype.childTextNodeClick = function(event) {
          this.textNodeClick.emit(event);
        };
        TreeViewComponent.prototype.emitClick = function(event) {
          this.textNodeClick.emit(new tree_node_click_event_1.TreeNodeClickEvent(event, this.node));
        };
        __decorate([core_1.Input(), __metadata('design:type', Object)], TreeViewComponent.prototype, "node", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Number)], TreeViewComponent.prototype, "depth", void 0);
        __decorate([core_1.Output(), __metadata('design:type', Object)], TreeViewComponent.prototype, "textNodeClick", void 0);
        __decorate([core_1.ViewChild('componentAnchor', {read: core_1.ViewContainerRef}), __metadata('design:type', core_1.ViewContainerRef)], TreeViewComponent.prototype, "componentAnchor", void 0);
        TreeViewComponent = __decorate([core_1.Component({
          selector: 'ms-treeview',
          directives: [TreeViewComponent],
          styles: ["\n        .line {\n            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMUU2NzY3OTNDN0IxMUU2QkQwRUFDNjIyQ0U5OUE0MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMUU2NzY3QTNDN0IxMUU2QkQwRUFDNjIyQ0U5OUE0MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUxRTY3Njc3M0M3QjExRTZCRDBFQUM2MjJDRTk5QTQzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUxRTY3Njc4M0M3QjExRTZCRDBFQUM2MjJDRTk5QTQzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+D/OyiwAAAAZQTFRFHR0bAAAABUcrJwAAAAJ0Uk5T/wDltzBKAAAAIklEQVR42mJgRAMMBPiMhDSMmjDMTECHpJowqmAIKwAIMAAbmAPxv65NVAAAAABJRU5ErkJggg==');\n            background-position: center center;\n            width: 16px;\n            height: 16px;\n            display: inline-block;\n            position: absolute;\n            margin-left: -20px;\n        }\n    "],
          template: "\n        <span *ngIf=\"node.options.showExpandCollapse && depth > 0\" class=\"line\"></span>\n        \n        <span *ngIf=\"isTextType\" (click)=\"emitClick($event)\">{{ node.text }}</span>\n        <span *ngIf=\"isComponentType\" #componentAnchor></span>\n        <span *ngIf=\"isContentType\">Not implemented yet</span>\n        \n        <ms-treeview *ngFor=\"let child of node.children\" [node]=\"child\" [depth]=\"depth + 1\" (textNodeClick)=\"childTextNodeClick($event)\"></ms-treeview>\n    "
        }), __metadata('design:paramtypes', [core_1.ComponentResolver])], TreeViewComponent);
        return TreeViewComponent;
      }());
      exports_1("TreeViewComponent", TreeViewComponent);
    }
  };
});

System.register("ng2-treeview", ["./ng2-treeview/shared/tree-node", "./ng2-treeview/shared/tree-node-click.event", "./ng2-treeview/shared/text-treenode", "./ng2-treeview/shared/component-tree-node", "./ng2-treeview/shared/tree-node-options", "./ng2-treeview/treeview/treeview.component"], function(exports_1, context_1) {
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
    }, function(component_tree_node_1_1) {
      exportStar_1(component_tree_node_1_1);
    }, function(tree_node_options_1_1) {
      exportStar_1(tree_node_options_1_1);
    }, function(treeview_component_1_1) {
      exportStar_1(treeview_component_1_1);
    }],
    execute: function() {}
  };
});
