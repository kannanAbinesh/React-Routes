/* Plugins. */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

/* Helpers. */
import registerValidation from "../helpers/register";

/* Images. */
import banner from '../Assets/Images/registerBanner.svg';

/* Styles. */
import '../Assets/Styles/register.css';

const Register = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: "", email: "", password: "", phoneNumber: "" });

    useEffect(() => {
        let localStorageData = localStorage.getItem('isLoggedIn');
        if (localStorageData === "true") navigate('/')
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

        let { isError, errorMessage } = registerValidation(formData);
        if (isError) {
            toast.error(errorMessage)
            return '';
        };

        let usersData = JSON.parse(localStorage.getItem("users")) || [];
        usersData.push({ ...formData, id: new Date() });
        localStorage.setItem("users", JSON.stringify(usersData));
        navigate('/login');
        setFormData({ username: "", email: "", password: "", phone: "" });
    };

    return (
        <div className="register-wrapper">
            <div style={{ backgroundImage: `url(${banner})` }} className="register-banner" />
            <div className="register-form-container">
                <div className="register-form-wrapper">

                    <div className="register-header-wrapper">
                        <h2 className="register-header">Sign up</h2>
                        <span className="register-second-header">Please fill all fields to get register.</span>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="register-input-wrapper">
                            <input
                                type="text"
                                name="username"
                                placeholder="Name"
                                className="register-input-field"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="register-input-wrapper">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="register-input-field"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="register-input-wrapper">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="register-input-field"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="register-input-wrapper">
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                pattern="[0-9]{10}"
                                className="register-input-field"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="register-btn-wrapper">
                            <button
                                type="submit"
                                className="register-btn"
                                disabled={
                                    !formData.username ||
                                    !formData.email ||
                                    !formData.password ||
                                    !formData.phoneNumber
                                }
                            >Register</button>
                        </div>

                        <div className="register-link-btn-wrapper">
                            <Link to={'/login'} className="register-link-btn">Already have an account ?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;