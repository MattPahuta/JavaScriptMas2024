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
const emojiCluesContainer = document.getElementById('emoji-clues-container')
const messageContainer = document.getElementById('message-container');
// current game data
const gameFilmsData = [...films]; // copy films array to work with during game
let currentFilm;
let availableGuesses = 3;

// console.log(gameFilmsData)

// get random film object from gameFilmsData
function getRandomFilm(filmsArray) {
  messageContainer.textContent = ''; // clear any messages

  if (filmsArray.length === 0) {
    messageContainer.textContent = "That's all folks!"
    console.log('Game over')
    // disable button?
  } else {
      console.log(filmsArray)
      const randomIndex = Math.floor(Math.random() * filmsArray.length);
      const randomFilm = filmsArray.splice(randomIndex, 1);
      currentFilm = randomFilm[0]; // set currentFilm 
      renderEmojiClues(currentFilm)
  }
}

// *** On page load *** //
// - call getRandomFilm(gameFilmsData)
getRandomFilm(gameFilmsData)
console.log(currentFilm)

// accept an array of emojis and add to DOM
function renderEmojiClues({ariaLabel, emoji}) { // destructure film in place
  // set aria-label attribute of emojiCluesContainer
  // render new set of emojis to DOM
  emojiCluesContainer.setAttribute('aria-label', ariaLabel)
  emojiCluesContainer.textContent = emoji.join(' ');
}



/*
- available guess count should reset to 3 for each new film

- If the player guesses correctly, the app should display a message saying "Correct!".Then, after a pause of 3 seconds, it should randomly select the next set of emoji clues and display them to the player.

- If the player’s guess is incorrect, the app should display a message saying “Incorrect! You have 2 more guesses remaining.”

- If the player fails to guess correctly on the next two attempts, the app should display a message saying, `The film was <Film Name Here>!`.After a pause of 3 seconds, it should randomly select a new set of emoji clues and display them to the player.
*/

// score user guess
function scoreSubmittedGuess(userGuess, filmTitle) {
  console.log('Current film title: ', filmTitle)
  console.log('User guess: ', userGuess)

  // if user guesses correctly:
  if (userGuess.toLowerCase().trim() === filmTitle.toLowerCase()) {
    availableGuesses = 3;
    messageContainer.textContent = `Correct! The movie was ${filmTitle}`
    // wait 3 seconds and get a new emoji clue
    setTimeout(() => {
      getRandomFilm(gameFilmsData);
    }, 3000)
  // if user guess is incorrect:
  } else {
    availableGuesses -= 1;
    console.log(`Incorrect. Guesses remaining: ${availableGuesses}.`)
    messageContainer.textContent = `Wrong. Guesses remaining: ${availableGuesses}`
  }

}

function handleGuessSubmit(e) {
  e.preventDefault();
  const userGuess = guessInput.value;
  scoreSubmittedGuess(userGuess, currentFilm.title)
  guessInput.value = '';

  if (availableGuesses === 0) {
    console.log('Sorry... rendering new emojis.')
    messageContainer.textContent = `Sorry, the film movie was ${currentFilm.title}`
    // wait 3 seconds and get a new emoji clue
    setTimeout(() => {
      getRandomFilm(gameFilmsData);
      messageContainer.textContent = '';
    }, 3000)
  }

}

guessForm.addEventListener('submit', handleGuessSubmit)