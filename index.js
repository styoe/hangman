// Hangman

// Step 1
// const word = 'Game';
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// number of wrong guesses
function wrongGuessCount(word, guesses) {
  let counter = 0;
  guesses.map(letter => {
    if (word.includes(letter)) {
      counter++;
    }
  });
  return counter;
}

//display guess
function showGuess(word, guesses) {
  return word
    .split('')
    .map(letter => (guesses.includes(letter) ? letter : '_'))
    .join(' ');
}

//check for winner
function isWinner(word, guesses) {
  const wordToArray = word.split('');
  const filteredLetters = wordToArray.filter(letter => guesses.includes(letter));
  wordToArray.join('');
  filteredLetters.join('');

  return wordToArray.length === filteredLetters.length ? true : false;
}

// next function
function next(word, guesses) {
  let ammo = [];
  Object.freeze(guesses);
}

next('hello', []);
