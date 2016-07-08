
export class TreeNodeOptions {

    showExpandCollapse: boolean = true;

    constructor(options: Object = {}) {
        for (let key of Object.keys(options)) {
            this[key] = options[key];
        }
    }


}