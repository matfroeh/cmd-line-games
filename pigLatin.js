// English to Pig Latin Translator

const args = process.argv.slice(2);

// Fetching user input as an array with each word as a separate element
const rawUserInputArray = args;

// Format each word to lower case letters into new array
let formattedUserInput = [];
rawUserInputArray.forEach((element) => {
  formattedUserInput.push(element.toLowerCase());
});
// console.log(formattedUserInput);

// *toDO* Function that takes a string (word) as input and transforms it to pig latin
let translateToPigLatin = function (word) {
  // *toDO* Code

  return translateToPigLatin;
};

const regExVowel = /[aeiouy]/g;

// *toDo* Word Checker checks to which case the input word corresponds to
let checkTypeOfWord = function (word) {
  // Starts with Consonant + Vowel
  if (
    word.charAt(0).search(regExVowel) == -1 &&
    word.charAt(0).search(regExVowel) != -1
  ) {
    return "consonantPlusVowel";
  } else if (
    word.charAt(0).search(regExVowel) == -1 &&
    word.charAt(0).search(regExVowel) != -1
  ) {
    return "consonantPlusConsonant";
  } else if (word.charAt(0).search(regExVowel) != -1) {
    return "vowel";
  } else {
    console.log("Error. Word starts with irregular letters.");
    return;
  }
};
