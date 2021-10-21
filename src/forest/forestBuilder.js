let Forest = require ('../forest/forest');
let ConTree = require ('../trees/coniferTree');
let DecTree = require ('../trees/deciduousTree');
let TargetArray = require ('../store/store');

let treesPool = [];

exports.forestBuilder = function (){
    let forest = new Forest();
    this.treesPool = [
        new ConTree ('conifier', 20, 'sprucevv'),
        new DecTree ('deciduous', 3, 'pihta'),
    ]
    forest.addTrees(treesPool);
    return forest;    
}

exports.addForest = function (trees2) {
    let arr = [];
    return arr = [...this.treesPool, ...trees2];
}
