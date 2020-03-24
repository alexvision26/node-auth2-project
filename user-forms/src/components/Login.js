import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = props => {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });
  const [users, setUsers] = useState([]);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(login);
    axios
      .post("http://localhost:5000/api/auth/login", login)
      .then(res => {
        setLogin({
          username: "",
          password: ""
        });
      })
      .catch(err => console.log(err));
  };

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="form-container">
      <h2>Log Into Your Account!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <br />
        <input
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="Your Username.."
        ></input>
        <br />
        <label htmlFor="password">Password: </label>
        <br />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Your Password.."
        ></input>
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
