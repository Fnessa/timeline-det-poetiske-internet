
let currentLanguage = "en";
let validLanguages = ["en", "da", "de", "es"];

const en = {
    "head1" : "A journey through my life",
    "home" : "Home",
    "about" : "About this website",
    "welcomeText" : "Hi, this website is under construction. Feel free to test the buttons.",
    "start" : "Begin"
}
const da = {
    "head1" : "En tidsrejse gennem mit liv",
    "home" : "Hjem",
    "about" : "Om denne website",
    "start" : "Begynd"
}
const de = {
    "head1" : "Eine Zeitreise durch mein Leben",
    "home" : "Hauptseite",
    "about" : "Über diese website",
    "start" : "Anfangen"
}

function ready(){
    updateText();
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
    let textReference = eval(lang+"."+id)
    document.getElementById(id).innerHTML = textReference;
}
