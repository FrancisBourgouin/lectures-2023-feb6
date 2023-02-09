// Functions

const addTwoandFiveTogether = () => {
  return 2 + 5;
};
addTwoandFiveTogether();

// Restrictive, not versatile
// WET => DRY

const addTwoNumbersTogether = (num1, num2) => {
  return num1 + num2;
};

// Better, more versatile
// Breaking possibility : If num1/num2 are not numbers, we will have a bad time

const sayGoodMorning = (name) => {
  console.log(`Good morning ${name}`);
};

// Pretty good, we can change the name to whatever, as long as it is a string

const sayBye = (name) => {
  console.log(`Good bye ${name}, have a nice day.`);
};

const saySomething = (something, name) => {
  console.log(`${something}, ${name}`);
};

const listOfStudents = ["Ivan", "Ahmed", "Eunice", "Mahad"];

const sayHiToEveryone = (list) => {
  for (const name of list) {
    saySomething("Hi", name);
  }
};

// sayHiToEveryone(listOfStudents);

const doSomethingToEveryone = (list, doSomething) => {
  // list is an array of names,
  // list is a placeholder for the array that we will use when we run the function
  // list is our array

  // doSomething is a function
  // doSomething is a placeholder for the action that we will want to do on every name

  for (const name of list) {
    doSomething(name);
  }
};

// doSomethingToEveryone(listOfStudents, sayGoodMorning);
// doSomethingToEveryone(listOfStudents, sayBye);
// doSomethingToEveryone(listOfStudents, (name) => console.log("WHAHAHAHAHAHAH", name));

// REUSABILITY

// listOfStudents.forEach();

// doSomethingToEveryone
// .forEach

// They NEED a function as a parameter
// Higher Order Functions (A function that needs a function to work)

// const someRandomFunction = (list) => {
//   for (const item of list) {
//     console.log(item);
//   }
// };

// someRandomFunction();

// [1,2,3], double => [2,4,6]

const transformAnArray = (array, modificationAction) => {
  const output = [];
  for (const number of array) {
    const value = modificationAction(number);
    output.push(value);
  }
  return output;
};

const listOfNumbers = [3, 5, 7];

const tripleNumber = (number) => number * 3; // Implicit return (oposite explicit)
const randomize = () => Math.random(); // Implicit return (oposite explicit)
const zeroize = () => 0; // Implicit return (oposite explicit)

const result = transformAnArray(listOfNumbers, zeroize); // Anonymous function
const result1 = listOfNumbers.map(tripleNumber);

console.log(result);

// Callbacks + Loops = <3

const goodGrade = { score: 90, subject: "history" };
const badGrade = { score: 95, subject: "math" };

const mathFocused = (grade) => {
  if (grade.subject === "math" && grade.score > 95) {
    return true;
  } else if (grade.subject === "math") {
    return false;
  } else {
    return true;
  }
};
const historyFocused = (grade) => {
  if (grade.subject === "history" && grade.score > 80) {
    return true;
  } else if (grade.subject === "history") {
    return false;
  } else {
    return true;
  }
};

const sadOrHappy = (grade, conditionCallback) => {
  if (conditionCallback(grade)) {
    console.log("YAY");
  } else {
    console.log("😢😭");
  }
};

sadOrHappy(badGrade, mathFocused);
// sadOrHappy is an HOF
// mathFocused is THE callback of sadOrHappy
// Being a callback is a relationship status

// calculateDistanceBetweenTwoGPSCoordinates // helper function

// const areYouClose = (gps1, gps2) => {
//   calculateDistanceBetweenTwoGPSCoordinates()
// }
