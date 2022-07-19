let playerScore = 0;
let cpuScore = 0; 


function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    
    if (choice === 0) {
        choice = "Rock";
    } else if (choice === 1) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("There are five rounds to this game of Rock, Paper, Scissors. Choose your weapon: ");
    playerSelection = playerSelection.toLowerCase();
    
    
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "Scissors") {
                console.log(`The computer chose ${computerSelection}.`);
                return ++playerScore;
            } else if (computerSelection === "Paper") {
                console.log(`The computer chose ${computerSelection}.`);
                return ++cpuScore;
            } else {
                console.log(`The computer chose ${computerSelection}.`);
                return;
            };
            break;

        case "paper":
            if (computerSelection === "Rock") {
                console.log(`The computer chose ${computerSelection}.`);
                return ++playerScore;
            } else if (computerSelection === "Scissors") {
                console.log(`The computer chose ${computerSelection}.`);
                return ++cpuScore;
            } else {
                console.log(`The computer chose ${computerSelection}.`);
                return;
            };
            break;

        case "scissors":
            if (computerSelection === "Paper") {
                console.log(`The computer chose ${computerSelection}.`);
                return ++playerScore;
            } else if (computerSelection === "Rock") {
                console.log(`The computer chose ${computerSelection}.`);
                return ++cpuScore;
            } else {
                console.log(`The computer chose ${computerSelection}.`);
                return;
            };
            break;
        default:
            console.log("What... what did you do? That wasn't one of the choices and you know it.");
    };
}

function game() {
    for (let i = 0; i < 5; i++) { 
        playRound();
        console.log(`Player Score: ${playerScore}\nComputer Score: ${cpuScore}`)
    }
    if (playerScore > cpuScore){
        console.log("YOU WON! YOU'RE AMAZING!");
    } else if (playerScore === cpuScore) {
        console.log("You tied. Not bad.");
    } else {
        console.log("I'm so sorry you lost. Try again though! Maybe you'll win.");
    }
}



game();