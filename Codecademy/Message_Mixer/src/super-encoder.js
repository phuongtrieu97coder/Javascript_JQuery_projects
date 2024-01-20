// Import the encryptors functions here.
const {caesarCipher,symbolCipher,reverseCipher} = require("./encryptors.js");

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  let caesar = caesarCipher(str,5);
  let symbol = symbolCipher(caesar);
  return reverseCipher(symbol);
}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
   let reverse = reverseCipher(str);
  let symbol = symbolCipher(reverse);
  return caesarCipher(symbol,-5);
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);