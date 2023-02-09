// Function expression > function definition
// Hoisting & Reassignement can lead to issues

// export default function Bob(){

// }

// const Bob = () => {

// }

// export default Bob

// Arrow functions are great because less to type

const multiStepFunction = () => {
  console.log("Step 1");
  console.log("Step 2");
  console.log("Step 3");

  return "something";
};

const singleStepFunction = () => console.log("Something");

// Be careful of 'this' with arrow functions (it works weird)

const normalFunction = (param1, param2) => param1 + param2;

const eqObjects = (obj1, obj1) => {
  // ...
};

// Higher Order Functions (HOF)
// 1- They need another to work (Callback)
// 2- They return a function definition (LATER)

// const higherOrderFunction = (callbackFunction) => {
//   callbackFunction()
// }

const someArray = [1, 1, 1, 1, 1, 1, 1, 5];

const cleanArrayOfUnwantedElements = (array, filterCallback) => {
  const output = [];

  for (const element of array) {
    if (filterCallback(element)) {
      output.push(element);
    }
  }

  return output;
};

cleanArrayOfUnwantedElements(someArray, (element) => element === 1);
cleanArrayOfUnwantedElements(someArray, () => Math.random() > 0.5);

const isEqualtoOne = (element) => element === 1;
cleanArrayOfUnwantedElements(someArray, isEqualtoOne);
