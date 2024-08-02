const args = process.argv.slice(2);

const userInput = args[0].toLowerCase();

let rnd = Math.floor(Math.random() * 3);

let computerChoice = '';

switch (rnd) {
    case 0:
        computerChoice = 'rock';
        break;
    case 1:
        computerChoice = 'paper';
        break;
    case 2:
        computerChoice = 'scissors';
        break;
    default:
        console.log('Error during generating the computer choice.');
}

return console.log(userInput);