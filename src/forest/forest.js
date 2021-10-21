class Forest {
    constructor (){
        this.forestPool = [];
    }
    // addTrees (...params){
    //     this.forestPool.push(...params)
    // }

    addTrees (trees){
        this.forestPool =  [...this.forestPool, ...trees];
    }

    toString(){
        return `The forest has '${this.forestPool}'`
    }
}

module.exports = Forest;