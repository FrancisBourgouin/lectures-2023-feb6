const cookieParser = require("cookie-parser");
const express = require("express"); // Import Express package, Framework to make a simpler server (http)
const {
  authenticateUser,
  getUserByEmail,
  createUser,
  sayBob,
  updatePassword,
} = require("./users");

const app = express(); // Instantiate an express object for us to use
const port = 3000; // Store the port value inside the port variable

app.use(cookieParser());
app.use(express.static("public")); // Static files (css / images)
app.use(express.urlencoded({ extended: false })); // Parses the body of a form request string in an object
app.set("view engine", "ejs"); // Set the view engine to EJS

// Cookies
// Route to POST to /login
// Users!

app.get("/", (req, res) => {
  const { email } = req.cookies;

  const { err, user } = getUserByEmail(email);

  if (err) {
    const templateVars = { name: null, imagePath: null };
    return res.render("index", templateVars); // Render the template called "index" and sends the resulting HTML
  }

  const templateVars = { name: user.name, imagePath: user.imagePath };
  return res.render("index", templateVars);
});

app.get("/users/:user_email", (req, res) => {
  const userEmail = req.params.user_email;

  if (userEmail !== req.cookies.email) {
    return res.redirect("/");
  }

  const { err, user } = getUserByEmail(userEmail);

  if (err) {
    return res.redirect("/");
  }

  const templateVars = { email: user.email, password: user.password };

  res.render("dashboard", templateVars);
});

app.post("/users/:user_email/update", (req, res) => {
  const email = req.params.user_email;
  const password = req.body.password;

  if (email !== req.cookies.email) {
    return res.redirect("/");
  }

  const { err, user } = updatePassword(email, password);

  if (err) {
    return res.redirect(`/users/${email}?success=false`);
  }

  console.log(user);
  return res.redirect(`/users/${email}?success=true`);
});

app.post("/login", (req, res) => {
  // const email = req.body.email
  // const password = req.body.password
  const { email, password } = req.body;

  const { err, user } = authenticateUser(email, password);

  if (err) {
    console.log(err);
    return res.redirect("/");
  }

  console.log("success");
  res.cookie("email", user.email);
  return res.redirect("/");
});

app.post("/logout", (req, res) => {
  sayBob();
  res.clearCookie("email");
  return res.redirect("/");
});

app.get("/register", (req, res) => {
  return res.render("register");
});

app.post("/register", (req, res) => {
  const { err, user } = createUser(req.body);

  if (err) {
    console.log(err);
    return res.redirect("/register");
  }

  res.cookie("email", user.email);
  return res.redirect("/");
});

app.listen(port, () => console.log(`Express server running on port ${port}`)); // Start listening to requests on port specified by the port variable
