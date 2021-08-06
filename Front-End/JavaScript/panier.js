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

 
   deleteProduct.innerHTML+=`<li><button attr.id =${basketFromLocalStorage[i]._id} class="deleti">x</button></li>`
  //  totalW =(basketFromLocalStorage[i].price / 100) * basketFromLocalStorage[i].quantity
  //  console.log(priceProduct)
  //  total.textContent= totalW +"€"
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


let deleti = document.querySelectorAll(".deleti");
deleti.forEach(del =>{
   let productId =  del.getAttribute('attr.id')
  del.addEventListener("click",()=>{
    let monPanier = JSON.parse(localStorage.getItem("myBasket"));
    monPanier=[];
//     for (i = 0; i < monPanier.length; i++){
    
// console.log(monPanier)
    localStorage.setItem("myBasket",JSON.stringify(monPanier));
    window.location.reload();
    })  })
deleteBasket.addEventListener("click",()=>{
  confirm("etes vous sur")
  if (confirm){
  let monPanier = JSON.parse(localStorage.getItem("myBasket"));
  monPanier=[];

  localStorage.setItem("myBasket",JSON.stringify(monPanier));
  window.location.reload();}else{console.log("edt")}
})



/// creation formulaire
validation.addEventListener("click", ()=>{
if(totalW > 0 ){
  form.innerHTML= `<h2> Veuillez remplir ce formulaire</h2><form>
  <label for="name">Nom</label>
  <input id="name" class="form-name" placeholder="Nom requis" required>
  <label for="prenom">prenom</label>
  <input id="prenom" class="form-prenom" placeholder="Prenom requis" required>
  <label for="email">Email</label>
  <input id="email" class="form-control" type="email" placeholder="Email requis" required="">
  <label for="adress">adresse</label>
  <input id="adress"  class="form-adress" type="text" placeholder="adresse requis"required>
  <label for="city">ville</label>
<input id="city" type="text" class="form-control" placeholder="ville requis" required>
  
<input type="submit" value="Valider ma commande" class="validation-commande" id="valCom">
  </form>`
}else{console.log("edt")}
})

//// end form///
//// ******************///
//// montant total du panier///
// creatuon du tableau incrementer avec une boucle for
let prixTotal= [];

for (m = 0; m<basketFromLocalStorage.length; m++){
  let prixProduits =basketFromLocalStorage[m].price*basketFromLocalStorage[m].quantity
  
  prixTotal.push(prixProduits)
  console.log(prixTotal)
}

///addtioner le tableau
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const prixTotalProduits = prixTotal.reduce(reducer)/100;
console.log(prixTotalProduits)
total.textContent = prixTotalProduits+"€"