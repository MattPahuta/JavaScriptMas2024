/* 
This Christmas, you’ve been tasked with running an anagram quiz at 
the family gathering.

You have been given a list of anagrams, but you suspect that some 
of the anagram pairs might be incorrect.

Your job is to write a JavaScript function to loop through the array
and filter out any pairs that aren’t actually anagrams.

For this challenge, spaces will be ignored, so "Be The Helm" would 
be considered a valid anagram of "Bethlehem".
*/

let anagrams = [
  ["Can Assault", "Santa Claus"], // true
  ["Refreshed Erudite Londoner", "Rudolf the Red Nose Reindeer"], // true
  ["Frosty The Snowman", "Honesty Warms Front"], // false
  ["Drastic Charms", "Christmas Cards"], // false
  ["Congress Liar", "Carol Singers"], // true
  ["The Tin Glints", "Silent Night"], // false
  ["Be The Helm", "Bethlehem"], // true
  ["Is Car Thieves", "Christmas Eve"] // false
];

function findAnagrams(array) {
  // sorting helper function
  const sortString = (str) => {
    return str.toLowerCase()
      .split('')
      .filter(char => char.trim() !== '')
      .sort()
      .join('')
  }
  // filter out non-anagram pairs
  return array.filter((stringArr) => {
    return sortString(stringArr[0]) === sortString(stringArr[1])
  })

}

console.log(findAnagrams(anagrams));