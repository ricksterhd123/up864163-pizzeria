/*jshint esversion: 6*/

/**
 * Basket class which will store menu items and total price.
 * NOTE: All items must be objects with one 'price' field of type integer.
 */
class Basket{
    constructor(basketObj){
        if (basketObj){
            this.items = basketObj.items;
            this.total = basketObj.total;
        } else {
            this.items = [];
            this.total = 0.00;
        }
    }

    /**
     * Adds a menu item to the basket and updates the total price.
     * @param {object} item - The item to add to the basket. 
     */
    add(item){
        this.items.push(item);
        this.total += item.price;
    }

    delete(itemID){
        let indexOfItem = this.items.findIndex((obj) => {return obj.id == itemID;});
        console.log("basket index: " + indexOfItem)
        if (indexOfItem != -1){
            this.total -= this.items[indexOfItem].price;
            this.items.splice(indexOfItem, 1);
        }
    }
}
module.exports = Basket;