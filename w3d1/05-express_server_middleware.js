// Basic express server wo/ EJS

const express = require("express"); // Require the express library (must be installed)
const server = express(); // Create a new server based on the express package
const port = 8080; // Specify the port in advance

// Middlewares
// Ware in the middle
// Man in the middle attack

server.use((req, res, next) => {
  console.log(`Somebody asked for ${req.url}`);

  next();
});

server.use(express.static("public"));

server.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

server.get("/home", (req, res) => {
  res.send("Welcome home");
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
