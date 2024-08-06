// English to Pig Latin Translator

const args = process.argv.slice(2);

// User input is supposed to be a single string argument
const rawUserInputString = args[0];
const formattedUserInput = rawUserInputString.split(" ");

// Regular Expression matches vowel - case isensitive
const regExVowel = /[aeiou]/gi;

// Word Checker checks to which case the input word corresponds to
const checkTypeOfWord = function (word) {
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

// Function that takes a string (word) as input and transforms it to pig latin
let translateWord = function (word) {
  wordTranslated = "";

  switch (checkTypeOfWord(word)) {
    case "consonantPlusVowel":
      wordTranslated = word.slice(1) + word.at(0) + "ay";
      break;
    case "consonantPlusConsonant":
      wordTranslated = word.slice(2) + word.slice(0, 2) + "ay";
      break;
    case "vowel":
      wordTranslated = word + "way";
      break;
    default:
      console.log("Error during translation.");
  }

  // Rearange the upper case letter in case the word started with one
  regExUpperCaseLetter = /[A-Z]/;
  if (wordTranslated.search(regExUpperCaseLetter) != -1) {
    wordTranslated = wordTranslated.toLowerCase();
    wordTranslated = wordTranslated.at(0).toUpperCase() + wordTranslated.slice(1);
  }
  return wordTranslated;
};

// Create translated user input by translating each word in formattedUserInput array
let translateText = function () {
  let textTranslated = "";

  formattedUserInput.forEach((element) => {
    textTranslated = textTranslated.concat(translateWord(element), " ");
  });
  return textTranslated;
};

return console.log(translateText());
