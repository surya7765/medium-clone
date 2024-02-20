import React, { useState } from "react";
import ButtonAppBar from "../../components/home/Navbar";
import axios from 'axios';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleFormSubmission(e) {
    e.preventDefault();
    const user = { username, password }
    axios
      .post("http://localhost:3000/user/login", user)
      .then((response) => {
        console.log(response.data)
        Cookies.set('token', response.data.token);
        Cookies.set('Authenticated', true);
        navigate('/')
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <ButtonAppBar />
      <h1>Login</h1>
      <form method="get" onSubmit={handleFormSubmission}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          style={{ padding: "10px" }}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          style={{ padding: "10px" }}
          required
        />
        <button  type="submit" >Sign In</button>
      </form>
    </>
  );
}

export default Login;
