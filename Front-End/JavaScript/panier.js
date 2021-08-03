let basketFromLocalStorage = JSON.parse(localStorage.getItem("myBasket"));
let quantityProduct = document.getElementById("quantityId");
let nameProduct = document.getElementById("nameId");
let priceProduct = document.getElementById("priceId");
let colorProduct = document.getElementById("ColorId");

for (i = 0; i < basketFromLocalStorage.length; i++) {
 
  nameProduct.innerHTML += `<li>${basketFromLocalStorage[i].name}</li>`;
  priceProduct.innerHTML += `<li id="priceP">${
    basketFromLocalStorage[i].price / 100*basketFromLocalStorage[i].quantity}
  €</li>`;
  quantityProduct.innerHTML += `<li><button id="more${basketFromLocalStorage[i].name}">+</button><span id="quant">${basketFromLocalStorage[i].quantity}</span><button id="less${basketFromLocalStorage[i].name}">-</button></li>`;

  let more = document.getElementById("more" + basketFromLocalStorage[i].name);
  console.log(more);
  let less = document.getElementById("less" + basketFromLocalStorage[i].name);
  let quant = document.getElementById("quant");
  // more.addEventListener('click', function(){
  //   quant.textContent += basketFromLocalStorage[i].quantity++
  //   localStorage.setItem("myBasket",JSON.stringify(basketFromLocalStorage));
  //   rafraichProduit()
  // });
  more.addEventListener("click", () => {
    quant.textContent = basketFromLocalStorage[0].quantity += 1;
    priceProduct.textContent =
      (basketFromLocalStorage[0].price / 100) *
        basketFromLocalStorage[0].quantity +
      "€";
    localStorage.setItem("myBasket", JSON.stringify(basketFromLocalStorage));
  });
  less.addEventListener("click", () => {
    if (basketFromLocalStorage[0].quantity > 0) {
      quant.textContent = basketFromLocalStorage[0].quantity -= 1;
      priceProduct.textContent =
        (basketFromLocalStorage[0].price / 100) *
          basketFromLocalStorage[0].quantity +
        "€"; 
        localStorage.setItem("myBasket", JSON.stringify(basketFromLocalStorage));
    }
  });
}
