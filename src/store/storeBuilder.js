let ConTree = require ('../trees/coniferTree');
let DecTree = require ('../trees/deciduousTree');
let Store = require ('../store/store');

exports.buildStore = () => {
    let store = new Store ();
    let trees = [
        new ConTree ('conifier', 20, 'juniper'),
        new ConTree ('conifier', 10, 'fir-tree'),
        new ConTree ('conifier', 1, 'spruce'),
        new ConTree ('conifier', 2, 'pine'),
        new ConTree ('conifier', 20, 'cedar'),
        new DecTree ('deciduous', 1, 'birch', false),
        new DecTree ('deciduous', 2, 'maple', false),
        new DecTree ('deciduous', 3, 'apple-tree', true),
    ]
    store.addTree(trees);
    store.treeFilter(trees);
    return store;
}

