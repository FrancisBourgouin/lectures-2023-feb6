// Scoping!

// HOF
// A function that needs a function as a param to work (callbacks)
// A function that returns a function definition(s)

const parrot = (data, connection) => {
  // ...
  connection.write("...");
};

const broadcast = (data, connection) => {
  // loop with listOfConnection

  connection.write("...");
};

const generateServerHelpers = (connection) => {
  const parrot = (data) => {
    // ...
    connection.write("...");
  };

  const broadcast = (data) => {
    // loop with listOfConnection

    connection.write("...");
  };

  return { parrot, broadcast };
};

const server = net.createServer((connection) => {
  const helpers = generateServerHelpers(connection);

  helpers.parrot("data");
  helpers.broadcast("data");

  // parrot("Hello", connection);

  // broadcast("hello!", connection);
});

const server2 = net.createServer((socket) => {
  const helpers = generateServerHelpers(socket);

  helpers.parrot("data");
  helpers.broadcast("data");
});
