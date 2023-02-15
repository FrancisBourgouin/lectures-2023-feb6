const net = require("net");
const readline = require("readline");

// Create an interface with the terminal so that rl can read from what we type and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// On the event of a new line (when we press enter), do the callback with the line that was just typed
// rl.on("line", (lineData) => {
//   console.log("You just typed", lineData);
// });

const client = net.createConnection({ port: 1337 }, () => {
  console.log("We are connected to the server!");
});

client.setEncoding("utf-8");
client.on("data", (data) => console.log(data));

rl.on("line", (lineData) => {
  client.write(lineData);
});
// process.argv => data from when it's run

// READLINE !
