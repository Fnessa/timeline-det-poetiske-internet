document.getElementById("myCheckBox").addEventListener("change", function(e){
    console.log("a")
    if (document.getElementById("myCheckBox").checked){
        console.log("b")
        document.getElementById("box").style.backgroundColor = "red";
    }
    else{
        document.getElementById("box").style.backgroundColor = "blue";
    }
    });