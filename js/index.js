function deleteItem(event){
  event.target.parentElement.remove();
  
}

function getPriceByProduct(itemNode){
let totalUnitsArray = [...document.querySelectorAll(".costUnit")];
let totalQuantity = [...document.querySelectorAll(".quantity")];
let listTotals = [...document.querySelectorAll(".total")];
let totalUnitsValue = 0.0;

for (let i = 0; i < totalUnitsArray.length; i++) {
  totalUnitsValue = parseFloat(totalUnitsArray[i].innerText * totalQuantity[i].value).toFixed(2);
  listTotals[i].innerText = totalUnitsValue;
  console.log(totalUnitsValue);
  }
}
//el spread operator te transforma un node en un array ( [...elemento]) , es importante tratar de hacerlo cuando se tenga q hacer una iteracion.

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  /*let qtity = document.getElementById("quantity").value;
  let price = document.querySelector("#cost-of-the-unit").innerHTML; //en este caso el innerHTMl es para ingresar al valor del elemento que ne este caso es un texto numerico igual a el precio de la 
  let totalPrice = parseInt(qtity) * parseInt(price);
  //document.querySelector(".total-price").innerHTML = totalPrice; esta es otra manera de añadair el preciototal dentro del innerHTML del span de total-price.
  let priceToUpdate = document.querySelector(".total-price");
  priceToUpdate.innerHTML = totalPrice.toString(); modificada.... esta funcion asi no sirve.... 
    let qtityInputs = document.getElementsByClassName("quantity");
    let prices = document.querySelectorAll(".cost-of-the-unit"); 
    let pricesToUpdate = document.querySelectorAll(".total-price");
      for (let i = 0; i < qtityInputs.length; i++) {
        let qtity = qtityInputs[i].value;
        let price = prices[i].innerHTML;
        let priceToUpdate = pricesToUpdate[i];
        let totalPrice = parseInt(qtity) * parseInt(price);
        priceToUpdate.innerHTML = totalPrice.toString();
    }*/
    getPriceByProduct();

    let listTotals = [...document.querySelectorAll(".total")];
    let div = document.querySelector("#sumAll");
    let total = 0.0;

    for (let i = 0; i < listTotals.length; i++) {
    total += parseFloat(listTotals[i].innerText);
    }
    
    let h2 = document.querySelector("h2");
    
    if (h2 < 1) {
    let h2 = document.createElement("h2");//createElement te crea un nuevo elemento dentro del documento html.
    div.appendChild(h2);
      h2.innerText = `total price: $ ${total}`;
    } else {
      h2.innerText = `total price: $ ${total}`;
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
  let products = document.querySelector("#products");
  let NewProduct = document.querySelector("#newProduct").value;
  let price = document.querySelector("#newPrice").value;
      price = parseFloat(price).toFixed(2);
  let div = document.createElement("div");
  div.setAttribute("class", "wrapper");
  div.innerHTML = `<span class="productName">  ${NewProduct} </span>
    <div class="price">
      Unit Value $:
        <span class="costUnit"> ${price} </span>
    </div>
    <label class="label">
      QTY
        <input class="quantity" type="number" name="cantidad" value="0" />
    </label>

    <div class="totaly">
      Total $:
        <span class="total"> 0.00 </span>
    </div>

    <button class="btn btn-delete" name="btn-delete">Delete</button>
    </div>`;

    products.appendChild(div);
    update();
}


function update() {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}


window.onload = function(){
  this.update();
}
  
