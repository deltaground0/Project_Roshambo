function getComputerChoice () {
    let choice = Math.round(Math.random() * 100);
    
    if (choice >= 66) {
        choice = "Rock";
    } else if (choice >= 33) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

function practice(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Choose your weapon: ");
    playerSelection = playerSelection.toLowerCase();
    
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "Rock") {
                console.log(`The computer chose ${computerSelection}.You tied. Not bad.`);
            } else if (computerSelection === "Paper") {
                console.log("I'm so sorry you lost. The computer chose ${computerSelection}. Try again though! Maybe you'll win.");
            } else {
                console.log(`YOU WON! YOU'RE AMAZING! The computer chose ${computerSelection}!`);
            };
            break;

        case "paper":
            if (computerSelection === "Paper") {
                console.log(`The computer chose ${computerSelection}.You tied. Not bad.`);
            } else if (computerSelection === "Scissors") {
                console.log("I'm so sorry you lost. The computer chose ${computerSelection}. Try again though! Maybe you'll win.");
            } else {
                console.log(`YOU WON! YOU'RE AMAZING! The computer chose ${computerSelection}!`);
            };
            break;

        case "scissors":
            if (computerSelection === "Scissors") {
                console.log(`The computer chose ${computerSelection}.You tied. Not bad.`);
            } else if (computerSelection === "Rock") {
                console.log("I'm so sorry you lost. The computer chose ${computerSelection}. Try again though! Maybe you'll win.");
            } else {
                console.log(`YOU WON! YOU'RE AMAZING! The computer chose ${computerSelection}!`);
            };
            break;
        default:
            console.log("What... what did you do?");
    }
}
practice();