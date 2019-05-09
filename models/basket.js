/*jshint esversion: 6*/

/**
 * Basket class which will store menu items and total price.
 * NOTE: All items must be objects with one 'price' field of type integer.
 */
class Basket{
    constructor(){
        this.items = [];    // A list of menu item objects.
        this.total = 0.00;     // Total cost of all menu items.
    }

    /**
     * Adds a menu item to the basket and updates the total price.
     * @param {object} item - The item to add to the basket. 
     */
    add(item){
        this.items.push(item);
        this.total += item.price;
    }

    /**
     * Removes all instances of a menu object from the basket and subtracts the price.
     * @param {object} item - A menu object to remove from the basket. 
     */
    deleteAll(item){
        let count = this.items.filter( (obj) => {return JSON.stringify(obj) == JSON.stringify(item);} ).length;
        this.items = this.items.filter( (obj) => {return JSON.stringify(obj) != JSON.stringify(item);} );
        this.total -= item.price * count;
    }

    delete(item){
        let indexOfItem = this.items.find((obj) => {return JSON.stringify(obj) == JSON.stringify(item)});
        if (indexOfItem != -1){
            this.items.splice(indexOfItem, 1);
        }

        this.total -= item.price;
    }
}

module.exports = Basket;