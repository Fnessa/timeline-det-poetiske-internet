
let currentLanguage = "en";
let validLanguages = ["en", "da", "de", "es"];

const en = {
    "head1" : "A journey through my life",
    "home" : "Home",
    "about" : "About this website",
    "welcomeText" : "Hello, press the button below to begin, although be careful, you won't be able to return until you've gone through the entirety.",
    "start" : "Begin",
    "aboutheader" : "About this website",
    "aboutText" : "This website was made during the workshop 'Det poetiske internet' (The poetic internet) at Roskilde University (RUC) from 30.09.2024 to 11.10.2024. <br> It is translated in the 4 languages I could somewhat reasonably claim I speak: English, Danish, German and Spanish, although I won't claim to speak any of them well, so expect many mistakes in all those languages, Spanish especially. <br> The default language on these pages will be set to the one I think fits best, so I encourage you to try to read the pages in their default language, but please use and hopefully appreciate my translations too, if you are interested."
}
const da = {
    "head1" : "En tidsrejse gennem mit liv",
    "home" : "Hjem",
    "about" : "Om denne website",
    "welcomeText" : "Tryk knappen nedenfor for at begynde. Men vær opmærksom på, at du ikke kan gå tilbage før du er igennem det hele.",
    "start" : "Begynd",
    "aboutheader" : "Om denne website",
    "aboutText" : "Denne website blev skabt under workshoppen 'Det poetiske internet' på RUC fra den 30.09.2024 til den 11.10.2024. <br> Den er oversat i de 4 sprog som jeg nogenlunde forstår: Engelsk, Dansk, Tysk og Spansk, selvom jeg ikke vil sige, at jeg taler nogen af dem særlig godt, så forvent at der er mange fejl i alle sprog, især Spansk. <br> Det forindstillede sprog vil blive indstillet til det sprog, som jeg synes passer bedst til siden, så jeg foreslår, at du prøver at læse siderne i det, men selvfølgelig brug og forhåbentlig værdsæt mine oversættelser hvis du er interesseret."

}
const de = {
    "head1" : "Eine Zeitreise durch mein Leben",
    "home" : "Hauptseite",
    "about" : "Über diese Seite",
    "welcomeText" : "Moinsen, benutz den Knopf unten um anzufangen. Du kannst jedoch nicht zurückkehren, bevor du mit allen Seiten durch bist.",
    "start" : "Anfangen",
    "aboutheader" : "Über diese website",
    "aboutText" : "Diese Internetseite wurde im Workshop 'Det poetiske internet' (Das poetische Internet) an der Universität Roskilde (RUC) von dem 30.09.2024 bis zum 11.10.2024 erschaffen. <br> Sie ist übersetzt in die 4 Sprachen, die ich irgendwie behaupten kann zu sprechen: Englisch, Dänisch, Deutsch und Spanisch, obwohl ich nicht behaupten würde, auch nur eine von ihnen gut zu Sprechen, also erwartet viele Fehler, vor allem in Spanisch. <br> Die Standardsprache der Seiten wird immer auf die in meiner Meinung am passendsten Sprache gestellt sein, deshalb schlage ich vor, die Seiten auf der voreingestellten Sprache zu lesen. Natürlich existieren die Übersetzungen jedoch auch, und ich freue mich auch darüber wenn diese genutzt werden."
}
const es = {
    "head1" : "Un viaje en el tiempo a través de mi vida",
    "home" : "Página de inicio",
    "about" : "Sobre este página",
    "welcomeText" : "Hola. Usa el botón para empezar. No puedes volver antes terminar todos los páginas.",
    "start" : "Empezar",
    "aboutheader" : "Sobre este página",
    "aboutText" : "Este página fue creado en el workshop 'Det poetiske internet' (La internet poética) en la Universidad de Roskilde (RUC) del 30.09.2024 al 11.10.2024. <br> Esta traducido en la 4 idiomas, que yo puedo decir sobre, que yo hablo: Inglés, Danés, Alemán y Español, aunque yo no digo, que les hablo bien. Esperar que hay muchas errores, especialmente en español. <br> La idioma predeterminado va a la idioma que yo creo es la idioma más adecuado, y yo recomendo que tu lees los páginas en sus idiomas predeterminados, pero también voy a estar feliz si tu usas los traducciones. <br> <br> (Lo siento, pero estaba enfermo, y no tenía energía para hacer traducciones en español.)"
}

document.addEventListener("load", ready());
function ready(){
    changeLanguage("en");
}

function start(){
    window.location.href = "page1.html";
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