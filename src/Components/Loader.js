/* Plugins. */
import Lottie from "lottie-react";

/* Animations. */
import loaderAnimation from "../Assets/Animations/loaderAnimation.json";

/* Styles. */
import '../Assets/Styles/loader.css';

const Loader = () => {
    return (
        <div className="loader-wrapper">
            <Lottie animationData={loaderAnimation} loop autoPlay className="loader" />
        </div>
    );
};

export default Loader;
