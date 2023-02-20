// Basic express server w/ EJS

const express = require("express"); // Require the express library (must be installed)
const server = express(); // Create a new server based on the express package
const port = 8080; // Specify the port in advance

server.set("view engine", "ejs"); // net reuqest: setEncoding("utf-8")
// Middlewares
// Ware in the middle
// Man in the middle attack

server.use((req, res, next) => {
  // Middleware that will show the url that is requested
  console.log(`Somebody asked for ${req.url}`);

  next();
});

server.use(express.static("public"));

server.get("/", (req, res) => {
  // res.json({ message: "Hello World!" });
  const templateVariables = {
    pageTitle: "the / page",
    backgroundColor: "#B0B",
  };

  res.render("my-first-template", templateVariables);
});

server.get("/home", (req, res) => {
  const templateVariables = {
    pageTitle: "the home page",
    backgroundColor: "#C0FFEE",
  };

  res.render("my-first-template", templateVariables);
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
