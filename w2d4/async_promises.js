// setTimeout(() => {
//   bob = 9001;
// }, 0);

const someFunctionThatReturnsAPromise = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.1) {
      return resolve(9001);
    }
    return reject("OH NO");
  });
};

let bob = 42;

// const result = someFunctionThatReturnsAPromise();
someFunctionThatReturnsAPromise()
  .then((result) => (bob = result))
  .catch((error) => (bob = error))
  .finally(() => console.log("Promise", bob));

console.log(bob);

// 1 : 42
// 2 : 9001 or OH NO
// 3 : CRASH AND BURN
