let params = (new URL(document.location)).searchParams;

let id = params.get('id'); 
let url = 'http://localhost:3000/api/teddies/' +id;


// Methode called at startup
;(async () => {
  const product = await getProduct()
  fillProduct(product)
})()

async function getProduct() {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}

function fillProduct(product) {
  
  document.getElementById('productCard').innerHTML = ''

    createProduct(product);

}

function createProduct(product) {
   //Get template
  const templateElt = document.getElementById('product')

  // Clone template
  const cloneElt = document.importNode(templateElt.content, true)

   //Hydrate template
  cloneElt.getElementById('productImage').src = product.imageUrl
  cloneElt.getElementById('productName').textContent = product.name
  cloneElt.getElementById('productPrice').textContent = `${product.price / 100}.00 €`
  cloneElt.getElementById('productDescription').textContent = product.description
  cloneElt.getElementById('productLink').href = `produits.html?id=${product._id}`

   //Display template
  document.getElementById('productCard').appendChild(cloneElt)
};


//function test(){
 // console.log("selectQuantity.value");
//}
let selectQuantity = document.getElementById("productQuantity");
function quantity() {
  q = document.getElementById("productQuantity").value;
  console.log((q));
};
let selectColor = document.getElementById("colorChoice");
function color() {
  c = document.getElementById("colorChoice").value;
  console.log((c));
};





