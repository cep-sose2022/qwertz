import React, { useContext } from "react";
import EndscreenPlace from "./components/EndscreenPlace";
import "./Endscreen.css";
import { ModiContext } from "../Gamemodi";

const Endscreen = () => {

    const { setCurrentModiTitle } = useContext(ModiContext);
    // setCurrentModiTitle("Geschafft!");

    return (
        <div className="endscreen-body">
            <EndscreenPlace />
        </div>
    )
};

export default Endscreen;
