let button = document.querySelector('#mode');
let span = document.querySelector('span');

if (localStorage.getItem('theme')){
    if(localStorage.getItem('theme') == 'dark'){
        darkMode();
    }
}

button.addEventListener('click', () => {

    if(document.body.classList.contains('dark')){
        // Light mode
        document.body.className = '';
        span.textContent = 'Thème sombre';
        localStorage.setItem('theme', 'light');

    }else{
        // Dark mode
        darkMode();
    }
});

function darkMode(){

    document.body.className = 'dark';
    span.textContent = 'Thème clair';
    localStorage.setItem('theme', 'dark');

}