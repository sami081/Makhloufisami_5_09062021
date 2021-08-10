// Methode called at startup
;(async () => {
  const products = await getProducts()
  fillProducts(products)
})()

async function getProducts() {
  return fetch("http://localhost:3000/api/teddies")
    .then((response) => response.json())
    .then((data) => data);
}

function fillProducts(products) {
  
  document.getElementById('productsList').innerHTML = ''

  products.forEach(element => {
    createProduct(element);
    
  });
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
  document.getElementById('productsList').appendChild(cloneElt)
}




