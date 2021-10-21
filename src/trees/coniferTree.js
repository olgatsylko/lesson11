let Tree = require ('./tree');

class ConiferTree extends Tree {
    constructor (type, age, name) {
        super (type, age)
        this.name = name;
    }
    getType() {
        return this.type;
    }
}
module.exports = ConiferTree;
