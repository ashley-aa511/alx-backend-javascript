#!/usr/bin/node

// Import the readline module to handle user input
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the welcome message and prompt for the user's name
console.log('Welcome to Holberton School, what is your name?');

// Wait for the user to input their name
rl.question('', (name) => {
  // Display the user's input
  console.log(`Your name is: ${name}`);
  
  // Close the readline interface and display the closing message
  rl.close();
});

// Event listener for when the readline interface is closed
rl.on('close', () => {
  console.log('This important software is now closing');
});
