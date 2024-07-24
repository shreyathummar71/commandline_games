// Function to determine if a character is a vowel
function checkVowel(text) {
  return ["a", "e", "i", "o", "u"].includes(text);
}

// Function to convert a word to Pig Latin
function piglatinTranslate(word) {
  if (checkVowel(word[0])) {
    return word + "way"; //Check if the first letter is a vowel
  } else if (!checkVowel(word[0]) && checkVowel(word[1])) {
    return word.slice(1) + word[0] + "ay"; //Check if the first letter is a consonant and the second letter is a vowel
  } else {
    return word.slice(2) + word.slice(0, 2) + "ay"; //Handle words starting with two consonants
  }
}

//function to process input and translate to Pig Latin
function translatPigLatin() {
  const input = process.argv.slice(2).join(" ");

  if (!input) {
    console.log("Please provide a phrase to translate.");
    return;
  }

  const words = input.split(" ");
  const translatedWords = words.map((word) => piglatinTranslate(word));
  const translatedPhrase = translatedWords.join(" ");

  console.log(translatedPhrase);
}

translatPigLatin();
