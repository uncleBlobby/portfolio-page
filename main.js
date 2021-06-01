let introString = "Thanks for dropping by.  My name is \nDustin.  I am a web developer and \nfront-end engineer, proficient in \nHTML / CSS and Javascript.\n\n" + 
                  "Please feel free to have a look around. \n\nCheck out some of my projects, read a bit more about me, and connect."

let introductionTextHandle = document.getElementById("introductionText");

let arrayString = [];

let arrayToBuild = [];

let builtString = "";

//split introString into an array of characters

function splitIntroString() {

    arrayString = introString.split("");

}
splitIntroString();

function setIntroText() {
    builtString = arrayString.join("");
    introductionTextHandle.innerText = builtString;
    console.log("building string");
}

//setIntroText();

function buildOutputString() {
    for(let i = 0; i < arrayString.length; i++){
        writeString(i)
            /*
        arrayToBuild[i] = arrayString[i];
        builtString = arrayToBuild.join("");
        console.log(builtString);
        introductionTextHandle.innerText = builtString;
        */
        
    }
}

function writeString(i) {
    setTimeout(function() {
        arrayToBuild[i] = arrayString[i];
        builtString = arrayToBuild.join("");
        //console.log(builtString);
        introductionTextHandle.innerText = builtString; 
    }, 75 * i)
}

setTimeout(function(){ buildOutputString(); }, 4000);
