
class Basket {
    
    constructor(){
        this.total = 0;
        this.items = [];
    }
    
    /**
     * Add item to basket.
     * @param {*} id 
     * @param {*} cost 
     */
    add(id, cost){
        this.total += cost;
        this.items.push(id);
    }

    getItems(){
        return this.items;
    }

    getTotal(){
        return this.total;
    }
}

var basket = new Basket();