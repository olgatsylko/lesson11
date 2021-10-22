let StoreB = require ('./store/storeBuilder');
let ForestB = require ('./forest/forestBuilder');
let prompt = require ('prompt-promise');
const ForestBuilder = require('./forest/forestBuilder');

let store = StoreB.buildStore();
let forestBuild = new ForestBuilder();
let forest = forestBuild.setUpForest();

let arr = [];
let type;

(async () => {
    const treeType = parseInt (await prompt ('Press 1 to order Deciduous; Press to 2 to order Conifier: '));
    if(treeType === 1 || treeType === 2){
        const numbTrees = parseInt (await prompt ('How many trees do you need? '));
        
        if(treeType === 1){
            type = 'deciduous'
        } else type = 'conifier';
        
        if (numbTrees > 0 && numbTrees > store.getReqType(type)) {
            console.log(`We have only '${store.getReqType(type)}' '${type}' trees`);
            console.log(`Order for '${store.getReqType(type)}' '${type}' tree(s) is created`);
            arr = store.getTreesForPlant(store.getReqType(type), type);
            forest = forestBuild.addForest(arr);
        } else {
            console.log(`Order for '${numbTrees}' '${type}' tree(s) is created`);
            arr = store.getTreesForPlant(numbTrees, type);
            forest = forestBuild.addForest(arr);
        }

    console.log('The forest includes: ' + forest.toString());
    console.log('Statistic for Store pool: ' + store.getStorePool());
    } else console.log('Invalid tree type, try again');

    prompt.finish();
})();