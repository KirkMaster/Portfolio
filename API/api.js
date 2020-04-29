// API : Application Programming Interface

// Récupérer données (prix bitcoin) ******

// const url =  'https://blockchain.info/ticker';

// function getPrice(){
// // Créer une requête
// let request = new XMLHttpRequest(); // Créer un objet
// request.open('GET', url) // Premier paramètre GET / POST; 2ème paramètre : l'url
// request.responseType = 'json'; // Nous attendons du JSON
// request.send(); // nous envoyons notre requête

// // Dès qu'on reçoit une réponse, cette fonction est executée
//     request.onload = function(){
//         if (request.readyState === XMLHttpRequest.DONE){
//             if(request.status === 200){
//                 let reponse = request.response; // on stocke la réponse
//                 let euroPrice = reponse.EUR.last, dollarPrice = reponse.USD.last, jpyPrice = reponse.JPY.last;
//                 document.querySelector('#price_eur').textContent = euroPrice;
//                 document.querySelector('#price_dollar').textContent = dollarPrice;
//                 document.querySelector('#price_jpy').textContent = jpyPrice;
//             }else{
//                 alert("Un problème est survenu, merci de revenir plus tard.");
//             }
//         }
//     }
    
// }

// setInterval(getPrice, 1000);

// Envoyer des données ******

// const url = 'https://lesoublisdelinfo.com/api.php';

// let request = new XMLHttpRequest();

// GET
// request.open('GET', url);
// request.responseType = 'json';
// request.send();

// POST
// request.open('POST', url);
// request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// request.responseType = 'json';
// request.send('prenom=Kevin');

// request.onload = function() {
//     if(request.readyState === XMLHttpRequest.DONE){
//         if(request.status === 200){
//             let reponse = request.response;
//             console.log(reponse);
//         }
//         else{
//             alert("Un problème est survenu, merci de revenir plus tard.");
//         }
//     }
// }