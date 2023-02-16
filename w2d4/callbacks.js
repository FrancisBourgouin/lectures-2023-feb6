// Coffee

// Grind Coffee
// Tamper it in my portafilter
// Make espresso
// Enjoy

const grindCoffee = (quantity, callbackAfterGrind) => {
  console.log(`About to grind ${quantity}g of coffee`);

  setTimeout(() => {
    if (Math.random() > 0.9) {
      console.log("Ground the coffee, smells good!");
      return callbackAfterGrind();
    }
    throw new Error("Oops found a rock, grinding stopped");
  }, 2000);
};

const tampCoffee = () => {
  console.log("About to tamp my coffee");

  console.log("*squish*");
  setTimeout(() => {
    if (Math.random() > 0.5) {
      return console.log("Nice puck!");
    }
    throw new Error("Oops spilled the coffee everywhere");
  }, 2000);
};

// const bob = "bob";
// bob = "BAWB";

const listOfCoffees = [];
let failures = 0;

// while (listOfCoffees.length < 5) {
//   try {
//     grindCoffee(18);
//     tampCoffee();
//     listOfCoffees.push("☕");
//   } catch (error) {
//     console.log("OH NO.");
//     console.log(error.message);
//     console.log("Try again.");
//     failures++;
//   }
// }

// console.log(
//   `Made our list of coffee ${listOfCoffees} and it took ${failures} failures to get to the goal`
// );

// try {
//   grindCoffee(18, tampCoffee);
// } catch (error) {
//   console.log("OH NO.");
//   console.log(error.message);
//   console.log("Try again.");
// }

// Log a message to say that we will grind coffee
// set a timer for two seconds, when it's done run the callback
// When does an async callback runs?
// try/catch -- connected to the throw in a sync fashion
// try/catch doesn't work well with async content

const grindCoffeeV2 = (quantity, successCallback, errorCallback) => {
  console.log(`About to grind ${quantity}g of coffee`);

  setTimeout(() => {
    if (Math.random() > 0.9) {
      return successCallback("Ground the coffee, smells good!");
    }
    return errorCallback("Found rocks in hopper, very sad :(");
  }, 2000);
};

// grindCoffeeV2(
//   18,
//   (message) => {
//     console.log(message);
//     tampCoffee();
//   },
//   (error) => console.log(error)
// );

const grindCoffeeV3 = (quantity, afterGrindCallback) => {
  console.log(`About to grind ${quantity}g of coffee`);
  // Success or failure
  // error message, success message

  setTimeout(() => {
    if (Math.random() > 0.5) {
      return afterGrindCallback(null, "Ground the coffee, smells good!");
    }
    return afterGrindCallback("Found rocks in hopper, very sad :(", null);
  }, 2000);
};

const tampCoffeeV3 = (afterTampCallback) => {
  console.log("About to tamp my coffee");

  console.log("*squish*");
  setTimeout(() => {
    if (Math.random() > 0.5) {
      return afterTampCallback(null, "Nice puck!");
    }
    return afterTampCallback("Coffee spilled everywhere", null);
  }, 2000);
};

const makeEspressoV3 = (afterShotCallback) => {
  console.log("About pour the shot");

  setTimeout(() => {
    if (Math.random() > 0.5) {
      return afterShotCallback(null, "LOOK AT THAT CREMA");
    }
    return afterShotCallback("Machine exploded :(", null);
  }, 2000);
};

// READ SYNC CODE => TOP TO BOTTOM
// READ ASYNC CODE => OUTSIDE TO INSIDE

grindCoffeeV3(18, (error, message) => {
  if (error) {
    return console.log(error);
  }

  console.log(message);
  tampCoffee((error, message) => {
    if (error) {
      return console.log(error);
    }

    console.log(message);
    makeEspressoV3((error, message) => {
      if (error) {
        return console.log(error);
      }

      console.log(message);

      console.log("SLURRPP");
      console.log("THATS GOOD");
    });
  });
});
