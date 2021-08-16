//demarage appel les 2 fonctions
(async () => {
  const products = await getProducts()
  fillProducts(products)
})()
//appel a l'api
async function getProducts() {
  return fetch("http://localhost:3000/api/teddies")
    .then((response) => response.json())
    .then((data) => data)
    .catch(error => {
      console.log(error);
      alert('une erreur  avec le serveur est survenue');
    });
 ;
}


//permet pour chaque produits de crée un element
function fillProducts(products) {
  
  document.getElementById('productsList').innerHTML = ''

  products.forEach(element => {
    createProduct(element);
    
  });
}
//affiche chaque element crée
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
  document.getElementById('productsList').appendChild(cloneElt)
}




