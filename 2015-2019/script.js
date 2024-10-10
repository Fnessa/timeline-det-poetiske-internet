let currentLanguage = "en";
let validLanguages = ["en", "da", "de", "es"];

const en = {
    "title" : "Minecraft, nothing else: 2015-2019",
    "mainText" : "I first got into Minecraft after hearing people talk about it at school. Knowing nothing about games, or software in general, I asked my parents to buy me Minecraft Pocket Edition. At that time, the phone version was not even close to the Minecraft version everyone was talking about, as I found out when I tried to build a portal to enter an alternate dimension, the Nether, and it did not activate. I did have a lot of fun with it though, and over the years i played a lot of different versions of the game. I remember helping my dad with renovations on the house, and getting the Minecraft windows 10 edition as a reward, which enabled me, my siblings, and later on my dad to be able to play together. We played a lot in a single world. I still cling onto the corrupted file of that world, years after we stopped playing."
}
const da = {
    "title" : "Minecraft, intet andet: 2015-2019",
    "mainText" : "Jeg startede med at spille Minecraft efter at have hørt om det på skolegården. Fordi jeg vidste ingenting om spil, eller software generelt, spurgte jeg mine forældre om Minecraft Pocket Edition. Dengang var denne version ikke engang tæt på at være som den version de andre havde, noget som jeg fandt ud, da jeg prøvede at bygge et portal til en anden dimension, Netheren. Jeg elskede Minecraft alligevel, og over årene spillede jeg en masse forskellige versioner. Jeg husker, at jeg hjalp min far med renoveringer på huset, og fik Minecraft windows 10 edition, som gjorde det muligt for mig, mine søskende og senere også min far at spille sammen. Vi spillede en hel masse i en enkelt verden. Jeg opbevarer den korrumperede fil af denne verden, år efter vi stoppede at spille i den."

}
const de = {
    "title" : "Minecraft, nichts anderes: 2015-2019",
    "mainText" : "Ich habe erst angefangen Minecraft zu spielen, als ich auf dem Schulhof davon hörte. Weil ich damals nichts über Spiele, oder Software im allgemeinen wusste, habe ich meine Eltern um die Minecraft Pocked Edition gebeten. Damals war diese Version noch nicht einmal annähernd an der, die die anderen gespielt hatten. Das habe ich schnell gemerkt, als ich "

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
