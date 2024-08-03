// Caesar Cipher

const args = process.argv.slice(2);

// User input is supposed to be a single string argument
const rawUserInputString = args[0];
const letterShift = parseInt(args[1]);

// Transform to all lower case letters and split word by word in array
const wordArray = rawUserInputString.toLowerCase().split(" ");

const letterArray = [..."abcdefghijklmnopqrstuvwxyz"];

// Function taking a single word as first parameter shifting each letter by the number of the second parameter returning shifted word
function shiftAllLetters(word, shift) {
  let shiftedWord = "";
  let currentCharCode = -1;

  // If user inputs a shift > |26|: stay at 0-26 range
  if (shift > Math.abs(26)) shift %= 26;

  for (let i = 0; i < word.length; i++) {
    currentCharCode = word.charCodeAt(i);

    // Loop to the start/end if new char code is outside of alphabet (assuming shift always <= |26|)
    if (currentCharCode + shift > 122) {
      shiftedWord += String.fromCharCode(currentCharCode + shift - 26);
    } else if (currentCharCode + shift < 97) {
      shiftedWord += String.fromCharCode(currentCharCode + shift + 26);
    } else {
      shiftedWord += String.fromCharCode(currentCharCode + shift);
    }
  }
  return shiftedWord;
}

