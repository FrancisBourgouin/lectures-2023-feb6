// Javascript Classes

// Map
// Object
// Date

const today = new Date();
const arr = new Array();

// Purpose of a class ? Blueprint

const someArray = new Array();

someArray.length;

class Chicken {
  constructor(name, height) {
    this.name = name;
    this.height = height + " meters";
  }

  poke() {
    console.log("Pock pock");
  }

  defend() {
    console.log("What the hell !?!?!?");

    console.log("Flies away");
  }
}

class ZeldaChicken extends Chicken {
  constructor() {
    super("Unnamed zelda chicken", 1);
  }

  defend() {
    console.log("What the hell !?!?!?");

    console.log("An army of chickens is summoned... OH NO.");
  }
}

const argentinianChicken = new Chicken("Pollo", 0.3);

console.log(argentinianChicken);

argentinianChicken.defend();

const gameChicken = new ZeldaChicken();

console.log(gameChicken);

gameChicken.defend();

// class Header extends React.Component
