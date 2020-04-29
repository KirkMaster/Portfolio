let city = "Paris";
meteo(city)

let changeCity = document.querySelector('#changer');
changeCity.addEventListener('click', () => {
    city = prompt('Quelle ville souhaitez-vous voir ?');
    meteo(city);
});
function meteo(){

    const url =  'https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=1ca590614437b69dfcdc83f8e1e409c5&units=metric';

    let request = new XMLHttpRequest(); // Créer un objet
    request.open('GET', url) // Premier paramètre GET / POST; 2ème paramètre : l'url
    request.responseType = 'json'; // Nous attendons du JSON
    request.send();

    request.onload = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                let reponse = request.response; // on stocke la réponse
                let temps = reponse.main.temp;
                let actualCity = reponse.name;
                // console.log(temp);
                document.querySelector('#temperature_label').textContent = temps;
                document.querySelector('#ville').textContent = actualCity;

            }else{
                alert("Un problème est survenu, merci de revenir plus tard.");
            }
        }
        
    }
}

