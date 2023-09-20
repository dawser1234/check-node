const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12, // Adjust the desired length of the password
    numbers: true, // Include numbers
    symbols: true, // Include symbols
    uppercase: true, // Include uppercase letters
    strict: true, // Ensure at least one of each character type
  });

  return password;
}

// Generate a password and log it to the console
const password = generateRandomPassword();
console.log('Generated Password:', password);
