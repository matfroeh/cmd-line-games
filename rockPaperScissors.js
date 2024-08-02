const args = process.argv.slice(2);

const userInput = args[0].toLowerCase();

if ( !( (userInput === "rock") || (userInput === "paper") || (userInput === "scissors") ) ) {
  return console.log(`Your input \"${userInput}\" is invalid. Please choose between \"rock\", \"paper\", or \"scissors\".`);
}

let rnd = Math.floor(Math.random() * 3);
let computerChoice = "";

switch (rnd) {
  case 0:
    computerChoice = "rock";
    break;
  case 1:
    computerChoice = "paper";
    break;
  case 2:
    computerChoice = "scissors";
    break;
  default:
    console.log("Error during generating the computer choice.");
}

if (userInput === computerChoice) {
  return console.log(
    `You chose ${userInput}. Computer also chose ${computerChoice}. It is a draw!`
  );
}

let computerWins = function () {
  computerWins = true;

  switch (computerChoice) {
    case "rock":
      if (userInput === "paper") computerWins = false;
      break;
    case "paper":
      if (userInput === "scissors") computerWins = false;
      break
    case "scissors":
      if (userInput === "rock") computerWins = false;
      break;
    default:
      console.log("Error evaluating the winner.");
  }
  return computerWins;
};

const prepareOutputMsg = function () {
  if (computerWins()) {
    return `You chose ${userInput}. Computer chose ${computerChoice}. Computer wins!`;
  } else
    return `You chose ${userInput}. Computer chose ${computerChoice}. You win!`;
};

return console.log(prepareOutputMsg());
