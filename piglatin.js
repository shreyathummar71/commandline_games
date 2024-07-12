function checkVowel(text) {
  return ["a", "e", "i", "o", "u"].includes(text);
}

function piglatinTranslate(word) {
  if (checkVowel(word[0])) {
    return word + "ay"; //Check if the first letter is a vowel
  } else if (!checkVowel(word[0]) && checkVowel(word[1])) {
    return word.slice(1) + word[0] + "ay"; //Check if the first letter is a consonant and the second letter is a vowel
  } else {
    return word.slice(2) + word.slice(0, 2) + "ay"; //Handle words starting with two consonants
  }
}

//Function for translating
function translateSentance(sentance) {
  return sentance.split(" ").map(piglatinTranslate).join(" ");
}
const input = process.argv.slice(2).join(" ");

if (input) {
  console.log(translateSentance(input));
} else {
  console.log("Write anything for translate a phrase into Piglatin.");
}
