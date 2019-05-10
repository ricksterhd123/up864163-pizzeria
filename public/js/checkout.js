
function doOrder(){
    let name = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;
    let phoneNumber = document.querySelector("#phoneNumber").value;

    if (name.length != 0 && lastName.length != 0 && phoneNumber.length == 11){
        doAJAX("POST", "/api/order/add", "name="+name+"&lName="+lastName+"&phoneNumber="+phoneNumber, 
        (httpStatusCode) =>{
            if (httpStatusCode == 200){
                window.location.replace('/orders');
            }
        });
    }else{
        alert("Please enter valid contact details");
    }
}

function backToBasket(){
    window.location.replace('/basket');
}