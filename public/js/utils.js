
/**
 * Async AJAX
 * @param {string} requestType - The HTTP request type to send to URL.
 * @param {string} url - The URL to send request to.
 * @param {string} formData - The x-www-form-urlencoded data to send.
 * @param {function} callback - Function which is called once loaded
 */
function doAJAX(requestType, url, formData, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState != 4) return;
        callback(this.status, this.responseText);
    }

    xhttp.open(requestType, url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(formData);
}