import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

    return (
        <nav style={{ position: "fixed", top: 0, width: "100%", background: "#333", padding: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", color: "white" }}>
            <div>
                <Link to="/dashboard" style={{ color: "white", marginRight: "15px" }}>Dashboard</Link>
                <Link to="/friends" style={{ color: "white", marginRight: "15px" }}>Friends</Link>
                <Link to="/profile" style={{ color: "white", marginRight: "15px" }}>Profile</Link>
            </div>
            <button onClick={handleLogout} style={{ background: "red", color: "white", padding: "5px 10px", border: "none", cursor: "pointer" }}>
                Logout
            </button>
        </nav>
    );
};

export default Navbar;