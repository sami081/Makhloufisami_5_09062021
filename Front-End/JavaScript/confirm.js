let contactStorage = JSON.parse(localStorage.getItem("contact"))

console.log(contactStorage)
let lastName=contactStorage.lastName;
let firstName = contactStorage.firstName;
let adress = contactStorage.adress;
let city = contactStorage.city;
let email = contactStorage.email;
let  numberCommand = contactStorage.numberCommand

const confirm = document.getElementById("confirm");

confirm.innerHTML =
` <h2> Votre commande n° ${numberCommand} a bien éte validé</h2>
<p> Elle vous sera livré sous 5 jours ouvrés <br> au nom de : ${lastName} ${firstName}<br> a l'adresse suivante :<br> ${adress} ${city}<br> Votre facture vous a été envoyé a l'email suivant : ${email}



`
