/* Plugins. */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

/* Components. */
import Loader from "./Loader";

/* Helpers. */
import loginValidation from "../helpers/login";

/* Images. */
import banner from '../Assets/Images/loginBanner.svg';

/* Styles. */
import '../Assets/Styles/login.css';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        let localStorageData = localStorage.getItem('isLoggedIn');
        if (localStorageData === "true") {
            navigate('/');
        };
        setLoader(false);
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    /* Submit functionality. */
    const handleSubmit = (e) => {
        e.preventDefault();

        let { isError, errorMessage } = loginValidation(formData);
        if (isError) {
            toast.error(errorMessage)
            return '';
        };

        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = users.find(user => user.email === formData.email && user.password === formData.password);

        if (user) {
            localStorage.setItem("isLoggedIn", true);
            navigate('/')
        } else toast.error('Invalid credentials.');
    };

    return loader ? <Loader /> : (
        <div className="login-wrapper">
            <div style={{ backgroundImage: `url(${banner})` }} className="login-banner" />
            <div className="login-form-container">
                <div className="login-form-wrapper">

                    <div className="login-header-wrapper">
                        <h2 className="login-header">Sign in</h2>
                        <span className="login-second-header">Please enter Email and password.</span>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="login-input-wrapper">
                            <label className="login-input-label">Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="login-input-field"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="login-input-wrapper">
                            <label className="login-input-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="login-input-field"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="login-btn-wrapper">
                            <button type="submit" className="login-btn">Login</button>
                        </div>

                        <div className="login-link-btn-wrapper">
                            <Link to={'/register'} className="login-link-btn">New to web page ?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;