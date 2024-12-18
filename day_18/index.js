const shoppingCartData = [
  {
    "item": "Bluetooth Speaker",
    "price": 49.99,
    "isGift": true
  },
  {
    "item": "Office Chair",
    "price": 135.99,
    "isGift": true
  },
  {
    "item": "Gardening Gloves",
    "price": 19.99,
    "isGift": true
  },
  {
    "item": "Moon Cheese",
    "price": 4.99,
    "isGift": false
  },
  {
    "item": "Lifetime supply of olives",
    "price": 299.99,
    "isGift": true
  },
  {
    "item": "Pet Rock",
    "price": 12.99,
    "isGift": true
  },
  {
    "item": "USB Cable",
    "price": 8.99,
    "isGift": false
  },
  {
    "item": "Banana Holder",
    "price": 14.99,
    "isGift": true
  },
  {
    "item": "Can of Paint",
    "price": 28.99,
    "isGift": false
  },
  {
    "item": "Novelty Hot Sauce",
    "price": 25.99,
    "isGift": true
  }
]
/*
😱 Christmas can get expensive! 

You've been on a shopping trip and spent too much money. 
But how much of that can you blame on Christmas?

**Task**

- Calculate and return the total cost of only the gifts in the shopping cart.
- Each gift has the isGift boolean set to true.
- The total cost of gifts should be given to two decimal places.

Expected output: 559.93  

**Stretch Goal**

- Use the reduce() method to complete this challenge.
*/

function calculateCost(arr) {
  // Your code here!
  return arr.filter(item => item.isGift)
    .reduce((acc, item) => {
      return acc += item.price
    }, 0).toFixed(2)

}

console.log(calculateCost(shoppingCartData)) //559.93 