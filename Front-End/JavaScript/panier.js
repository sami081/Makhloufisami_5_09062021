//let and const
let basketFromLocalStorage = JSON.parse(localStorage.getItem("myBasket"));
let quantityProduct = document.getElementById("quantityId");
let nameProduct = document.getElementById("nameId");
let priceProduct = document.getElementById("priceId");
let colorProduct = document.getElementById("colorId");
let deleteProduct= document.getElementById("deleteProduct");
let total= document.getElementById("totalCart")
const form = document.getElementById("form")
let totalW

let text = document.getElementById("text")

//function calcul du panier
function calculBasket (){
  let basketFromLocalStorage = JSON.parse(localStorage.getItem("myBasket"));
  let prixTotal= [];
  
  for (m = 0; m<basketFromLocalStorage.length; m++){
    let prixProduits =basketFromLocalStorage[m].price*basketFromLocalStorage[m].quantity
    
    prixTotal.push(prixProduits)
    console.log(prixTotal)
  }
  
  ///addtioner le tableau
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const prixTotalProduits = prixTotal.reduce(reducer,0)/100;
  console.log(prixTotalProduits)
  total.textContent = prixTotalProduits + " € "
  if (prixTotalProduits==0){text.innerHTML = `<p> Votre panier est vide<br> <a href="./index.html">Retour a l'accueil</a></p>`}
  }

//function ..?
function updateBasket(productId, color){
  let spanQuantityForProductId = document.getElementById(`quantity-${productId}-${color}`)
  
  let quantityOfProductIdFromLocalStorage = getProductFromLocalStorage(productId, color).quantity;
  spanQuantityForProductId.innerHTML = quantityOfProductIdFromLocalStorage;
  let priceForProductId = document.getElementById(`priceP-${productId}-${color}`)
let priceOfProductIdFromLocalStorage = getProductFromLocalStorage(productId, color).price
priceForProductId.innerHTML = priceOfProductIdFromLocalStorage/100*quantityOfProductIdFromLocalStorage + " € "
calculBasket();
}


//function localStorage?
function getProductFromLocalStorage(productId, color) {
  let basketFromLocalStorage = JSON.parse(localStorage.getItem("myBasket"));
  let myProductFound = null;
  return basketFromLocalStorage.find(prod => prod._id === productId && prod.color === color)
}









//affiche le panier en fonction du produits
const deleteBasket = document.getElementById("delAll");
const validation = document.getElementById("valid")
for (i = 0; i < basketFromLocalStorage.length; i++) {
  let colorForId = basketFromLocalStorage[i].color.replace(/ /g,"_");
  let colorLabel = basketFromLocalStorage[i].color.replace("_"," ");
  nameProduct.innerHTML += `<li >${basketFromLocalStorage[i].name}</li>`;
  colorProduct.innerHTML += `<li ">${colorLabel}<li>`;
  priceProduct.innerHTML += `<li id="priceP-${basketFromLocalStorage[i]._id}-${basketFromLocalStorage[i].color}">${
    (basketFromLocalStorage[i].price / 100) * basketFromLocalStorage[i].quantity
  } €</li>`;
  quantityProduct.innerHTML += `<li ><button attr.id=${basketFromLocalStorage[i]._id}-${colorForId} class="more size" >+</button><span id="quantity-${basketFromLocalStorage[i]._id}-${basketFromLocalStorage[i].color}">${basketFromLocalStorage[i].quantity}</span><button attr.id=${basketFromLocalStorage[i]._id}-${colorForId} class="less size" >-</button></li>`;

 
   deleteProduct.innerHTML+=`<li><button  class="dell size ">x</button></li>`
   totalW =(basketFromLocalStorage[i].price / 100) * basketFromLocalStorage[i].quantity
   console.log(priceProduct)
   total.textContent= totalW 
}
function modifQuantity(){
let more = document.querySelectorAll(".more");
more.forEach(test => {
  let attributesArray =  test.getAttribute('attr.id').split('-');
  test.addEventListener("click", () => {
    let monPanier = JSON.parse(localStorage.getItem("myBasket"));
    let monProduit = monPanier.find(prod => prod._id === attributesArray[0] && prod.color === attributesArray[1]);
    monProduit.quantity++;
    localStorage.setItem("myBasket",JSON.stringify(monPanier));
    updateBasket(attributesArray[0], attributesArray[1]);
  }); 
})
let less = document.querySelectorAll(".less");
less.forEach(test => {
  let attributesArray=  test.getAttribute('attr.id').split('-');
  test.addEventListener("click", () => {
    let monPanier = JSON.parse(localStorage.getItem("myBasket"));
    let monProduit = monPanier.find(prod => prod._id === attributesArray[0] && prod.color ===attributesArray[1]);
    if (monProduit.quantity > 1) {
      monProduit.quantity--;
    } 
    localStorage.setItem("myBasket",JSON.stringify(monPanier));
    // window.location.reload();
    updateBasket(attributesArray[0],attributesArray[1]);
  }); 
})}
modifQuantity()


