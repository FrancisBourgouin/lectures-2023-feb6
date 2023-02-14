console.log("🐔🐔🐔🐔🐔🐔🐔");

const chickenArmy = setInterval(() => {
  console.log("🐔🐔🐔🐔🐔🐔🐔");
}, 1000);

// console.log(chickenArmy);

setTimeout(() => {
  clearInterval(chickenArmy);
}, 5000);
