// req.params is to access values from the url
app.get("/users/:user_id", (req, res) => {
  const userId = req.params.user_id;
});
// req.body accesses the fields provided by the form
app.post("/register", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
});
/* 
<form>
  <input name="name" />
  <input name="password" />
</form> 
*/

// req.cookies is generated by cookieParser and will contain key/values of all the cookies
app.get("/users", (req, res) => {
  const email = req.cookies.email;
});

// req.query is every value specified in an url after question mark

// http://localhost:3000/users?email=...&password=.sq.sq

app.get("/users", (req, res) => {
  const email = req.query.email;
  const password = req.query.password;
});
