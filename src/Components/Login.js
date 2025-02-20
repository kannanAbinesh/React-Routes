import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    useEffect(() => {
        let localStorageData = localStorage.getItem('isLoggedIn');
        if(localStorageData === "true") navigate('/') 
    }, [navigate]);

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            (user) => user.email === formData.email && user.password === formData.password
        );

        if (user) {
            localStorage.setItem("isLoggedIn", true);
            alert("Login Successful!");
            navigate('/')
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="register-form-wrapper">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <button type="submit" style={{ width: '90px', height: '30px', borderRadius: '5px', backgroundColor: 'red', cursor: 'pointer' }}>Login</button>
                <div style={{ marginTop: '10px' }}>
                    <Link to={'/register'} style={{ display: 'inline-block' }}>New to web page?</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;