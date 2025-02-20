/* Plugins. */
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./NavBar";

const PrivateRoutes = () => {

    const navigate = useNavigate();

    useEffect(() => {
        let localStorageData = localStorage.getItem('isLoggedIn');
        if (localStorageData === "false" || !localStorageData) navigate('/login')
    }, []);

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
};

export default PrivateRoutes;