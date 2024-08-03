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

console.log(shiftAllLetters("xyz", -26));

// console.log(letterArray[1 % letterArray.length]);
// console.log(letterArray.indexOf("k"));

// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);

// let newChar = char + 3; // K
// let newString = String.fromCharCode(char + 3);
// console.log(newString);
