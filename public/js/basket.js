/*jshint esversion: 6 */

/**
 * Update the h1 tag which contains the total price.
 * @param {integer} totalPrice 
 */
function updateBasketTotal(totalPrice){
    let h1BasketTotal = document.querySelector("#basketTotalHeader");
    h1BasketTotal.innerHTML = "Total: " + parseCurrency("£", totalPrice);
}

function updateCheckoutBtn(totalPrice){
    let btnDoCheckout = document.querySelector("#checkoutBtn");
    btnDoCheckout.disabled = (totalPrice) == 0;
}

/**
 * Update the basket list in the basket page.
 * @param {ulElement} basketList - The ul element containing the basket items to update. 
 */
function updateBasketList(basketList, basketJSON){
    let basket = JSON.parse(basketJSON);
    updateBasketTotal(basket.total);
    updateCheckoutBtn(basket.total);
    let parentNode = basketList.parentElement;
    // remove entire basketList 
    parentNode.removeChild(basketList);
    basketList = document.createElement("ul");
    basketList.id = "basketList";
    for (let i = 0; i < basket.items.length; i++){
        let liBasketItem = document.createElement("li");
        let pItemName = document.createElement("p");
        let pItemDescription = document.createElement("p");
        let pItemPrice = document.createElement("p");
        let btnAddItem = document.createElement("button");
        let btnRemoveItem = document.createElement("button");
        liBasketItem.className = basket.items[i].type;
        liBasketItem.id = basket.items[i].id;
        pItemName.innerHTML = basket.items[i].name;
        pItemDescription.innerHTML = basket.items[i].description;
        pItemPrice.innerHTML = parseCurrency("£", basket.items[i].price);
        btnAddItem.textContent = "Add";
        btnRemoveItem.textContent = "Remove";
        btnAddItem.onclick = function(event){ addItem(basket.items[i].id); };
        btnRemoveItem.onclick = function(event){ removeItem(basket.items[i].id); };
        liBasketItem.appendChild(pItemName);
        liBasketItem.appendChild(pItemDescription);
        liBasketItem.appendChild(pItemPrice);
        liBasketItem.appendChild(btnAddItem);
        liBasketItem.appendChild(btnRemoveItem);
        basketList.appendChild(liBasketItem);
    }
    parentNode.appendChild(basketList);
}

/**
 * Add the another item to the session's basket.
 * @param {Integer} itemID - The id of the menu item
 */
function addItem(itemID){
    doAJAX("POST", "/api/basket/add", "id="+itemID, 
    (httpStatusCode, basketJSON) =>{
        if (httpStatusCode == 200 && basketJSON){
            updateNavBasket(basketJSON);
            let ulBasketList = document.querySelector("#basketList");
            updateBasketList(ulBasketList, basketJSON);
        }
    });
}

/**
 * Remove an item from the session's basket.
 * @param {*} itemID - The id of the menu item
 */
function removeItem(itemID){
    console.log(itemID);
    doAJAX("DELETE", "/api/basket/delete", "id="+itemID, 
    (httpStatusCode, basketJSON) =>{
        if (httpStatusCode == 200 && basketJSON){
            updateNavBasket(basketJSON);
            let ulBasketList = document.querySelector("#basketList");
            updateBasketList(ulBasketList, basketJSON);
        }
    });
}

/** 
 * Checkout user
 */
function doCheckout(){
    doAJAX("GET", "/api/basket", "", 
    (httpStatusCode, basketJSON) =>{
        if (httpStatusCode == 200 && basketJSON){
            let basket = JSON.parse(basketJSON);
            if (basket.items.length == 0){
                alert("You have no items to checkout.");
            }
            window.location.replace('/checkout');
        }
    });
}