let currentLanguage = "en";
let validLanguages = ["en", "da", "de", "es"];

const en = {
    "title" : "When I was a little shithead: 2005 - 2014"
}
const da = {
    "title" : "Før jeg vidste hvad politik er: 2005 - 2014"
}
const de = {
    "title" : "Als ich noch klein, aber schon größenwahnsinnig war: 2005 - 2014"
}
const es = {
    "title" : "Quando yo estaba más pequeño y más estupido: 2005 - 2014"
}

document.addEventListener("load", ready());
function ready(){
    changeLanguage("en");
}

function languageButton(){
    let currentIndex = validLanguages.indexOf(currentLanguage);
    if (currentIndex == validLanguages.length - 1){
        changeLanguage(validLanguages[0]);
    }
    else{
        changeLanguage(validLanguages[currentIndex + 1]);
    }
    console.log(currentIndex);
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
