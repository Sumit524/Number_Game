let computerguess;
let userguess = [];

let UserNumberupdate;
let userinput;
let Attmpt=0;

function init() {
    computerguess = Math.floor(Math.random() * 100);
    console.log(computerguess);
}

function startgame(maxAttempts) {
    maxguess = maxAttempts;
    window.location.href = "NewGame.html";
}

function Easymode() {
    maxguess = 10;
    startgame(10);
}

function Hardmode() {
    maxguess =5;
    startgame(5);
}

 
function compareGuess() {
    const usernumber = Number(userinput.value);
    userguess = [...userguess, usernumber];
    document.getElementsByClassName("Guesses")[0].innerHTML = userguess.join(", ");
    const resultText = document.getElementById("resultText");
    
    
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
}



window.onload = function () {
    init();
    UserNumberupdate = document.getElementsByClassName("Guess")[0];
    userinput = document.getElementById("numberInput");
    userinput.placeholder = "Enter your Number";

    const easyButton = document.querySelector(".Easy");
    easyButton.addEventListener("click", Easymode);

    const hardButton = document.querySelector(".Hard");
    hardButton.addEventListener("click", Hardmode);
};
