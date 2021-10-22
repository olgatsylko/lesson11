class Store {
    #conType = 0;
    #decType = 0;

    constructor (){
        this.storePool = [];
    }
    getStorePool(){
        return this.storePool;
    }
    addTree (trees) {
        this.storePool = [...this.storePool, ...trees];
    }
    getConType(){
        return this.#conType;
    }
    getDecType(){
        return this.#decType;
    }
    getReqType(type){
        if (type ==='deciduous'){
            return this.#decType
        } else return this.#conType
    }
    getTreesForPlant (number, type) {
        let array = this.storePool.filter((el)=> {
            return el.getType() === type;
        })
        let targetArray = array.splice(0, number);
        this.storePool = this.storePool.filter(x => !targetArray.some(y => x.name === y.name));
        return targetArray;
    } 
    treeFilter (trees) {
        for (let n of trees){
            if (n.getType() == 'conifier'){
                this.#conType ++;
            } else {
                this.#decType ++;
            }
        }   
        console.log(`Number of deciduous trees in stock: ` + this.#decType);
        console.log(`Number of conifer trees in stock: `+ this.#conType);
        
    }
}

module.exports = Store;