//suppression du panier
deleteBasket.addEventListener("click",()=>{
  
  if (confirm("Voulez vous vraiment supprimer votre panier?")){
  let monPanier = JSON.parse(localStorage.getItem("myBasket"));
  monPanier=[];

  localStorage.setItem("myBasket",JSON.stringify(monPanier));
  window.location.reload()
  text.innerHTML = `<p> Votre panier est vide<br> <a href="./index.html">Retour a l'accueil</a></p>`
  ;}else{console.log("edt")}
})



/// apparation du formulaire formulaire
validation.addEventListener("click", ()=>{
if(totalW > 0 ){
 form.classList.toggle("form-active")
}else{console.log("edt")}
})




///supprimer l'article

let dell = document.querySelectorAll(".dell")
console.log(dell)
for (d = 0; d < dell.length; d++){
  let idProduct = basketFromLocalStorage[d]._id;
  let colorForProduct = basketFromLocalStorage[d].color
  dell[d].addEventListener("click",(event)=>{
    event.preventDefault();
    console.log(idProduct)
basketFromLocalStorage = basketFromLocalStorage.filter((el => el._id !== idProduct) && (el => el.color !== colorForProduct))
console.log(basketFromLocalStorage)
localStorage.setItem("myBasket",JSON.stringify(basketFromLocalStorage));
window.location.reload()
// if(monPanier== null){console.log("votre pannier est vide")}
  })
}

// form////
let firstName
let lastName
let adress
let email
let city
let numberCommand=Math.round(Math.random()*10000000)
const lastNames = document.getElementById("lastName")
const firstNames = document.getElementById("firstName")
const address = document.getElementById("adress")
const town = document.getElementById("city")
const mail = document.getElementById("email")


  lastNames.addEventListener("input",(e)=>{
   lastName =e.target.value;
   console.log(lastName)
  })
  firstNames.addEventListener("input",(e)=>{
   firstName =e.target.value;
    console.log(firstName)
   })
   address.addEventListener("input",(e)=>{
    adress =e.target.value;
     console.log(adress)
    })
    town.addEventListener("input",(e)=>{
      city =e.target.value;
       console.log(city)
      })
      mail.addEventListener("input",(e)=>{
        email =e.target.value;
         console.log(email)
        })
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  if(lastName&& firstName&& email&& adress&& city){
    const contact ={
      lastName,
      firstName,
      email,
      adress,
      city,
      numberCommand,
      totalW
     
    }
    localStorage.setItem("contact",JSON.stringify(contact));
    let monPanier = JSON.parse(localStorage.getItem("myBasket"));
    monPanier=[];
  
    localStorage.setItem("myBasket",JSON.stringify(monPanier));
    window.location.reload()
 window.open("./confirmation.html")}

    else{console.log("non")}
  }
)

calculBasket();
