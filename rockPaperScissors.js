const args = process.argv.slice(2);

// Converting user input to all lower case letters
const userInput = args[0].toLowerCase();

// Checking if input is valid, if not, return error message
if ( !( (userInput === "rock") || (userInput === "paper") || (userInput === "scissors") ) ) {
  return console.log(`Your input \"${userInput}\" is invalid. Please choose between \"rock\", \"paper\", or \"scissors\".`);
}

// Generating random numbers 0, 1, and, 2
let rnd = Math.floor(Math.random() * 3);
let computerChoice = "";

// Asigning random number rnd to one of the possible choices
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

// Skip checking the winner and exit script if both userInput and computerChoice are equal
if (userInput === computerChoice) {
  return console.log(
    `You chose ${userInput}. Computer also chose ${computerChoice}. It is a draw!`
  );
}

// Function deciding based on the userInput whether the computer wins (true/false)
let computerWins = function () {
  computerWins = true;

  // Handling just the cases in which the user wins and setting the variable to false in that case
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

// Function that prepares the output message and calls the computerWins function while doing so
const prepareOutputMsg = function () {
  if (computerWins()) {
    return `You chose ${userInput}. Computer chose ${computerChoice}. Computer wins!`;
  } else
    return `You chose ${userInput}. Computer chose ${computerChoice}. You win!`;
};

// Calling the prepareOutputMsg function and return its return value as a console output
return console.log(prepareOutputMsg());
