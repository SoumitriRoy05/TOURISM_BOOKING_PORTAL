import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaGlobe, FaUser, FaEnvelope, FaLock, FaPhone, FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import "./Login.css";

function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    setError("");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    
    if (!formData.agreeTerms) {
      setError("Please agree to the Terms & Conditions.");
      return;
    }

    setSuccess(true);
    setTimeout(() => {
      login(formData.email);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <section className="auth-page-wrapper">
      <div className="auth-aurora-bg"></div>
      <div className="auth-mesh-overlay"></div>

      <div className="auth-card-container">
        
        <Link to="/" className="back-home-link">
          <FaArrowLeft /> <span>Back to Home</span>
        </Link>

        <div className="auth-glass-box">
          <div className="auth-brand-logo">
            <div className="logo-badge">
              <FaGlobe className="logo-icon" />
            </div>
            <h2>BHARAT<span className="accent-text">YATRA</span></h2>
          </div>

          <h1>Create Account</h1>
          <p className="auth-subtitle">
            Join BharatYatra to unlock custom AI trip plans, exclusive hotel discounts, and instant flight bookings.
          </p>

          {error && <div className="auth-error-alert">{error}</div>}
          {success && (
            <div className="auth-success-alert">
              <FaCheckCircle className="alert-icon" /> Account created successfully! Redirecting...
            </div>
          )}

          <form onSubmit={handleRegister} className="auth-form">
            <div className="auth-field">
              <label><FaUser className="field-icon" /> Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="auth-field">
              <label><FaEnvelope className="field-icon" /> Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="auth-field">
              <label><FaPhone className="field-icon" /> Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="auth-field-row">
              <div className="auth-field">
                <label><FaLock className="field-icon" /> Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="auth-field">
                <label><FaLock className="field-icon" /> Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="auth-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                />
                <span>I agree to the <a href="#terms">Terms & Conditions</a> and <a href="#privacy">Privacy Policy</a></span>
              </label>
            </div>

            <button type="submit" className="auth-submit-btn">
              Create My Account
            </button>
          </form>

          <div className="auth-footer-links">
            <p>
              Already have an account? <Link to="/login" className="highlight-link">Sign In</Link>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Register;
