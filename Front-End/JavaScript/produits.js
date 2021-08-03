let params = new URL(document.location).searchParams;
const addShop = document.getElementById("addShop");


let id = params.get("id");
let url = "http://localhost:3000/api/teddies/" + id;
const form = document.getElementById("form");
//let bought =  document.getElementById("buy");

//bought = '';

// Methode called at startup
(async () => {
  const product = await getProduct();
  fillProduct(product);
})();

async function getProduct() {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}

function fillProduct(product) {
  document.getElementById("productCard").innerHTML = "";

  createProduct(product);
}

function createProduct(product) {
  //Get template
  const templateElt = document.getElementById("product");

  // Clone template
  const cloneElt = document.importNode(templateElt.content, true);

  //Hydrate template
  cloneElt.getElementById("productImage").src = product.imageUrl;
  cloneElt.getElementById("productName").textContent = product.name;
  cloneElt.getElementById("productPrice").textContent = `${
    product.price / 100
  }.00 €`;
  cloneElt.getElementById("productDescription").textContent =
    product.description;
  cloneElt.getElementById(
    "productLink"
  ).href = `produits.html?id=${product._id}`;

  //Display template

 let colorChoiceSelect = document.getElementById("colorChoice");

  product.colors.forEach(function(color){ 
  
          var newOption = document.createElement("option");
          newOption.text = color.toString();//item.whateverProperty

          colorChoiceSelect.add(newOption);
      let c = newOption
      console.log(c)
          
  });


  document.getElementById("productCard").appendChild(cloneElt);

  // comprendre ce bloc | code déclanché au clic sur ajouter au panier
  document.getElementById("addShop").onclick = (event) => {
    console.log('click sur boutton');
    event.preventDefault(); // regardfe ça fait quoi
    let selectQuantity = parseInt(document.getElementById("productQuantity").value); // voir pk ça ne se met pas à jour
    
    addBasket(product, selectQuantity,);
   
  };
}

//function test(){
// console.log("selectQuantity.value");
//}
let selectQuantity = document.getElementById("productQuantity");
function quantity() {
  q = parseInt(document.getElementById("productQuantity").value);
  console.log(q);
}

 
//  function color() {
//   c = colorChoiceSelect.value;
//   console.log(c)
//  }

//local storage----const = document.getElementById ("addShop")

//addShop.onclick = () =>{
//localStorage.setItem("productName","nom.value")
//};

//let myteddy = "";
//function added products in local storage

function getQuantitySelected(){
  return parseInt(document.getElementById("productQuantity").value, );
}
function addBasket(product, quantity) {
  if (cgv.checked) {
    // create let
    let basketFromLocalStorage = localStorage.getItem("myBasket");
    product.quantity = quantity;
    //si tableau let vide crée un tableau et injecter le produits
    if (!basketFromLocalStorage) {
      let newBasket = [];
      newBasket.push(product);
      localStorage.setItem("myBasket", JSON.stringify(newBasket));

      //sinon ajouter a la suite
    } else {
      let basket = JSON.parse(basketFromLocalStorage);
      var updateQuantity = false;
      for (var i in basket){
        if (basket[i]._id === product._id) {
          updateQuantity = true;
          basket[i].quantity =  q;
        }
      }
      if (!updateQuantity) {
        basket.push(product);
      }
      localStorage.setItem("myBasket", JSON.stringify(basket));
      console.log(basket[0].name);
    }
  } else {
    alert("Veuillez accepter les cgv");
    console.log(basket)
  }
  console.log(quantity)
}
myTeddy = "myBasket";

//   bought= localStorage.getItem('myBasket',JSON.stringify(product));
// console.log(bought);
// //addShop.onclick = () =>{
//   //localStorage.getItem("myPurchase", JSON.stringify(product))

//}//

// stockage des quantité
//ajouter les couleur dynamiquemen