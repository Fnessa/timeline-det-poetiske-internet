let currentLanguage = "en";
let validLanguages = ["en", "da", "de", "es"];

const en = {
    
}
const da = {

}
const de = {

}

function ready(){
    changeLanguage("en")
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
