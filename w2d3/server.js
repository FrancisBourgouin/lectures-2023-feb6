// Chat Server & Client

// Receive a message from a client, and send it to all the other clients
// Send a greeting when a client joins

// ASYNC => Emitters & Listeners

// setTimeout => setTimeout will emit an event that says I'm done after the delay
// setTimeout => setTimeout will create a listener that will run the callback when it receives the signal

// Server <-> Client
// Waiter <-> Client

// Server => Give it a list of instructions, and a list of events to watch for

// net.Server (listen)
// Event: 'listening' : Do something when the server is ready and listening
// Event: 'connection' : Do something when there is a client that just connected
const net = require("net");

const listOfConnections = [];

const server = net.createServer((connection) => {
  const parrot = (data) => {
    console.log("Client said: ", data);
    connection.write(`🦜: ${data}`);
  };

  const broadcast = (data) => {
    console.log("Client said: ", data);

    for (const listOfConnectionsItem of listOfConnections) {
      if (connection !== listOfConnectionsItem) {
        listOfConnectionsItem.write(`📣: ${data}`);
      }
    }
  };

  // ...
  listOfConnections.push(connection);
  connection.setEncoding("utf-8");

  console.log("A new client connected");

  connection.write("Hi new client that just connected \n");

  connection.on("data", (data) => {
    const messageType = data.slice(0, 6);
    if (messageType === "parrot") {
      parrot(data.slice(8));
    } else {
      broadcast(data);
    }
  });
});

server.on("listening", () => {
  console.log("Server is ready to accept connections and is listening.");
});

server.listen(1337);

// Event: 'close'
// Event: 'error'
// Event: 'drop'

// Class: net.Socket
// Event: 'close'
// Event: 'connect'
// Event: 'data'
// Event: 'drain'
// Event: 'end'
// Event: 'error'
// Event: 'lookup'
// Event: 'ready'
// Event: 'timeout'
// socket.write(data[, encoding][, callback])

// In my appartment building, there is appartment #2
// In another building, there is appartment #2

// Incoming/Outgoing Port

// HTTP 80
// SSH  22
// TELNET 21
// POSTGRES 5432

// localhost:3000
