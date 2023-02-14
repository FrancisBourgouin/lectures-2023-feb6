// STDIN - STDOUT
// Standard Input - Standard Output
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin, // Keyboard in terminal
  output: process.stdout, // Terminal window
});

rl.question("Do you like potatoes ? ", (answer) => {
  if (answer === "yes") {
    console.log("Of course");
  } else {
    console.log("Why are you making me sad?");
  }

  rl.question("Do you like chicken ? ", (answer) => {
    if (answer === "yes") {
      console.log("Of course");
    } else {
      console.log("Why are you making me sad?");
    }
    process.exit(0);
  });
});

// Create an interface to ask questions (called rl)

// Ask a question about potato
//  ASYNC - When the user answered the question
//    we get access to the answer from the callback param
//    we show a message depending on the answer
//    THEN
//      Ask a question about chicken
//        ASYNC - When the user answered the question
//        we get access to the answer from the callback param
//        we show a message depending on the answer
