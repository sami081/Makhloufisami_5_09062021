//let and const
let basketFromLocalStorage = JSON.parse(localStorage.getItem("myBasket"));
let quantityProduct = document.getElementById("quantityId");
let nameProduct = document.getElementById("nameId");
let priceProduct = document.getElementById("priceId");
let colorProduct = document.getElementById("ColorId");
let deleteProduct= document.getElementById("deleteProduct");
let total= document.getElementById("totalCart")
const form = document.getElementById("form")
let totalW
let text = document.getElementById("text")

// total =basketFromLocalStorage[i].price/100
// console.log(total)

const deleteBasket = document.getElementById("delAll");
const validation = document.getElementById("valid")
for (i = 0; i < basketFromLocalStorage.length; i++) {
  nameProduct.innerHTML += `<li>${basketFromLocalStorage[i].name}</li>`;
  priceProduct.innerHTML += `<li id="priceP">${
    (basketFromLocalStorage[i].price / 100) * basketFromLocalStorage[i].quantity
  }
  €</li>`;
  quantityProduct.innerHTML += `<li><button attr.id=${basketFromLocalStorage[i]._id} class="more" >+</button><span id="quant">${basketFromLocalStorage[i].quantity}</span><button attr.id=${basketFromLocalStorage[i]._id} class="less" >-</button></li>`;

 
   deleteProduct.innerHTML+=`<li><button  class="dell">x</button></li>`
   totalW =(basketFromLocalStorage[i].price / 100) * basketFromLocalStorage[i].quantity
   console.log(priceProduct)
   total.textContent= totalW +"€"
}

let more = document.querySelectorAll(".more");
more.forEach(test => {
  let productId =  test.getAttribute('attr.id');
  test.addEventListener("click", () => {
    let monPanier = JSON.parse(localStorage.getItem("myBasket"));
    monPanier.find(prod => prod._id === productId).quantity++;
    localStorage.setItem("myBasket",JSON.stringify(monPanier));
    window.location.reload();
  }); 
})
let less = document.querySelectorAll(".less");
less.forEach(test => {
  let productId =  test.getAttribute('attr.id');
  test.addEventListener("click", () => {
    let monPanier = JSON.parse(localStorage.getItem("myBasket"));
    monPanier.find(prod => prod._id === productId).quantity--;
    localStorage.setItem("myBasket",JSON.stringify(monPanier));
    window.location.reload();
  }); 
})


// let deleti = document.querySelectorAll(".deleti");
// deleti.forEach(del =>{
//    let productId =  del.getAttribute('attr.id')
//   del.addEventListener("click",()=>{
//     let monPanier = JSON.parse(localStorage.getItem("myBasket"));
//     monPanier=[];
// //     for (i = 0; i < monPanier.length; i++){
    
// // console.log(monPanier)
//     localStorage.setItem("myBasket",JSON.stringify(monPanier));
//     window.location.reload();
//     })  })
deleteBasket.addEventListener("click",()=>{
  
  if (confirm("etesvoussur")){
  let monPanier = JSON.parse(localStorage.getItem("myBasket"));
  monPanier=[];

  localStorage.setItem("myBasket",JSON.stringify(monPanier));
  window.location.reload();}else{console.log("edt")}

})



/// creation formulaire
validation.addEventListener("click", ()=>{
if(totalW > 0 ){
 form.classList.toggle("form-active")
}else{console.log("edt")}
})

//// end form///
/// montant total du panier///
// creatuon du tableau incrementer avec une boucle for
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
if (prixTotalProduits==0){text.innerHTML = `<p> Votre pannier est vide<br> <a href="./index.html">Retour a l'accueil</a></p>`}
///supprimer l'article

let dell = document.querySelectorAll(".dell")
console.log(dell)
for (d = 0; d < dell.length; d++){
  let idProduct = basketFromLocalStorage[d]._id;
  
  dell[d].addEventListener("click",(event)=>{
    event.preventDefault();
    console.log(idProduct)
basketFromLocalStorage = basketFromLocalStorage.filter(el => el._id !== idProduct)
console.log(basketFromLocalStorage)
localStorage.setItem("myBasket",JSON.stringify(basketFromLocalStorage));
window.location.reload()
// if(monPanier== null){console.log("votre pannier est vide")}
  })
}

/ form////
let firstName
let lastName
let adress
let email
let city
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
    }
    localStorage.setItem("contact",JSON.stringify(contact));
  console.log(contact)}
    else{console.log("non")}
  }
)



