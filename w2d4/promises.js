// What is a promise?

// About the future
// Fulfill the promise
// Fail the promise

const grindCoffeePromise = (quantity) => {
  console.log(`About to grind ${quantity}g of coffee`);
  // Success or failure
  // error message, success message

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        return resolve("Ground the coffee, smells good!");
      }
      return reject("Found rocks in hopper, very sad :(");
    }, 2000);
  });
};

const tampCoffeePromise = () => {
  console.log("About to tamp my coffee");

  console.log("*squish*");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        return resolve("Nice puck!");
      }
      return reject("Coffee spilled everywhere");
    }, 2000);
  });
};

const makeEspressoPromise = () => {
  console.log("About pour the shot");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        return resolve("LOOK AT THAT CREMA");
      }
      return reject("Machine exploded :(");
    }, 2000);
  });
};

// Promises : TOP TO BOTTOM

grindCoffeePromise(18)
  .then((message) => console.log(message))
  .then(tampCoffeePromise)
  .then((message) => console.log(message))
  .then(makeEspressoPromise)
  .then((message) => console.log(message))
  .then(() => console.log("Good espresso!"))
  .catch((error) => console.log(error))
  .finally(() => console.log("This was a funky ride."));

const makeAnEspresso = () => {
  return grindCoffeePromise(18)
    .then((message) => console.log(message))
    .then(tampCoffeePromise)
    .then((message) => console.log(message))
    .then(makeEspressoPromise)
    .then((message) => console.log(message));
};

makeAnEspresso()
  .then(() => console.log("Belch tastes like sadness!"))
  .catch((error) => console.log(error))
  .finally(() => console.log("This was a funky ride."));

makeAnEspresso()
  .then(() => console.log("Wow!"))
  .catch((error) => console.log(error))
  .finally(() => console.log("This was a funky ride."));

// grindCoffeePromise(18)
//   .then((message) => console.log(message)) // When resolve is called
//   .catch((error) => console.log(error)) // When reject is called
//   .finally(() => console.log("The process ended")); // Happens all the time

// new Promise((resolve, reject) => {
//   if (success) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// fs.readFile("/somepath.txt", (err, data) => {
//   // ...
// });

// fsPromises
//   .readFile("/somepath")
//   .then((data) => {
//     // ...
//   })
//   .catch((error) => {
//     // ...
//   });

// AJAX => Click on something, and data changes but the page didn't reload

// fetch("some/url").then(...).catch(...)

// Are promises asynchronous?

const functionThatReturnsAnArray = () => {
  const array = [1, 23, 4, 5, 6];

  return array;
};

functionThatReturnsAnArray().forEach((element) => console.log(element));

const result = functionThatReturnsAnArray();
result.forEach((element) => console.log(element));
