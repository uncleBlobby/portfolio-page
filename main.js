let introString = "Thanks for dropping by.  My name is \nDustin.  I am a web developer and \nfront-end engineer, proficient in \nHTML / CSS and Javascript.\n\n" + 
                  "Please feel free to have a look around. \n\nCheck out some of my projects, read a \nbit more about me, and connect."

let introductionTextHandle = document.getElementById("introductionText");
let arrayString = [];
let arrayToBuild = [];
let builtString = "";
let writtenCharCounter = 0;

let projectsLinkBTN = document.getElementById("projectsLinkBTN");
let aboutLinkBTN = document.getElementById("aboutLinkBTN");
let connectLinkBTN = document.getElementById("connectLinkBTN");

let header = document.getElementById("header");
    
function drawHeaderText () {
    header.innerText = "://dustin.buzz";
}

drawHeaderText();

//console.log(headerText);


//split introString into an array of characters
    //should make into IIFE
function splitIntroString() {

    arrayString = introString.split("");

}
splitIntroString();

//useless, can delete ???
function setIntroText() {
    builtString = arrayString.join("");
    introductionTextHandle.innerText = builtString;
    console.log("building string");
}

//setIntroText();

function buildOutputString() {
    for(let i = 0; i < arrayString.length; i++){
        writeString(i)
        
    }
}

function writeString(i) {
    setTimeout(function() {
        arrayToBuild[i] = arrayString[i];
        builtString = arrayToBuild.join("");
        //console.log(builtString);
        introductionTextHandle.innerText = builtString;
        writtenCharCounter++;
        //console.log(writtenCharCounter);
    }, 72 * i)
}

setTimeout(function(){ buildOutputString(); }, 2000);


function spawnLinkButtons() {
    if(screen.width > 500){
    projectsLinkBTN.style.visibility = "visible";
    aboutLinkBTN.style.visibility    = "visible"; 
    connectLinkBTN.style.visibility  = "visible";
    }
}


spawnLinkButtons();

console.log(screen.width);

