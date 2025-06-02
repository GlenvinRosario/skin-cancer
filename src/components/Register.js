import React from "react";
import "./Register.css";
// import bgImage from ".../images/register-bg-image.jpeg";

const RegisterForm = ({ onBackToLogin }) => {
  return (
    <div className="register-box-first">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" placeholder="Enter your full name" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" placeholder="Confirm your password" />
        </div>
        <button type="submit">Register</button>
      </form>

      <p style={{ marginTop: "10px" }}>
        Already have an account?{" "}
        <span
        style={{color : "black" , backgroundColor:"white"  , cursor:"pointer"}}
          onClick={onBackToLogin}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default RegisterForm;
