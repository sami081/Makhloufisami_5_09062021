//Déclaration de variable
let contactStorage = JSON.parse(localStorage.getItem("contact"))


let lastName=contactStorage.lastName;
let firstName = contactStorage.firstName;
let adress = contactStorage.adress;
let city = contactStorage.city;
let email = contactStorage.email;
let  numberCommand = contactStorage.numberCommand;
let priceContact = contactStorage.totalW;

const confirm = document.getElementById("confirm");
<<<<<<< HEAD

confirm.innerHTML =
` <h2> Votre commande n° ${numberCommand} a bien éte validé</h2>
<p> Elle vous sera livré sous 5 jours ouvrés <br> au nom de : ${lastName} ${firstName}<br> a l'adresse suivante :<br> ${adress} ${city}<br> Votre facture vous a été envoyé a l'email suivant : ${email}
=======
//implentation des variables sur le html
confirm.innerHTML +=
` <h2> Votre commande n° ${numberCommand} d'un montant de : ${priceContact} € a bien éte validé</h2>
<p> Elle vous sera livré sous 5 jours ouvrés </p><p>au nom de : ${lastName} ${firstName} </p><p>a l'adresse suivante : ${adress} ${city}</p> <p>Votre facture vous a été envoyé a l'email suivant : ${email}</p>
>>>>>>> develop



`
