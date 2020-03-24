import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route } from "react-router";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <h1>User Forms</h1>
          <nav className="navbar">
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </nav>

          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </div>
      </Router>
    </>
  );
}

export default App;
