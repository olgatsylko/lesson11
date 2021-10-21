// let ConTree = require ('./trees/coniferTree');
// let DecTree = require ('./trees/deciduousTree');
let StoreB = require ('./store/storeBuilder');
let Store = require ('./store/store');
let Forest = require ('./forest/forest');
let ForestB = require ('./forest/forestBuilder');
let prompt = require ('prompt-promise');

(async () => {
    let store = StoreB.buildStore();
    let forest = ForestB.forestBuilder();
    const numbDecTrees = parseInt (await prompt ('How many deciduous trees do you need? '));
    const numbConTrees = parseInt (await prompt ('How many conifier trees do you need? '));
    
    if (numbDecTrees > 0 && numbDecTrees > store.getDecType()) {
        console.log(`We have only '${store.getDecType()}' deciduous trees`);
        console.log(`Order for '${store.getDecType()}' deciduous trees is created`);
        let arr = store.getTreesForPlant(store.getDecType(), 'deciduous');
        forest = ForestB.addForest(arr);

    } else if (numbDecTrees < store.getDecType() && numbDecTrees > 0){
        console.log(`Order for '${numbDecTrees}' deciduous trees is approved`);
        let arr = store.getTreesForPlant(numbDecTrees, 'deciduous');
        forest = ForestB.addForest(arr);

    } else if (numbDecTrees === store.getDecType()){
        console.log(`Order for '${numbDecTrees}' deciduous trees is created`);
        let arr = store.getTreesForPlant(numbDecTrees, 'deciduous');
        forest = ForestB.addForest(arr);
    } 

    console.log(forest);

    if (numbConTrees > 0 && numbConTrees > store.getConType()){
        console.log(`We have only '${store.getConType()}' conifier trees`);
        console.log(`Order for '${store.getConType()}' conifier trees is approved`);
        let arr = store.getTreesForPlant(store.getConType(), 'conifier');
        forest = ForestB.addForest(arr);

    } else if (numbConTrees < store.getConType() && numbConTrees > 0){
        console.log(`Order for '${numbConTrees}' conifier trees is approved`);
        let arr = store.getTreesForPlant(numbConTrees, 'conifier');
        forest = ForestB.addForest(arr);
    } else if (numbConTrees === store.getConType()){
        console.log(`Order for '${numbConTrees}' conifier trees is approved`);
        let arr = store.getTreesForPlant(numbConTrees, 'conifier');
        forest = ForestB.addForest(arr);
    }
    console.log(forest);

        prompt.finish();
})();
