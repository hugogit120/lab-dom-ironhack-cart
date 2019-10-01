function deleteItem(event){
  
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  /*let qtity = document.getElementById("quantity").value;
  let price = document.querySelector("#cost-of-the-unit").innerHTML; //en este caso el innerHTMl es para ingresar al valor del elemento que ne este caso es un texto numerico igual a el precio de la 
  let totalPrice = parseInt(qtity) * parseInt(price);
  //document.querySelector(".total-price").innerHTML = totalPrice; esta es otra manera de añadair el preciototal dentro del innerHTML del span de total-price.
  let priceToUpdate = document.querySelector(".total-price");
  priceToUpdate.innerHTML = totalPrice.toString(); modificada.... esta funcion asi no sirve.... o sea si pero no xD*/
    let qtityInputs = document.getElementsByClassName("quantity");
    let prices = document.querySelectorAll(".cost-of-the-unit"); 
    let pricesToUpdate = document.querySelectorAll(".total-price");
      for (let i = 0; i < qtityInputs.length; i++) {
        let qtity = qtityInputs[i].value;
        let price = prices[i].innerHTML;
        let priceToUpdate = pricesToUpdate[i];
        let totalPrice = parseInt(qtity) * parseInt(price);
        priceToUpdate.innerHTML = totalPrice.toString();
    }
} 

/*cuando se quiere modicar el texto dentro de un elemento, se tiene primero que coger el
elemento entero (vease let priceToUpdate), luego modificamos su innerHTML como se ve 
luego del priceToUpdate.*/


function createQuantityInput(){

}

function createDeleteButton(){
  let buttonElement = document.getElementsByClassName('btn-delete');
  buttonElement.onclick = function () {
    wrapper.removeChild(button);
  }
}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
