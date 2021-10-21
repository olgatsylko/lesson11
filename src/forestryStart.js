let StoreB = require ('./store/storeBuilder');
let ForestB = require ('./forest/forestBuilder');
let prompt = require ('prompt-promise');

let store = StoreB.buildStore();
let forest = ForestB.forestBuilder();
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
            forest = ForestB.addForest(arr);
        } else {
            console.log(`Order for '${numbTrees}' '${type}' tree(s) is created`);
            arr = store.getTreesForPlant(numbTrees, type);
            forest = ForestB.addForest(arr);
        }

    console.log('The forest includes: ' + forest.toString());
    //console.log(forest);
    } else console.log('Invalid tree type, try again');

    prompt.finish();
})();