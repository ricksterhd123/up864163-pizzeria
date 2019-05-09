/*jshint esversion: 6 */

/**
 * Update navbar basket content.
 */
function updateNavBasket(){
    doAJAX("GET", "/api/basket/", "", (httpStatusCode, basketObj) => {
        if (httpStatusCode == 200 && basketObj){
            let pBasketTotal = document.querySelector("#basketTotal");
            pBasketTotal.value = basketObj.total;
            let pBasketNoItems = document.querySelector("#basketNoItems");
            pBasketNoItems.value = basketObj.items.length;
        }
    });
}
/**
 * Add an item to add to the basket.
 * @param {integer} id - the menu item id to add the basket.
 */
function addToBasket(id){
    console.log("Item bought: " + id);
    doAJAX("POST", "/api/basket/add", "id="+id, 
    (httpStatusCode) =>{
        if (httpStatusCode == 200){
            updateNavBasket();
        }
    });
}