// setTimeout(() => {
//   console.log("'sup!");
// }, 2000);

// // setTimeout has two parameters, a callback and a timer (in ms)

// setTimeout(() => {
//   console.log("Yo yo yo");
// }, 4000);

// Philly Cheese Steak
// Old school restaurants are impatient

// setTimeout => Delay running the code? Skip the first one
// Ruby / C++ / Java => wait(2000)

// setTimeout => Runs a code after an inputted amount of time

// setTimeout => Set a timer, and then run the callback

// 1. set a timer for 2 seconds (2000ms) and prepare what to do when that happens (callback)
// callback will be run asynchronously
// setTimeout is synchronous

// 2. set a timer for 2 seconds (2000ms)

// setTimeout(() => {
//   console.log("'sup!");
//   setTimeout(() => {
//     console.log("Yo yo yo");
//   }, 2000);
// }, 2000);

// setTimeout has two parameters, a callback and a timer (in ms)

const conversationMessages = [
  "Hello!",
  "How are you?",
  "Good you?",
  "Pretty good too thanks",
  "Bye",
];

// Old C-Style Loop
conversationMessages.forEach((message, index) => {
  setTimeout(() => {
    console.log(message, index);
  }, 1000 * index);
});

for (let i = 0; i < conversationMessages.length; i++) {
  const message = conversationMessages[i];

  setTimeout(() => {
    console.log(message, i);
  }, 1000 * i);
}

// setTimeout(() => {
//   console.log(conversationMessages[0]);
//   setTimeout(() => {
//     console.log(conversationMessages[1]);
//     setTimeout(() => {
//       console.log(conversationMessages[2]);
//       setTimeout(() => {
//         console.log(conversationMessages[3]);
//         setTimeout(() => {
//           console.log(conversationMessages[4]);
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);
