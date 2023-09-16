import React from 'react'
import Navbar from '../../../components/Navbar/Navbar';
import "./Signup.css"
import { useState } from 'react';


const Signup = () => {

    const [signupDetails, setSignupDetails] = useState({ name: "", email: "", password: "", cpassword: "" });

    const handleChange = (e) => {
        setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
    }

    const signupHandler = (e) => {
        e.preventDefault();
    }

    return (<>
        <Navbar />
        <div className="login-container">
            <div className="login-card">
                <div className="left-section"></div>
                <div className="right-section">
                    <h1 className="signup-title">Signup</h1>
                    <div className="login-form">

                        {/* Name */}
                        <div className="form-control">
                            <label className="input-label">Name</label>
                            <input
                                className="form-input"
                                type="text"
                                placeholder="Enter full name"
                                name="name"
                                value={signupDetails.name}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Email */}
                        <div className="form-control">
                            <label className="input-label">Email</label>
                            <input
                                className="form-input"
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={signupDetails.email}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Password */}
                        <div className="form-control">
                            <label className="input-label">Password</label>
                            <input
                                className="form-input"
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                value={signupDetails.password}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="form-control">
                            <label className="input-label">Comfirm your password</label>
                            <input
                                className="form-input"
                                type="password"
                                placeholder="Enter password again"
                                name='cpassword'
                                value={signupDetails.cpassword}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            className="login-btn btn"
                            type="submit"
                            onChange={signupHandler}
                        >
                            Login
                        </button>
                        <a href="#" className="login-signup-link">
                            Already have an account, Log In
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Signup