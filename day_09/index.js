// Guest and her preferences
const guest = {
  name: 'Alice',
  loves: ['avocado', 'quinoa', 'kale'],
  dislikes: ['pork', 'chicken', 'turkey', 'beef', 'dairy', 'butter', 'eggs', 'gluten', 'nuts', 'soy', 'flour'],
};

// List of Christmas-themed recipes with their ingredients
const recipes = [
  {
    name: 'Honey-Glazed Ham',
    ingredients: ['pork', 'honey', 'brown sugar', 'cloves', 'butter'],
  },
  {
    name: 'Roast Turkey with Stuffing',
    ingredients: ['turkey', 'bread crumbs', 'gluten', 'celery', 'onions', 'tomatoes', 'butter'],
  },
  {
    name: 'Classic Beef Wellington',
    ingredients: ['beef', 'mushrooms', 'puff pastry', 'eggs'],
  },
  {
    name: 'Gingerbread Cookies',
    ingredients: ['flour', 'molasses', 'ginger', 'cinnamon', 'butter', 'eggs'],
  },
  {
    name: 'Vegan Stuffed Peppers',
    ingredients: ['bell peppers', 'quinoa', 'black beans', 'corn', 'tomato sauce', 'kale'],
  },
  {
    name: 'Roasted Brussels Sprouts',
    ingredients: ['brussels sprouts', 'olive oil', 'garlic'],
  },
  {
    name: 'Vegan Avocado Chocolate Mousse',
    ingredients: ['avocado', 'cocoa powder', 'maple syrup', 'flour'],
  },
  {
    name: 'Vegan Christmas Cookies',
    ingredients: ['oats', 'maple syrup', 'vanilla extract'],
  },
  {
    name: 'Quinoa Salad',
    ingredients: ['kale', 'quinoa', 'cranberries', 'lemon juice'],
  },
  {
    name: 'Vegan Lentil Loaf',
    ingredients: ['lentils', 'carrots', 'celery', 'onions', 'tomato paste'],
  },
];

// Requirements for a suitable recipe
// 1: Contains at least one ingredient Alice likes
// 2: Contains zero ingredients that Alice dislikes

// Step 1: Filter recipes based on Alice's preferences
/* 
const guest = {
  name: 'Alice',
  loves: ['avocado', 'quinoa', 'kale'],
  dislikes: ['pork', 'chicken', 'turkey', 'beef', 'dairy', 'butter', 'eggs', 'gluten', 'nuts', 'soy', 'flour'],
};

function containsAny(arr1, arr2) {
    return arr1.some(item => arr2.includes(item));
}

*/ 

const alice = {
  name: 'Alice',
  loves: ['avocado', 'quinoa', 'kale'],
  dislikes: ['pork', 'chicken', 'turkey', 'beef', 'dairy', 'butter', 'eggs', 'gluten', 'nuts', 'soy', 'flour'],
};

function filterRecipes(guest, recipes) {
  const { loves, dislikes } = guest;
  return recipes.filter(recipe => {
    // recipes that include at least one of guest's likes
    return recipe.ingredients.some(item => loves.includes(item)) 
    // recipes that include none of guest's dislikes
    && recipe.ingredients.every(item => !dislikes.includes(item))
  })
}

// Step 2: Output the suitable recipes
console.log(filterRecipes(alice, recipes))