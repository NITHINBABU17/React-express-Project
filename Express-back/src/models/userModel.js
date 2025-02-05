const db = require("./db");


const registerUser = (name, email, password, callback) => {
  db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
    (err, result) => {
      callback(err, result);
    }
  );
};


const getUser = (email, password, callback) => {
  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      callback(err, result[0]); 
    }
  );
};

module.exports = { registerUser, getUser };
