import React, { useState } from "react";
import "./Login.css";
import Navbar from "../../../components/Navbar/Navbar";
import { login } from "../../../slices/AuthSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loginHandler = async () => {
    dispatch(login());
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-card">
          <div className="left-section"></div>
          <div className="right-section">
            <h1 className="login-title">Welcome</h1>
            <div className="login-form">
              <div className="form-control">
                <label className="input-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="input-label">Password</label>
                <input
                  className="form-input"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className="login-btn btn"
                type="submit"
                onClick={loginHandler}
              >
                Login
              </button>
              <a href="#" className="login-signup-link">
                New to Foodka, Create an account
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
