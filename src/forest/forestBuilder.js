let Forest = require ('../forest/forest');
let ConTree = require ('../trees/coniferTree');
let DecTree = require ('../trees/deciduousTree');

let treesPool = [];

exports.forestBuilder = () => {
    let forest = new Forest();
    this.treesPool = [
        new ConTree ('conifier', 10, 'fir-tree'),
        new DecTree ('deciduous', 3, 'ash-tree', false),
    ]
    forest.addTrees(treesPool);
    return forest;    
}

exports.addForest = (trees2) => {
    return [...this.treesPool, ...trees2];
}

