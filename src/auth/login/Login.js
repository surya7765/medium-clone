import React, { useState } from "react";
import ButtonAppBar from "../../components/home/Navbar";
import bcrypt from "bcryptjs";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmission(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
      alert("No User Found");
    } else {
      const user = users.find((user) => user.username === username);
      if (!user) {
        alert(username + " is not a valid user");
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          alert("Signed in successfully!");
        } else {
          alert("Signed in failed due to invalid password");
        }
      }
    }
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
        <input type="submit" value="Sign In" />
      </form>
    </>
  );
}

export default Login;
