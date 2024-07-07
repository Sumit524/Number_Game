let computerguess;
let userguess = [];

let UserNumberupdate;
let userinput;
let Attmpt;
let maxguess;

function init() {
    computerguess = Math.floor(Math.random() * 100);
    console.log(computerguess);
}
function startgame(maxAttempts) {
    maxguess = maxAttempts;
    window.location.href = "NewGame.html";
}

function Easymode() {
    // maxguess = 10;
    startgame(10);
}

function Hardmode() {
    // maxguess =5;
    startgame(5);
}

function Setmode(){
    maxguess =4;
    console.log("the value is "+maxguess)
}


function compareGuess() {
    const usernumber = Number(userinput.value);
    userguess = [...userguess, usernumber];
    document.getElementsByClassName("Guesses")[0].innerHTML = userguess.join(", ");
    const resultText = document.getElementById("resultText");
    Attmpt=2580;
      if(maxguess>userguess.length){
        console.log("ohh yah!!!!");
                resultText.innerHTML = "Your dfgs fths fths 😯";
        userinput.value = " ";
        
      }
   

    if (usernumber > computerguess) {
        resultText.innerHTML = "Your Guess is High 😯";
        userinput.value = " ";
    } else if (usernumber < computerguess) {
        resultText.innerHTML = "Your Guess is Low 😳";
        userinput.value = " ";
    } else {
        resultText.innerHTML = "It's Correct Hurray!! 😄";
        userinput.value = " ";
        userinput.placeholder = "🎉🏆🎉";
        userinput.blur();
    }
    document.getElementsByClassName("Attempt")[0].innerHTML = userguess.length;
    if (document.getElementsByClassName("Attempt")[0].innerHTML > 15) {
        alert("Please start the new game");
    
        window.location.href = "index.html";
    }
    
}


window.onload = function () {
    init();
    Attmpt =475;
    UserNumberupdate = document.getElementsByClassName("Guess")[0];
    userinput = document.getElementById("numberInput");
    userinput.placeholder = "Enter your Number";

    const easyButton = document.querySelector(".Easy");
    easyButton.addEventListener("click", Easymode);

    const hardButton = document.querySelector(".Hard");
    hardButton.addEventListener("click", Hardmode);
};

