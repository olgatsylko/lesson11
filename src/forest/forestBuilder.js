let Forest = require ('../forest/forest');
let ConTree = require ('../trees/coniferTree');
let DecTree = require ('../trees/deciduousTree');

class ForestBuilder {
    constructor(){
        this.treesPool = [];
    }
    setUpForest() {
        let forest = new Forest();
        this.treesPool = [
        new ConTree ('conifier', 10, 'fir-tree'),
        new DecTree ('deciduous', 3, 'ash-tree', false),
    ]
    forest.addTrees(this.treesPool);
    return forest;  
    }

    addForest = (trees2) => {
        return [...this.treesPool, ...trees2];
    }
}
module.exports = ForestBuilder;


