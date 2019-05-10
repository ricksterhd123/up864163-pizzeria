/*jshint esversion: 6 */

/**
 * Add the same item to the session's basket.
 * @param {Integer} liID - The id of the list item 
 * @param {Integer} itemID - The id of the menu item
 */
function addItem(liID, itemID){
    doAJAX("POST", "/api/basket/add", "id="+id, 
    (httpStatusCode) =>{
        if (httpStatusCode == 200){
            updateNavBasket();
            
            let ulBasketList = document.querySelector("#basketList");
            let liClickedBasketItem = doucment.querySelector("#"+liID);
            let liBasketItem = document.createElement("li");
            let pBasketName = document.createElement("p");
            let pBasketDescription = document.createElement("p");
            let btnAddItem = document.createElement("button");
            let btnRemoveItem = document.createElement("button");
            
        }
    });
}

/**
 * Remove an item from the session's basket.
 * @param {*} liID - The id of the list item 
 * @param {*} itemID - The id of the menu item
 */
function removeItem(ulID, itemID){
    console.log(ulID, itemID);
}