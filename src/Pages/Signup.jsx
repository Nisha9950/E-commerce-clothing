import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../radux/authslice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CSS/Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [toastShown, setToastShown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (toastShown) return; // ✅ Prevent duplicate toasts

    if (!name || !email || !password) {
      setToastShown(true);
      toast.error("All fields are required", {
        autoClose: 2000,
        onClose: () => setToastShown(false), // ✅ Reset state when toast closes
      });
      return;
    }

    if (!validatePassword(password)) {
      setToastShown(true);
      toast.error(
        "Password must be at least 6 characters long, contain one uppercase letter, and one special character.",
        {
          autoClose: 3000,
          onClose: () => setToastShown(false),
        }
      );
      return;
    }

    const userData = { name, email, password };
    dispatch(registerUser(userData));

    // Store the email in localStorage
    localStorage.setItem("lastRegisteredEmail", email);

    setToastShown(true);
    toast.success("Registration successful! Redirecting to login...", {
      autoClose: 2000,
      onClose: () => setToastShown(false),
    });

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="loginsignup">
      <div className="loginsign-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="forget">
            <label>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              /> Show Password
            </label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p className="loginsignup-login">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

