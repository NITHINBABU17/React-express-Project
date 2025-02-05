const UserModel = require("../models/userModel");


const register = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  UserModel.registerUser(name, email, password, (err, result) => {
    if (err) return res.status(500).json({ error: "Email already exists." });

    res.status(201).json({ message: "User registered successfully!" });
  });
};


const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

 
  UserModel.getUser(email, password, (err, user) => {
    if (err || !user) return res.status(401).json({ error: "Invalid credentials" });

    res.json({ message: "Login successful!", user });
  });
};

module.exports = { register, login };
