// Hangman

// Step 1
const word = 'Game';
const guessedLetters = ['G', 'a'];

function wrongGuessCount(word, guesses) {
  let counter = 0;
  guesses.forEach(letter => {
    if (word.includes(letter)) {
      counter++;
    }
  });
  return counter;
}

const x = wrongGuessCount(word, guessedLetters);
console.log(x);

// Step 2

function showGuess(word, guesses) {
  const x = word.split('');
  const arr = [];
  x.forEach(letter => {
    if (guesses.includes(letter)) {
      arr.push(letter);
    } else {
      arr.push('_');
    }
  });
  return arr.join(' ');
}
console.log('show guess 1:', showGuess('hello', ['l']), 'should be:', '_ _ l l _');
console.log('show guess 2:', showGuess('hello', ['l', 'a', 'e']), 'should be:', '_ e l l _');

// Step 3

console.log(isWinner('qwer', ['q', 'e', 'w', 'r']));
// console.log('winner 1:', isWinner('hello', ['e', 'x']), 'should be:', false);
// console.log('winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']), 'should be:', true);
