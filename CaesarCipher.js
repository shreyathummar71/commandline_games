//Get inputs from command line arguments
const args = process.argv.slice(2);
const phrase = args[0];
const shift = parseInt(args[1], 10);

//Define the Caesar Cipher function
function caesarCipher(phrase, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetSize = 26;
  let result = "";

  // Normalize the shift to ensure it's within the range of 0-25
  let normalizedShift = shift % alphabetSize;
  if (normalizedShift < 0) {
    normalizedShift += alphabetSize;
  }

  for (let i = 0; i < phrase.length; i++) {
    const char = phrase[i];
    const isUpperCase = char === char.toUpperCase();
    const lowerChar = char.toLowerCase();

    if (alphabet.includes(lowerChar)) {
      // Check condition for lowercase
      const currentIndex = alphabet.indexOf(lowerChar);
      const newIndex = (currentIndex + normalizedShift) % alphabetSize;
      let newChar = alphabet[newIndex];

      if (isUpperCase) {
        newChar = newChar.toUpperCase(); // Do uppercase if text or letter is uppercase
      }
      result = result + newChar;
    } else {
      result = result + char;
    }
  }

  return result;
}

// Encrypt the phrase using the Caesar Cipher function
const encryptedPhrase = caesarCipher(phrase, shift);
console.log(encryptedPhrase);
