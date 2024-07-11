// Step 1: Get inputs from command line arguments
const args = process.argv.slice(2);
const phrase = args[0];
const shift = parseInt(args[1], 10); // Ensure to specify base 10 for parseInt

// Step 2: Define the Caesar Cipher function
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
      const currentIndex = alphabet.indexOf(lowerChar);
      const newIndex = (currentIndex + normalizedShift) % alphabetSize;
      let newChar = alphabet[newIndex];

      if (isUpperCase) {
        newChar = newChar.toUpperCase();
      }
      result = result + newChar;
    } else {
      result = result + char;
    }
  }

  return result;
}

// Step 3: Encrypt the phrase using the Caesar Cipher function
const encryptedPhrase = caesarCipher(phrase, shift);

// Step 4: Output the encrypted phrase to the console
console.log(encryptedPhrase);
