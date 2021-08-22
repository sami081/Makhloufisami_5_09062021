let params = new URL(document.location).searchParams;
const addShop = document.getElementById("addShop");
const buy = document.getElementById("buy");
let colorProduct;
let id = params.get("id");
let url = "http://localhost:3000/api/teddies/" + id;
const form = document.getElementById("form");

// au demarage appel les 2 fonctions
(async () => {
  const product = await getProduct();
  createProduct(product);
})();
// appel l'api
async function getProduct() {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}
// creation de l'ourson selectionné

function createProduct(product) {
  document.getElementById("productCard").innerHTML = "";
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

  createSelectColors(product);

  document.getElementById("productCard").appendChild(cloneElt);

  document.getElementById("addShop").onclick = (event) => {
    event.preventDefault(); // regardfe ça fait quoi

    let selectQuantity = parseInt(
      document.getElementById("productQuantity").value
    ); // voir pk ça ne se met pas à jour
    let colorSelected = document.getElementById("colorChoice").value;
    addBasket(product, selectQuantity, colorSelected);
  };
}

let selectQuantity = document.getElementById("productQuantity");
function quantity() {
  let q = parseInt(document.getElementById("productQuantity").value);
 
}
//creer la liste de couleur en 
function createSelectColors(product) {
  //selectionde la couleur
  let colorChoiceSelect = document.getElementById("colorChoice");
  product.colors.forEach(function (color) {
    var newOption = document.createElement("option");
    newOption.text = color.toString(); //item.whateverProperty

    colorChoiceSelect.add(newOption);
    let c = newOption;

    colorChoiceSelect.addEventListener("click", (e) => {
      colorProduct = e.target.value;
    });
  });
}

//function added products in local storage

function getQuantitySelected() {
  return parseInt(document.getElementById("productQuantity").value);
}
//ajoute dans le localStorage
function addBasket(product, quantity, selectedColor) {
  if (cgv.checked) {
    let basketFromLocalStorage = localStorage.getItem("myBasket");

    product.quantity = quantity;
    product.color = selectedColor.replace(/ /g, "_");
    Reflect.deleteProperty(product, "colors");
    //si tableau let vide crée un tableau et injecter le produits
    if (!basketFromLocalStorage) {
      let newBasket = [];
      newBasket.push(product);
      
      localStorage.setItem("myBasket", JSON.stringify(newBasket));

      //sinon ajouter a la suite
    } else {
      let basket = JSON.parse(basketFromLocalStorage);
      var updateQuantity = false;
      for (var i in basket) {
        if (
          basket[i]._id === product._id &&
          basket[i].color === selectedColor
        ) {
          updateQuantity = true;
          basket[i].quantity = quantity;
        }
      }
      if (!updateQuantity) {
        basket.push(product);
      }
      localStorage.setItem("myBasket", JSON.stringify(basket));
    
    }

    buy.innerHTML = `<div class="question"<p> Voulez-vous continuez vos achats?</p></div><div class=answer><a href="./index.html"> Oui</a> <a href="./panier.html"> Non </a></div>`;

  } else {
    alert("Veuillez accepter les cgv");
  }
  
}
myTeddy = "myBasket";
