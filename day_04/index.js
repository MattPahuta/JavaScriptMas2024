/*
You are going to build an app that challenges players to identify a Christmas Movie from some emoji 🍿 🎅 🎬. The players will have 3 guesses per movie.

For example, the emoji 🌇 💣 👮 ✈️ ️🔫  represent the film “Die Hard”, which everyone knows is the best Christmas movie of all time.

In data.js you have an array of Christmas movies with emoji and text for aria labels.

Your task is to build an app that meets these criteria:

- The app should present the player with a set of emoji selected at random from the array in data.js. 

- The player will input their guess.



- When all films in the array have been used, the player should see a message saying "That's all folks!".

- Each film should only be used once. There should be no repetition. 


Stretch Goals

- Use AI to decide if an answer is correct or incorrect. For example if the correct answer is "The Polar Express" but the player inputs "Polar Express" a straight comparison of the two strings will find that the player's answer was incorrect. AI could assess if there is sufficient similarity between the strings to judge it as correct. 

- Improve the UX by disabling the form/button when the game is over and during the pause between questions.
*/

import { films } from './data.js'

// Some useful elements
const guessForm = document.getElementById('guess-form');
const guessInput = document.getElementById('guess-input')
const messageContainer = document.getElementsByClassName('message-container')[0]
// const emojiCluesContainer = document.getElementsByClassName('emoji-clues-container')[0]
const emojiCluesContainer = document.getElementById('emoji-clues-container')

// current game data
const gameFilmsData = [...films]; // copy films array to work with during game
let playerGuess = '';
let currentFilm;
let availableGuessCount = 3;

console.log(gameFilmsData)

// get random film object from gameFilmsData
function getRandomFilm(filmsArray) {
  console.log(filmsArray)
  // random index
  const randomIndex = Math.floor(Math.random() * filmsArray.length);
  const randomFilm = filmsArray.splice(randomIndex, 1);
  let currentFilm = randomFilm[0];
  console.log(currentFilm)
  renderEmojiClues(currentFilm.emoji)
}

// *** On page load *** //
// - call getRandomFilm(gameFilmsData)


// accept an array of emojis and add to DOM
function renderEmojiClues(emojiArray) {
  // clear previous emojis from DOM
  emojiCluesContainer.textContent = '';
  // clear previous aria-label attribute
  emojiCluesContainer.setAttribute('aria-label', '');
  // set aria-label attribute of emojiCluesContainer
  // render new set of emojis to DOM
  emojiCluesContainer.textContent = emojiArray.join(' ');
}

getRandomFilm(gameFilmsData)

/*
- available guess count should reset to 3 for each new film

- If the player guesses correctly, the app should display a message saying "Correct!".Then, after a pause of 3 seconds, it should randomly select the next set of emoji clues and display them to the player.

- If the player’s guess is incorrect, the app should display a message saying “Incorrect! You have 2 more guesses remaining.”

- If the player fails to guess correctly on the next two attempts, the app should display a message saying, `The film was <Film Name Here>!`.After a pause of 3 seconds, it should randomly select a new set of emoji clues and display them to the player.
*/

// score user guess
function scoreSubmittedGuess(userGuess, filmTitle) {

}

function handleGuessSubmit(e) {
  e.preventDefault();
  console.log('guess submitted')
  guessInput.value = '';

}

guessForm.addEventListener('submit', handleGuessSubmit)