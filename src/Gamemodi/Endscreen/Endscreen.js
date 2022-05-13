import React from "react";
import EndscreenPlace from "./components/EndscreenPlace";
import "./Endscreen.css";

const Endscreen = () => {

    // const { setCurrentModiTitle } = useContext(ModiContext);
    // setCurrentModiTitle("Geschafft!");

    return (
        <div className="endscreen-body">
            <EndscreenPlace />
        </div>
    )
};

export default Endscreen;
