import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaGlobe, FaEnvelope, FaLock, FaArrowLeft, FaSignInAlt, FaCheckCircle } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [success, setSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setSuccess(true);

    setTimeout(() => {
      login(email || "user@gmail.com");
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <section className="auth-page-wrapper">
      {/* Background Aurora Mesh */}
      <div className="auth-aurora-bg"></div>
      <div className="auth-mesh-overlay"></div>

      <div className="auth-card-container">
        
        {/* Back to Home button */}
        <Link to="/" className="back-home-link">
          <FaArrowLeft /> <span>Back to Home</span>
        </Link>

        <div className="auth-glass-box">
          {/* Brand Logo */}
          <div className="auth-brand-logo">
            <div className="logo-badge">
              <FaGlobe className="logo-icon" />
            </div>
            <h2>BHARAT<span className="accent-text">YATRA</span></h2>
          </div>

          <h1>Welcome Back</h1>
          <p className="auth-subtitle">
            Sign in to manage your flight bookings, luxury hotel reservations, and custom AI trip itineraries.
          </p>

          {success && (
            <div className="auth-success-alert">
              <FaCheckCircle className="alert-icon" /> Signed in successfully! Redirecting to Dashboard...
            </div>
          )}

          <form onSubmit={handleLogin} className="auth-form">
            <div className="auth-field">
              <label><FaEnvelope className="field-icon" /> Email Address</label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="auth-field">
              <label><FaLock className="field-icon" /> Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="auth-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>

              <Link to="/forgot-password" className="forgot-link">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="auth-submit-btn">
              <FaSignInAlt /> <span>Sign In to Account</span>
            </button>
          </form>

          <div className="auth-footer-links">
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="highlight-link">
                Create Account / Register
              </Link>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Login;