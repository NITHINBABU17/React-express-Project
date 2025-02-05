import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import "./style.css";
import Home from "./components/main";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Welcome</h1>
        <nav>
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </nav>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
