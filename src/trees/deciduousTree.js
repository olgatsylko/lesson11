const Tree = require ('./tree');

class DeciduousTree extends Tree {
    constructor (type, age, name, fruit) {
        super (type, age)
        this.name = name;
        this.fruit = fruit;
    }
    getType() {
        return this.type;
    }
    toString(){
        return ` Tree '${this.type}' - '${this.name}': age '${this.age}'`
    }
}

module.exports = DeciduousTree;