const callback=function(elem) {
    elem.style.backgroundColor='red';
}

function elemCreator(elem,callbackFunction) {
    newElement=document.createElement(elem);
    newElement.innerText="new element created!";
    callbackFunction(newElement);
    document.body.appendChild(newElement);
}

elemCreator('div',callback);