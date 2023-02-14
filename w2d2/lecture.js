// Functions recap

const functionExpression = function (param) {
  console.log(param);
};

const functionExpressionArrow = (param) => console.log(param);

const functionExpressionArrow2 = (param) => {
  console.log(param);
};

// Main drawback of arrow functions => how 'this' works

// Functions => Reusability
// Reusability => Parameters (arguments)

// const sayGoodMorning = (name) => console.log(`Good morning ${name}`);

// sayGoodMorning("Ahmed");
// sayGoodMorning("Harsh");

// // More reusability
// // Callbacks

// const listOfCoffee = ["Yergacheffe", "Huila", "Guiben"]; // coffee regions

// listOfCoffee.forEach((region) =>
//   console.log(`I have a coffee from the ${region} region`)
// );

// listOfCoffee.forEach(sayGoodMorning);

// .forEach is a Higher Order Function (Higher Order Method)
// It needs a function to work

// Functional vs OOP =>
// OOP Classes (object maker)
// Functional : a function given to a function given to a function... (Every function doesn't change the original)

// Callback is ran in a specific context

// Asynchronous vs Synchronous

let bob = "Chicken";

setTimeout(() => {
  bob = "Pollo";
}, 1000);

setTimeout(() => {
  const secret = "";
  console.log("async log", bob);
}, 0);

console.log("sync log", bob);

// Set bob to Chicken
// Set a timer to do a callback in 0s
// log to console the value of bob
// change bob to Pollo (callback)

// EVERYTHING THAT IS ASYNC WILL BE DONE AFTER SYNCHRONOUS STEPS
// Why just not wait?
// Meant for browser, means that we always wait for events Do something when something happens

// Emitters / Listeners (Client / Waiter)
