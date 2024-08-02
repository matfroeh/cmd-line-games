// English to Pig Latin Translator

const args = process.argv.slice(2);

// Fetching user input as an array with each word as a separate element
const rawUserInputArray = args;

// Format each word to lower case letters into new array *ToDO* undo formatting, information of upper or lower case needed later
let formattedUserInput = [];
rawUserInputArray.forEach((element) => {
  formattedUserInput.push(element.toLowerCase());
});
// console.log(formattedUserInput);

// *toDO* Function that takes a string (word) as input and transforms it to pig latin
let translatedWordToPigLatin = function (word) {
  translatedWordToPigLatin = "";

  switch (checkTypeOfWord(word)) {
    case "consonantPlusVowel":
      translatedWordToPigLatin = word.slice(1) + word.at(0) + "ay";
      break;
    case "consonantPlusConsonant":
      translatedWordToPigLatin = word.slice(2) + word.slice(0, 2) + "ay";
      break;
    case "vowel":
      translatedWordToPigLatin = word + "way";
      break;
    default:
      console.log("Error during translation.");
  }

  return translatedWordToPigLatin;
};

const regExVowel = /[aeiouy]/g;

// *toDo* Word Checker checks to which case the input word corresponds to
let checkTypeOfWord = function (word) {
  if (
    word.charAt(0).search(regExVowel) == -1 &&
    word.charAt(1).search(regExVowel) != -1
  ) {
    return "consonantPlusVowel";
  } else if (
    word.charAt(0).search(regExVowel) == -1 &&
    word.charAt(1).search(regExVowel) == -1
  ) {
    return "consonantPlusConsonant";
  } else if (word.charAt(0).search(regExVowel) != -1) {
    return "vowel";
  } else {
    console.log("Error. Word starts with irregular letters.");
    return -1;
  }
};

return console.log(translatedWordToPigLatin(formattedUserInput[0]));
