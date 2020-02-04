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
  
  // Znaci ovdje ti pokupi novi entry od playera
  rl.question('next letter? ', answer => {
      console.log('Player chose:', answer);
      if (isWinner(word, guesses)) {
        console.log('YOU WIN !!!');
      } else if (wrongGuessCount(word, ammo) >= 6) {
        console.log('"YOU LOSE!!!');
      } else {
        const nextGuesses = [...guesses, answer];
        next(word, nextGuesses);
        console.log('show guess: ', showGuess(word, nextGuesses));
      }
    });
}

// next function
/*
function next(word, guesses) {
  let ammo = [];
  Object.freeze(guesses);
  if (isWinner(word, guesses)) {
    console.log('YOU WIN !!!');
  } else if (wrongGuessCount(word, ammo) >= 6) {
    console.log('"YOU LOSE!!!');
  } else {
    rl.question('next letter? ', answer => {
      console.log('Player chose:', answer);
      const nextGuesses = [...guesses, answer];

      next(word, nextGuesses);
      console.log('show guess: ', showGuess(word, nextGuesses));
    });
  }
}
*/

next('hello', []);
