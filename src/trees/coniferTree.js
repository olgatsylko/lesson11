let Tree = require ('./tree');

class ConiferTree extends Tree {
    constructor (type, age, name) {
        super (type, age)
        this.name = name;
    }
    getType() {
        return this.type;
    }
    toString(){
        return ` Tree '${this.type}' - '${this.name}': age '${this.age}'`
    }
}
module.exports = ConiferTree;
