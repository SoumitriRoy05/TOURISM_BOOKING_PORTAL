import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGlobe, FaEnvelope, FaArrowLeft, FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import "./Login.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="auth-page-wrapper">
      <div className="auth-aurora-bg"></div>
      <div className="auth-mesh-overlay"></div>

      <div className="auth-card-container">
        
        <Link to="/login" className="back-home-link">
          <FaArrowLeft /> <span>Back to Login</span>
        </Link>

        <div className="auth-glass-box">
          <div className="auth-brand-logo">
            <div className="logo-badge">
              <FaGlobe className="logo-icon" />
            </div>
            <h2>BHARAT<span className="accent-text">YATRA</span></h2>
          </div>

          <h1>Reset Password</h1>
          <p className="auth-subtitle">
            Enter your registered email address and we'll send you a password reset link.
          </p>

          {submitted ? (
            <div className="reset-success-box">
              <FaCheckCircle className="reset-success-icon" />
              <h3>Check Your Email</h3>
              <p>We've sent a password reset link to <strong>{email}</strong>. Please check your inbox and follow the instructions.</p>
              <Link to="/login">
                <button className="auth-submit-btn margin-top-20">
                  Return to Sign In
                </button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="auth-form">
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

              <button type="submit" className="auth-submit-btn">
                <FaPaperPlane /> <span>Send Reset Link</span>
              </button>
            </form>
          )}

          <div className="auth-footer-links">
            <p>
              Remembered your password? <Link to="/login" className="highlight-link">Sign In</Link>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
