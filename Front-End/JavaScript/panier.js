


let basketFromLocalStorage = JSON.parse(localStorage.getItem("myBasket"));
let quantityProduct = document.getElementById("quantityId")
let nameProduct = document.getElementById("nameId");
let priceProduct = document.getElementById("priceId")
for (i=0; i<basketFromLocalStorage.length; i++){
  console.log(basketFromLocalStorage[i])
  nameProduct.innerHTML += `<li>${basketFromLocalStorage[i].name}</li>`
  priceProduct.innerHTML += `<li>${basketFromLocalStorage[i].price/100}  €</li>`
quantityProduct.innerHTML += `<li>${basketFromLocalStorage[i].quantity}</li>`
}


