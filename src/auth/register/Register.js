import React, { useState } from "react";
import { verifyEmailAddress,funConfirmPassword } from "../../utility/Verification";
import ButtonAppBar from "../../components/home/Navbar";
import './register.css'
import bcrypt from 'bcryptjs'

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleFormSubmission(e){
    e.preventDefault();
    const hashedPassword = bcrypt.hashSync(password,10);
    const user = {name, email,age,username, phoneNumber, password:hashedPassword};
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
    setName("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
    setUsername("");
    setAge(0);
    setConfirmPassword("");
  }


  return (
    <>
      <ButtonAppBar/>
      <h1>Register Page</h1>
      <form method="post" onSubmit={handleFormSubmission}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", margin: "10px" }}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          style={{ padding: "10px" }}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        {email.length > 5 ? (
          verifyEmailAddress(email) ? (
            <small style={{ color: "green" }}>Email Verified</small>
          ) : (
            <small style={{ color: "red" }}>Email Not Valid</small>
          )
        ) : (
          ""
        )}
        <input
            className='register-form-age'
            type="number"
            placeholder="Age"
            min={age}
            max={120}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{ padding: "10px" }}required
        />
        <br/>
        <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            style={{padding: "10px" }}
            required
        />
        <input 
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter Phone Number"
            style={{padding: "10px" }}
            required
        />
        <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            style={{padding: "10px" }}
            required
        />
        <input 
            className={funConfirmPassword(password,confirmPassword) ? "matched-password" : "unmatched-password"}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            style={{padding: "10px" }}
            required
        />
        <input
            type="submit" 
        />
      </form>
    </>
  );
}

export default Register;
