const elfFirstNames = [
  "Aurora", "Blitzen", "Crispin", "Dazzle", "Evergreen", "Frost", "Glimmer",
  "Holly", "Icicle", "Joyful", "Kringle", "Luna", "Merry", "Nutmeg",
  "Olwen", "Pine", "Quill", "Razzle", "Sparkle", "Tinsel", "Umbra",
  "Vixen", "Whisk", "Xylo", "Yule", "Zippy"
];

const elfLastNames = [
  "Applecheeks", "Bells", "Candycane", "Dazzlebright", "Everbright", "Frostwhisk",
  "Gingersnap", "Hollyberry", "Icestorm", "Jovial", "Kindleflame", "Lightwhisper",
  "Merrysprout", "Nutcracker", "Oakenleaf", "Peppermint", "Quicksilver", "Raindrop",
  "Snowdust", "Twinkletoes", "Underwood", "Velvet", "Winterberry", "Xylospark",
  "Yuletide", "Zestwind"
];


/*
 * 🎅 Task:
 * - Generate an elf first and last name that matches the user’s first and last name initials, then display it on the screen.
 * - Example: if the user’s name is "John Doe," the elf name could be "Joyful Dazzle."
 * - Display the generated elf names in the "Registered Employees" list.
 */


// listener for form to get first name and last name
// - formData?

// get random name function
// - accept submitted name
// - take first letter of each name
// - randomize elfNames arrays
// - return first match for first letters of each name
// - splice elf names from data to prevent reuse (stretch)
// - add functionality to advise 'No more available slots...' (stretch)
// - return elf name

// render function
// - accept elf name from randomizer function
// - render name to DOM
// - id="elf-names-list"
// - clear placeholder <li>
// - append to list



/*
 * 🌟 Stretch Goals:
 * - Generate the elf names using an LLM API (like HuggingFace). 
 * - Don't save the same name twice. (not necessary for the normal task)
 * - Make sure to use Scrimba's environment variables feature so you don't expose your API key 
 */
