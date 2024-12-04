/*  Santas Emoji Hack!

During Christmas, Santa wants to ban negative emojis, so when people
use negative emoji shortcodes, he wants positive emojis to appear instead.

In other words, :angry: should result in 🎁 instead of 😠.


*/

const hackedEmojis = {
  "angry": "🎁",   // 😠
  "thumbsdown": "👏",   // 👎  
  "man_facepalming": "🎅",   // 🤦‍♂️
  "cry": "‍😄",   // 😭
  "puke": "🤩"    // 🤮
}


/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, check if it exists in the hackedEmojis object, 
and replace it with the corresponding emoji. If not, return the original word.


Example input: ":cry:"
Example output: ‍😄

*/


function emojifyWord(word) {
  if (word.startsWith(':') && word.endsWith(':')) {
    const emojiWord = word.slice(1, -1);
    if (hackedEmojis[emojiWord]) {
      return hackedEmojis[emojiWord]
    }
  }
  return word;
}

console.log(emojifyWord(":cry:"));
console.log(emojifyWord(":angry:"));
console.log(emojifyWord(":sad:"));

/* 2. Write a function to find any emoji shortcodes in a phrase.
Use your emojify function from the previous exercise!

Example input: "Just read your article :thumbsdown:"
Example output: "Just read your article 👏"
*/

function emojifyPhrase(phrase) {
  return phrase.split(' ').map(word => {
    return emojifyWord(word)
  }).join(' ');
}
console.log(emojifyPhrase("Just read your article :thumbsdown:"));
console.log(emojifyPhrase("Those shoes :puke:"));


// Stretch goal: don't just replace the shortcodes, but also
// any emojis are added directly to the text.