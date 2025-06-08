import { useState } from "react";
import "./AuthPage.css";
import bgImage from "../images/cancer-image.jpg";
import RegisterForm from "./Register";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    setIsRegistering(true);
    setLoginError("");
  };

  const handleLoginClick = () => {
    setIsRegistering(false);
    setLoginError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setLoginError("Please enter both email and password.");
      return;
    }

    setLoginError("");

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
              <h2>Login</h2>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </div>
                {loginError && (
                  <p style={{ color: "red", marginBottom: "10px" }}>
                    {loginError}
                  </p>
                )}
                <button
                  type="submit"
                  style={{ color: "black", backgroundColor: "white" }}
                >
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
          <RegisterForm
            onBackToLogin={handleLoginClick}
            onRegisterSuccess={() => navigate("/patient")}
          />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
