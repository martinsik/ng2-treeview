
export class TreeNodeOptions {

    showExpandCollapse: boolean = true;

    constructor(options: Object = {}) {
        if (options['showExpandCollapse']) {
            this.showExpandCollapse = options['showExpandCollapse'];
        }
    }


}