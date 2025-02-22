/* Plugins. */
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import Loader from "./Loader";

const PrivateRoutes = () => {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        let localStorageData = localStorage.getItem('isLoggedIn');
        if (localStorageData === "false" || !localStorageData) navigate('/login');
        else setLoader(false);
    }, [navigate]);

    return loader ? <Loader /> : (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
};

export default PrivateRoutes;