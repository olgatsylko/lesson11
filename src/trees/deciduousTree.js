const Tree = require ('./tree');

class DeciduousTree extends Tree {
    constructor (type, age, name) {
        super (type, age)
        this.name = name;
    }
    getType() {
        return this.type;
    }
}

module.exports = DeciduousTree;