import { useState } from "react";
import "./AuthPage.css";
import bgImage from "../images/cancer-image.jpg";
import RegisterForm from "./Register";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const navigate = useNavigate();
  const handleRegisterClick = () => {
    setIsRegistering(true);
  };

  const handleLoginClick = () => {
    setIsRegistering(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    navigate("/patient");
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="auth-section">
        {!isRegistering ? (
          <>
            <div className="login-box">
              <h2 >Login</h2>
              <form>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input type="password" placeholder="Enter your password" />
                </div>
                <button type="submit" onClick={handleLogin}  style={{ color: "black", backgroundColor: "white" }}>
                  Login
                </button>
              </form>
            </div>

            <div className="register-box">
              <h2 style={{ color: "black" }}>Register</h2>
              <p>Sign up to create your account</p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={handleRegisterClick}
                  style={{ color: "black", backgroundColor: "white" }}
                >
                  Register
                </button>
              </div>
            </div>
          </>
        ) : (
          <RegisterForm onBackToLogin={handleLoginClick} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
