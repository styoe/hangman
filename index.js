// Hangman

// Step 1
// const word = 'Game';
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function wrongGuessCount(word, guesses) {
  let counter = 0;
  guesses.map(letter => {
    if (word.includes(letter)) {
      counter++;
    }
  });
  return counter;
}

// Step 2

function showGuess(word, guesses) {
  return word
    .split('')
    .map(letter => (guesses.includes(letter) ? letter : '_'))
    .join(' ');
}

// Step 3

function isWinner(word, guesses) {
  const wordToArray = word.split('');
  const filteredLetters = wordToArray.filter(letter => guesses.includes(letter));
  wordToArray.join('');
  filteredLetters.join('');

  return wordToArray.length === filteredLetters.length ? true : false;
}

function next(word, guesses) {
  Object.freeze(guesses);
  if (isWinner(word, guesses)) {
    console.log('you win');
  } else if (wrongGuessCount(word, guesses).lenght >= 6) {
    console.log('you lose');
  } else {
    rl.question('next letter? ', answer => {
      console.log('player wrote:', answer);
      const nextGuesses = [...guesses, answer];
      next(word, nextGuesses);
      console.log('show guess: ', showGuess(word, nextGuesses));
    });
  }
}

next('hello', []);

// console.log('show guess 1:', showGuess('hello', ['l']), 'should be:', '_ _ l l _');
// console.log('show guess 2:', showGuess('hello', ['l', 'a', 'e']), 'should be:', '_ e l l _');
// console.log('winner 1:', isWinner('hello', ['e', 'x']), 'should be:', false);
// console.log('winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']), 'should be:', true);
