class Tree {
    constructor (type, age){
        this.type = type;
        this.age = age;
    }
    toString(){
        return `The tree '${this.type}' has age '${this.age}'`
    }
}

module.exports = Tree;