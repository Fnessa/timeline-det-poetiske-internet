
let currentLanguage = "en";
let validLanguages = ["en", "da", "de", "es"];

const en = {
    "head1" : "A journey through my life",
    "home" : "Home",
    "about" : "About this website",
    "welcomeText" : "Hi, this website is under construction. Feel free to test the buttons.",
    "start" : "Begin",
    "aboutheader" : "About this website",
    "aboutText" : "This website was made during the workshop 'Det poetiske internet' at RUC from 30.09.2024 to 11.10.2024"
}
const da = {
    "head1" : "En tidsrejse gennem mit liv",
    "home" : "Hjem",
    "about" : "Om denne website",
    "welcomeText" : "Hi.",
    "start" : "Begynd",
    "aboutheader" : "Om denne website"
}
const de = {
    "head1" : "Eine Zeitreise durch mein Leben",
    "home" : "Hauptseite",
    "about" : "Über diese website",
    "welcomeText" : "Hi.",
    "start" : "Anfangen",
    "aboutheader" : "Über diese website"
}
const es = {
    "head1" : "Un viaje en el tiempo a través de mi vida",
    "home" : "Página de inicio",
    "about" : "Sobre este página",
    "welcomeText" : "Hola. Lo siento, mi español no es bueno, pero yo quiero intentar traducir este página en español.",
    "start" : "Empezar",
    "aboutheader" : "Sobre este página"
}

document.addEventListener("load", ready());
function ready(){
    changeLanguage("en");
}

function start(){
    window.location.href = "page1/pagedefault.html";
}

function changeLanguage(language){
    if (validLanguages.includes(language) != -1){
    currentLanguage = language;
    }
    for (key in eval(currentLanguage)){
        setText(key, currentLanguage);
    }
}

function setText(id, lang){
    if(document.getElementById(id) != null && eval(lang+"."+id) != null){
        document.getElementById(id).innerHTML = eval(lang+"."+id);
    }
    
    else{
        validLanguages.forEach(language => {
            if (eval(language+"."+id) != null && document.getElementById(id) != null){
                document.getElementById(id).innerHTML = eval(language+"."+id);
            }
            else{
                return;
            }
        });
        console.warn(id+" is not a valid id corresponding to an element on the page or there is no corresponding string in the selected language")
    }
}