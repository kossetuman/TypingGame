'use strict';

function setWord() {
  word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
  target.textContent = word;
  count = 0;
}

let word;
let count = 0;
let startTime;
let isPlaying = false;
const target = document.getElementById('target');
const words = [
  'red',
  'world',
  'hello',
  'blue',
];

document.addEventListener('click', () => {
  if (isPlaying === true) {
    return;
  }
  
  isPlaying = true;
  startTime = Date.now();
  setWord();
})

document.addEventListener('keydown', (e) => {
  if (e.key !== word[count]) {
    return;
  }
  count++;
  target.textContent = '_'.repeat(count) + word.substring(count);

  if (count === word.length && words.length === 0) {
    const resultTime = ((Date.now() - startTime) / 1000).toFixed(2);
    const second = document.getElementById('finish-second');
    second.textContent = `Finished! ${resultTime} seconds!`;
    return;
  }

  if (count === word.length) {
    setWord();
  }

  

})
