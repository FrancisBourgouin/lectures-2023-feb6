// Existential questions!

// Types in JS

// Primitives in JS
// String - Boolean - Number - Null - Undefined - Symbol - BigInt => Falsy value (Nothing)

// Structural Type
// Arrays - Objects - Functions => Never falsy

// Function definition --- Hoisting, reassignement
function functionDefinition() {
  // Pretty bad and dangerous
  console.log("Hello potato.");
}

// Function expression (THIS is scoped to the definition)

const functionExpression = function () {
  // ...
};

// Function expression, but fancy (THIS IS WEIRD)

const fancyFunctionExpression = () => {
  // ...
};

const addTwoNumbers = (a, b) => a + b;

const addTwoNumbersButSad = function (a, b) {
  return a + b;
};

const potato = {
  name: "Yukon Gold",
  greet: function () {
    console.log("Hello!", this.name);
  },
};
const potato2 = {
  name: "Russett",
  greet: function () {
    console.log("Hello!", this.name);
  },
};
const potatoArrow = {
  name: "Russett",
  greet: () => console.log("Hello!", this.name),
};

potatoArrow.greet();

const someAction = function () {
  // ...Definition of someAction
};
