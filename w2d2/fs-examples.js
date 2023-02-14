// Fetch the content of the file, and then show it on the page
const fs = require("fs");

fs.readFile("./secret.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    return console.log(err);
  }

  const newData = "Secret is found, here is the information: " + data;

  fs.writeFile("./uncovered_secret.txt", newData, (err) => {
    if (err) {
      return console.log("There was a problem writing the file");
    }
    console.log("Writing succesful");
  });
});

const randomNumber = `${Math.random()}`;

fs.writeFile("./random_number.txt", randomNumber, (err) => {
  if (err) {
    return console.log("There was a problem writing the file");
  }
  console.log("Writing succesful");
});

// 1st level: global scope
// 2nd level: in the scope of the callback of readFile (access to the file being read)
// 3rd level: in the scope of the callback of writeFile

// READ CODE
// TOP -> BOTTOM (SYNCHRONOUS CODE)
// OUTSIDE -> INSIDE (ASYNCHRONOUS CODE)

// console.log(data);
// Wrong encoding => Interpret a document
// utf-8

// Read a file from the filesystem (fs)
//  (ASYNC) Once the read action is done
//    We get access to err and data
//    If err is truthy, show the error message
//    If err is falsy, move along
//    Log the data to the console
