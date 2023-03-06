let computerWins = 0;
let userWins = 0;
const playRound = (computerInput, userInput) => {  
  console.log(`computer: ${computerInput}\nuser: ${userInput}`);
  if (computerInput === userInput) {
    computerWins++;
    userWins++;
    console.log("It's a tie");
  }
  if (computerInput === 'rock' && userInput === 'paper') {
    userWins++;
    console.log("You win!, paper beats rock");
  }
  if (computerInput === 'rock' && userInput === 'scissors') {
    computerWins++;
    console.log("You lose!, rock beats scissors");
  }
  if (computerInput === 'paper' && userInput === 'rock') {
    computerWins++
    console.log("You lose!, paper beats rock");
  }
  if (computerInput === 'paper' && userInput === 'scissors') {
    userWins++;
    console.log("You win!, scissors beats paper");
  }
  if (computerInput === 'scissors' && userInput === 'rock') {
    userWins++;
    console.log("You win!, rock beats scissors");
  }
  if (computerInput === 'scissors' && userInput === 'paper') {
    computerWins++
    console.log("You lose!, scissors beats paper");
  }
}

const game = () => {
  for (let i = 0; i < 5; i++) {
    let getUserChoice = prompt("Please type your option:\n* rock\n* paper\n* scissors");
    getUserChoice = getUserChoice.toLowerCase();
    
    let choice = ['rock', 'paper', 'scissors'];
    let getComputerChoice = choice[Math.floor(Math.random() * 3)];
    
    playRound(getComputerChoice, getUserChoice);
  }
  
  let resutl = (userWins > computerWins) ? "You won!" : (userWins < computerWins) ? "You lost!" : "It's a tie, play again!";
  console.log(`computer: ${computerWins}\nuser: ${userWins}\n${resutl}`);
}

game();
