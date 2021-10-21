let ConTree = require ('../trees/coniferTree');
let DecTree = require ('../trees/deciduousTree');
let Store = require ('../store/store');

exports.buildStore = function () {
    let store = new Store ();
    let trees = [
        new ConTree ('conifier', 20, 'spruce'),
        new ConTree ('conifier', 10, 'fir'),
        new ConTree ('conifier', 1, 'spruce'),
        new ConTree ('conifier', 2, 'fir'),
        new ConTree ('conifier', 20, 'spruce'),
        new DecTree ('deciduous', 1, 'birch'),
        new DecTree ('deciduous', 2, 'maple'),
        new DecTree ('deciduous', 3, 'maple'),
    ]
    store.addTree(trees);
    store.treeFilter(trees);
    return store;
}

