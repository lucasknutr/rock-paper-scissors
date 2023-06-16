let playerScore = 0;
let computerScore = 0;


function getComputerChoice () {
    let choiceNumber = Math.floor(Math.random() * 3);

    if (choiceNumber === 0) {
        choice = "Rock";
 
    }

    if (choiceNumber === 1) {
        choice = "Paper";
     

    }

    if (choiceNumber === 2) {
        choice = "Scissors";
        
    }

    return choice;
}

function getPlayerChoice () {
    let bruteAnswer = // ! IMPORTANT
    let postAnswer = bruteAnswer.toLowerCase();
    let answer = postAnswer[0].toUpperCase() + postAnswer.substring(1);
    return answer;
}

// let computerSelection = getComputerChoice();


function play (playerSelection, computerSelection) {
   
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();


    if (computerSelection === playerSelection) {
        alert("Tie. You and the computer choose " + playerSelection + "!");
    }

    if ((computerSelection === "Rock" && playerSelection === "Scissors") || 
    (computerSelection === "Scissors" && playerSelection === "Paper") || 
    (computerSelection === "Paper" && playerSelection === "Rock")) {
        alert("You lose. " + computerSelection + " beats " + playerSelection);
        computerScore++;
    }

    if ((computerSelection === "Rock" && playerSelection === "Paper") || 
    (computerSelection === "Scissors" && playerSelection === "Rock") || 
    (computerSelection === "Paper" && playerSelection === "Scissors")) {
        alert("You win! " + playerSelection + " beats " + computerSelection + "!");
        playerScore++;
    }

    return;

}

function game() {
 for (i = 0; playerScore < 5 && computerScore < 5; i++) {
    play();
 }
}

game();