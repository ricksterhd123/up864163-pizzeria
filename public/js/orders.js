function updateOrders(){
    doAJAX("GET", "/api/order", "", 
    (httpStatusCode, orderJSON) =>{
        if (httpStatusCode == 200 && orderJSON){
            let orders = JSON.parse(orderJSON);
            let divOrders = document.querySelector("#orders");
            let parentNode = divOrders.parentNode;
            parentNode.removeChild(divOrders);

            divOrders = document.createElement("div");
            divOrders.id = "orders";
            parentNode.appendChild(divOrders);

            for (let i = 0; i < orders.length; i++){
                let divOrder = document.createElement("div");
                divOrder.className = "order";

                let pName = document.createElement("p");
                pName.textContent = "Name: " + orders[i].name;

                let pLastName = document.createElement("p");
                pLastName.textContent = "Last name: " + orders[i].lastName;

                let phoneNumber = document.createElement("p");
                phoneNumber.textContent = "Phone number: " + orders[i].phoneNumber;

                let divItems = document.createElement("div");
                
                for (let j = 0; j < orders[i].order.items.length; j++){
                    let pItemName = document.createElement("p");
                    pItemName.textContent = orders[i].order.items[j].name;
                    divItems.appendChild(pItemName);
                }
                divOrder.appendChild(pName);
                divOrder.appendChild(pLastName);
                divOrder.appendChild(phoneNumber);
                divOrder.appendChild(divItems);
                divOrders.appendChild(divOrder);
            }
        }
    });
}

setInterval(updateOrders, 2000);