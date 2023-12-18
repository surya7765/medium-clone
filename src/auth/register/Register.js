import React, { useState } from "react";
import { verifyEmailAddress } from "../../utility/Verification";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <h1>Register Page</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", margin: "10px" }}
        />
        <br />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          style={{ padding: "10px" }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        {verifyEmailAddress(email) ? (
          <small style={{ color: "green" }}>Email Verified</small>
        ) : (
          <small style={{ color: "red" }}>Email Not Valid</small>
        )}
      </form>
    </>
  );
}

export default Register;
