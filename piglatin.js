function checkVowel(text) {
  return ["a", "e", "i", "o", "u"].includes(text);
}

function piglatinTranslate(word) {
  if (checkVowel(word[0])) {
    return word + "ay";
  } else if (!checkVowel(word[0]) && checkVowel(word[1])) {
    return word.slice(1) + word[0] + "ay";
  } else {
    return word.slice(2) + word.slice(0, 2) + "ay";
  }
}

function translateSentance(sentance) {
  return sentance.split(" ").map(piglatinTranslate).join(" ");
}
const input = process.argv.slice(2).join(" ");

if (input) {
  console.log(translateSentance(input));
} else {
  console.log("Write anything for translate a phrase to Piglatin.");
}
