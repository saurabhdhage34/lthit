import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Static Login Check
    if (email === "admin@sdit.com" && password === "admin123") {
      navigate("/");
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="login-container">
      <div className="glass-card">
        <div className="login-icon">
          <i className="bi bi-box-arrow-in-right"></i>
        </div>
        
        <h2 className="login-title">Sign in with email</h2>
        <p className="login-subtitle">
          Make a new doc to bring your words, data, and teams together. For free
        </p>

        <form onSubmit={handleLogin}>
          <div className="input-group-custom">
            <i className="bi bi-envelope"></i>
            <input 
              type="email" 
              placeholder="Email" 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group-custom">
            <i className="bi bi-lock"></i>
            <input 
              type="password" 
              placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <i className="bi bi-eye-slash ms-auto cursor-pointer"></i>
          </div>

          <div className="forgot-link text-end mb-3">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="btn-get-started">Get Started</button>
        </form>

        <div className="divider">
          <span>Or sign in with</span>
        </div>

        <div className="social-login">
          <button className="social-btn"><i className="bi bi-google"></i></button>
          <button className="social-btn"><i className="bi bi-facebook"></i></button>
          <button className="social-btn"><i className="bi bi-apple"></i></button>
        </div>
      </div>
    </div>
  );
}

export default Login;