
/**
 * Async AJAX
 * @param {string} url - The url to GET request
 * @param {function} callback - function which is called once loaded => callback(httpStatus, data)
 */
function AJAXGet(url, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            callback(this.status, this.responseText);
        }else{
            callback(this.status, false);
        }
    }

    xhttp.open("GET", url, true);
    xhttp.send();
}