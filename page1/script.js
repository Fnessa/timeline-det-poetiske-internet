let currentLanguage = "en";
let validLanguages = ["en", "da", "de", "es"];

const en = {

}
const da = {

}
const de = {

}

document.addEventListener("load", ready());
function ready(){
    changeLanguage("en");
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
