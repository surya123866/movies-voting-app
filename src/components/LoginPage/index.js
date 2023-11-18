import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Cookies from "js-cookie";

import "./index.scss";

const LoginPage = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Email = localStorage.getItem("email");
  const Password = localStorage.getItem("password");

  const handleLogin = () => {
    if (email === Email && password === Password) {
      localStorage.setItem("isLoggedIn", "true");
      Cookies.set("userToken", uuid(), { expires: 30 });
      Navigate("/");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="Loginform-container">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
