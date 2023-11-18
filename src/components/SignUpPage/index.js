import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (
      name.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== ""
    ) {
      localStorage.setItem("Name", name);
      localStorage.setItem("phoneNumber", phoneNumber);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      alert("Registration successful. Please log in.");
      navigate("/login");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="singnupform-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>PhoneNumber:</label>
          <input
            type="phoneNumber"
            placeholder="Enter your phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUpPage;
