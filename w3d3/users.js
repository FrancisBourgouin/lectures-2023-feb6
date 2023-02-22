// const urlDatabase = {
//   "shortUrl":"longUrl"
// }

// const urlDatabase2 = {
//   "shortUrl":{
//     shortUrl:"",
//     longUrl:"",
//     userId:""
//   }
// }

const user1 = {
  email: "gentleman@cambrioleur.com",
  name: "Arsène Lupin",
  password: "paris",
  imagePath: "arsene.gif",
};

const user2 = {
  email: "pontiac@bandit.com",
  name: "Doug Judy",
  password: "rosa",
  imagePath: "doug.webp",
};

const userDatabaseOld = {
  "gentleman@cambrioleur.com": user1,
  "pontiac@bandit.com": user2,
};
const userDatabase = [user1, user2];

const authenticateUser = (email, password) => {
  // const currentUser = userDatabase[email];
  const currentUser = userDatabase.find((user) => user.email === email);

  if (!currentUser) {
    return { err: "User doesn't exist", user: null };
  }

  if (currentUser.password !== password) {
    return { err: "Password doesn't match", user: null };
  }

  return { err: null, user: currentUser };
  // If exists, check if password is the same
  // If true, give the user, if not give null
};

const getUserByEmail = (email) => {
  // const currentUser = userDatabase[email];
  const currentUser = userDatabase.find((user) => user.email === email);

  if (!currentUser) {
    return { err: "User not found", user: null };
  }
  return { err: null, user: currentUser };
};

const createUser = (potentialUser) => {
  // const currentUser = userDatabase[potentialUser.email];
  const currentUser = userDatabase.find((user) => user.email === potentialUser.email);

  if (currentUser) {
    return { err: "User already exists, what are you doing ?!", user: null };
  }

  for (const key in potentialUser) {
    const value = potentialUser[key];
    if (!value) {
      return { err: `Missing input ${key}`, user: null };
    }
  }

  // userDatabase[potentialUser.email] = potentialUser;
  userDatabase.push(potentialUser);
  return { err: null, user: potentialUser };
};

const updatePassword = (email, password) => {
  const currentUser = userDatabase.find((user) => user.email === email);

  if (!currentUser) {
    return { err: "User doesn't exist, what are you doing ?!", user: null };
  }

  currentUser.password = password;
  return { err: null, user: currentUser };
};

const sayBob = () => console.log("bob");

module.exports = { authenticateUser, getUserByEmail, createUser, sayBob, updatePassword };
