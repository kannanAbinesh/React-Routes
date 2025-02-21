/* Plugins. */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/* Images. */
import banner from '../Assets/Images/registerBanner.svg';
import { toast } from "react-toastify";

const Register = () => {

  const navigate = useNavigate();

  useEffect(() => {
    let localStorageData = localStorage.getItem('isLoggedIn');
    if (localStorageData === "true") navigate('/')
  }, [navigate]);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.username) tempErrors.username = "Username is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.password) tempErrors.password = "Password is required";
    else if (formData.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters long";
    }
    if (!formData.confirmPassword) tempErrors.confirmPassword = "Confirm Password is required";
    else if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.phone) tempErrors.phone = "Phone number is required";

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('pppppppppppp')
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration Successful!");
      navigate('/login')
      setFormData({ username: "", email: "", password: "", confirmPassword: "", phone: "" });
    } else {
      toast.error('Somthing')
    }
  };

  return (
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
              <input
                type="text"
                name="userName"
                placeholder="Name"
                className="login-input-field"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="login-input-wrapper">
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
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="login-input-field"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="login-input-wrapper">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                className="login-input-field"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="login-btn-wrapper">
              <button type="submit" className="login-btn">Login</button>
            </div>

            <div className="login-link-btn-wrapper">
              <Link to={'/register'} className="login-link-btn">New to web page?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    // <div className="register-form-wrapper">
    //   <h2>Register</h2>
    //   <form onSubmit={handleSubmit}>
    //     <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
    //     {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}

    //     <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
    //     {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

    //     <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
    //     {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

    //     <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
    //     {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}

    //     <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
    //     {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}

    //     <button type="submit" style={{ width: '90px', height: '30px', borderRadius: '5px', backgroundColor: 'red', cursor: 'pointer' }}>Register</button>
    //   </form>
    // </div>
  );
};

export default Register;
