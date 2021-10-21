class Store {
    #conType = 0;
    #decType = 0;

    constructor (){
        this.storePool = [];
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
    getTreesForPlant (number, type) {
        //let type = type;
        /* for(let i=0; i<number; i++) {
            this.storePool.find(function(type) {
                let index = this.storePool.indexOf(this.storePool.getType == type);
                array.push(this.storePool.getType == type);
                this.storePool = this.storePool.slice(index,index++);
            })
        } */
        let array = this.storePool.filter((el)=> {
            return el.getType() === type;
        })
        let targetArray = array.splice(0, number);
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

