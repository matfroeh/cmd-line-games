// English to Pig Latin Translator

const args = process.argv.slice(2);

// Fetching user input as an array with each word as a separate element
const rawUserInputArray = args;

// Format each word to lower case letters into new array
let formattedUserInput = [];
rawUserInputArray.forEach(element => {
  formattedUserInput.push(element.toLowerCase());
});
console.log(formattedUserInput);

// *toDO* Function that takes a string (word) as input and transforms it to pig latin
let translateToPigLatin = function (word) {
  // *toDO* Code

  return translateToPigLatin;
};

// *toDo* Word Checker checks to which case the input word corresponds to
let checkTypeOfWord = function (word) {
  if (word.CharAt(0) !== ("a") )
    return;
};
