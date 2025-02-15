console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
    basket.push(item);
    return true;
}
addItem(item = "bananas", "cherries");
addItem(item = "oranges");
addItem(item = "apples");
console.log('added new item to basket', item);

function listItems(basket) {
    for (let index = 0; index < basket.length; index++) {
        
        console.log(basket[index]);

        
    }
}
console.log('what is in my basket', basket);


function empty() {
    basket.length = 0
    return true
}
empty();
console.log(basket.table);




// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
