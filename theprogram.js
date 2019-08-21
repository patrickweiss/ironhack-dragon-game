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

let playersArray = ["Patrick","Marco","Stefan"];

let playerPatrickObject = ["Patrick","patrick@saw-office"]
    vorname:"Patrick",
    e-mail:"patrick@saw-office"
};

let playersDataTableAs2DArray  = [
    ["Name","e-mail"],
    ["Patrick","patrick@MediaStreamTrackEvent.com"],
    ["Marco","marco@marco.com"]
]

window.document.getElementById("ersteSpalte").innerHTML="was anderes";


SpreadSheet.getData("Person");