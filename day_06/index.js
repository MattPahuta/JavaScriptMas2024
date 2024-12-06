const snowGlobe = document.querySelector('.snow-globe');
/* 
Challenge:
1. Write JavaScript to create a snowflake and make it fall inside the snow globe. The snowflake should have a random starting position, animation duration, and size.
2. See index.css
*/
function createSnowflake() {
  const randomDuration = Math.floor(Math.random() * 100);
  const snowflake = document.createElement('div');
  const snowflakeSize = `${Math.floor(Math.random() * 11 + 11)}px`;
  snowflake.classList.add('snowflake');
  snowflake.style.fontSize = snowflakeSize
  randomDuration < 10 
    ? snowflake.textContent = '☃️' 
    : snowflake.textContent = '❄️'
  snowflake.style.left = `${Math.floor(Math.random() * 100)}%`
  snowGlobe.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 10000)
}

setInterval(createSnowflake, 100) // Let's create a snowflake every 100 milliseconds!

/* Stretch goals: 
- Give some variety to your snowflakes, so they are not all the same. Perhaps every 25th one could be a snowman ☃️?
- Remove each snowflake after a set time - this will stop the scene from being lost in a blizzard!
- Add a button that makes the snow start falling, it could trigger a CSS-animated shake of the snow globe. Then make the snow become less frequent until it slowly stops - until the button is pressed again.  
- Change the direction of the snowflakes so they don’t all fall vertically.
- Make the style your own! 
*/