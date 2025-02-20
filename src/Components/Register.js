import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  useEffect(() => {
    let localStorageData = localStorage.getItem('isLoggedIn');
    if (localStorageData === "true") navigate('/')
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration Successful!");
      navigate('/login')
      setFormData({ username: "", email: "", password: "", confirmPassword: "", phone: "" });
    }
  };

  return (
    <div className="register-form-wrapper">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}

        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}

        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}

        <button type="submit" style={{ width: '90px', height: '30px', borderRadius: '5px', backgroundColor: 'red', cursor: 'pointer' }}>Register</button>
      </form>
    </div>
  );
};

export default Register;
