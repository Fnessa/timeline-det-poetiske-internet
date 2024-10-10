let currentLanguage = "de";
let validLanguages = ["en", "da", "de"];

const en = {
    "title" : "My obsession with animals: 2005 - 2014",
    "mainText" : "The first years of my life, my media use was defined mostly by my parents. I quickly became interested in nature, especially animals. My mom often tells me how I used to ask her to tell me about the animals in Africa, but she quickly became unable to tell me anything new, so I got tons of books about animals. I became a big fan of Andreas Kieling, a german nature documentarian, who among other things made lots of documentaries about grizzly bears in Alaska. <br> A big thing in my life during that time was the german childrens tv show Die Sendung mit der Maus, from the west german public broadcasting service WDR. The show features both fictional stories (Lachgeschichten) and small documentaries about various subjects (Sachgeschichten)."
}
const da = {
    "title" : "Min fascination med dyr: 2005 - 2014",
    "mainText" : "De første år af mit liv var min mediekonsum mest defineret af mine forældre. Jeg blev hurtig interesseret i naturen, især dyr. Min mor fortæller ofte om hvordan jeg blev ved med at spørge hende, om hun kan fortælle mig om dyrene i Afrika, men hun kom hurtig til at fortælle om alt hun vidste om dyrene i Afrika, så i stedet for fik jeg mange bøger. Jeg blev en stor fan af Andreas Kieling, en tysk naturdokumentarist, som lavede mange dokumentarer om grizzlybjørn i Alaska. <br> Jeg har også set meget af den tyske børneserie Die Sendung mit der Maus, fra den vesttyske offentlige tv og radiovirkshed WDR. Serien indeholder både korte fiktive historier (Lachgeschichten) og små dokumentarer om forskellige emner (Sachgeschichten)."
}
const de = {
    "title" : "Meine Faszination mit Tieren: 2005 - 2014",
    "mainText" : "In den ersten Jahren meines Lebens war mein Medienkonsum hauptsächlich von meinen Eltern bestimmt. Ich habe mich sehr schnell für Natur, insbesondere Tiere interessiert. Meine Mutter erzählt mir oft, wie ich sie gefragt habe, ob sie mir etwas von den Tieren in Afrika erzählen kann. Jedoch reichte ihr Wissen schnell nicht aus, sodass ich schnell viele Bücher über Tiere bekam. Ich wurde schnell Fan von Andreas Kieling, einem Naturfilmer, der unter anderem Filme über die Grizzlybären in Alaska gemacht hat. <br> Ich habe außerdem sehr viel Die Sendung mit der Maus gesehen, eine deutsche Kinderserie vom WDR, die sowohl kurze fiktive Erzählungen enthält (Lachgeschichten), als auch kurze Dokus über verschiedene Themen (Sachgeschichten)."

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
