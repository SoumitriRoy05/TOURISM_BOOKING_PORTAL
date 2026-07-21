import "./Login.css";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import {
  FaUser,
  FaLock,
  FaPlaneDeparture,
} from "react-icons/fa";

function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = (e) => {

    e.preventDefault();

    // Temporary login (will replace with backend later)
    login("user@gmail.com");

    navigate("/dashboard");
  };

  return (
    <section className="login-page">

      <div className="login-overlay">

        <div className="login-box">

          <div className="login-logo">

            <FaPlaneDeparture />

            <h2>BharatYatra</h2>

          </div>

          <h1>Welcome Back</h1>

          <p>
            Login to access your bookings,
            AI planner, saved trips and dashboard.
          </p>

          <form onSubmit={handleLogin}>

            <div className="input-box">

              <FaUser />

              <input
                type="email"
                placeholder="Email Address"
                required
              />

            </div>

            <div className="input-box">

              <FaLock />

              <input
                type="password"
                placeholder="Password"
                required
              />

            </div>

            <button type="submit">

              Login

            </button>

          </form>

          <div className="login-links">

            <Link to="/forgot-password">

              Forgot Password?

            </Link>

            <p>

              Don't have an account?

              <Link to="/register">

                Register

              </Link>

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Login;