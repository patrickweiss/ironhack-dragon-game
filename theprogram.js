/*
console.log("Hallo aus the program.js");

let playersString = "Dominik,Jürgen,Doreen,Stefan";



console.log(playersString);

let playersArray = playersString.split(",");
console.log(playersArray);

console.log(playersArray[2]);

console.log(playersArray.length);

console.log("erste Schleife");
for(let playersIndex = 0;playersIndex<playersArray.length;playersIndex++){
    console.log(playersArray[playersIndex]);
}
console.log("coole  Schleife mit i");

for(i in playersArray){
    console.log(playersArray[i]);
}

console.log("Der Spieler nach Doreen ist:");

for(let i in playersArray){
    console.log(typeof i);
    if(playersArray[i]==="Doreen"){
        let indexOfPlayerAfterDoreen = parseInt(i)+1;
        console.log(indexOfPlayerAfterDoreen);
        console.log(playersArray[indexOfPlayerAfterDoreen]);
    }
}

//JS | Data Types in JavaScript - Arrays

console.log("add player at the end with push");
playersArray.push("Heiko");
console.log(playersArray);

console.log("add player at the beginning with unshift");
playersArray.unshift("Yvonne");
console.log(playersArray);

console.log("remove players at a defined position");
playersArray.splice(2, 2);
console.log(playersArray);

console.log("remove a player at the end with pop");
playersArray.pop();
console.log(playersArray);

console.log("remove the first player with shift");
playersArray.shift();
console.log(playersArray);

console.log("even cooler loop than with i");
playersArray.forEach(
    function (player) {
        console.log(player);
    }
)

console.log("same as before with arrow function syntax");
playersArray.forEach(player => console.log(player));

console.log("if we need the index");
playersArray.forEach( (player,playerIndex) => console.log(`Index: ${playerIndex} Spieler:${player}`));


let playersDataTableAs2DArray  = [
    ["Name","e-mail"],
    ["Patrick","patrick@MediaStreamTrackEvent.com"],
    ["Marco","marco@marco.com"]
]

window.document.getElementById("ersteSpalte").innerText="was anderes";
*/

console.log("now we want to get data from the server: callback functions")
//here comes different callback function syntax



function generateHTMLFromData() {
    let data = "pretend this data came from the server";
    console.log("this data comes from the server: " + data);
    window.document.getElementById("ersteSpalte").innerText = data;
}

//let serverData=getserverData();
//generateHTMLFromData(serverData);

setTimeout(generateHTMLFromData, 2000);

console.log("We can generate the rest of the page, while waiting for the server reponse");
window.document.getElementById("gameTitle").innerText = "Eisenhack Drachen Spiel";

console.log("if we use this function only one time, we don't need to give it a name");

// ES5
setTimeout(
    function () {
        console.log("Best!");
    },
    3000
);

const timeoutId = setTimeout(
    () => {  console.log("could live with that"); },
    4000
);

const timeoutId1 = setTimeout(() => {
    console.log("don't like this");
}, 5000);

const timeoutId2 = setTimeout(
    () => {
        console.log("better");
    },
    6000
);

let anzahlAufrufe = 1;
const intervalId = setInterval(
    () => {
        console.log(anzahlAufrufe);
        anzahlAufrufe++;
        if (anzahlAufrufe > 10) {
            clearInterval(intervalId);
        }
    },
    500
);


let htmlGenerierenExpression = function(){
    console.log("this is a function expression")
}

htmlGenerierenExpression();


htmlGenerierenDeclaration();

function htmlGenerierenDeclaration(){
    console.log("this come from a function declaration");
}


