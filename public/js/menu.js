/*jshint esversion: 6 */

/**
 * Adapted from https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript
 * Parses an integer into a currency formated string, e.g. 3 => "3.00", 3.5 => "3.50", etc.
 * @param {string} currencySign - The currency sign to prepend.
 * @param {integer} money - The integer value to parse into currency.
 * @returns {string} - A currency formated string.
 */
function parseCurrency(currencySign, money){
    return currencySign + money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

/**
 * Update navbar basket content.
 */
function updateNavBasket(basketJSON){
    let basketObj = JSON.parse(basketJSON);
    let pBasketTotal = document.querySelector("#basketTotal");
    pBasketTotal.innerHTML = parseCurrency("£", basketObj.total);
    let pBasketNoItems = document.querySelector("#basketNoItems");
    pBasketNoItems.innerHTML = "Items: " + basketObj.items.length;
}

/**
 * Add an item to add to the basket.
 * @param {integer} id - the menu item id to add the basket.
 */
function addToBasket(id){
    console.log("Item bought: " + id);
    doAJAX("POST", "/api/basket/add", "id="+id, 
    (httpStatusCode, basketJSON) =>{
        if (httpStatusCode == 200 && basketJSON){
            updateNavBasket(basketJSON);
        }
    });
}