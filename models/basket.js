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

    // /**
    //  * Removes all instances of a menu object from the basket and subtracts the price.
    //  * @param {object} item - A menu object to remove from the basket. 
    //  */
    // deleteAll(item){
    //     let count = this.items.filter( (obj) => {return JSON.stringify(obj) == JSON.stringify(item);} ).length;
    //     this.items = this.items.filter( (obj) => {return JSON.stringify(obj) != JSON.stringify(item);} );
    //     this.total -= item.price * count;
    // }

    delete(item){
        let indexOfItem = this.items.find((obj) => {return JSON.stringify(obj) == JSON.stringify(item)});
        if (indexOfItem != -1){
            this.items.splice(indexOfItem, 1);
        }

        this.total -= item.price;
    }
}

let b = new Basket();
b.add({"price": 12.00});
console.log(b.add);
module.exports = Basket;