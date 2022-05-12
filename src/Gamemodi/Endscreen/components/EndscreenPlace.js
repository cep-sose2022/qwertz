import React from "react";
import EndscreenItem from "./EndscreenItem";
import EndscreenData from "./../EndscreenData";
import image from '../../../Resources/images/erlenmeyerkolben_gewonnen.png';
import gif from "./../../../Resources/konfetti_animiert.gif";

const EndscreenPlace = () => EndscreenData.length > 0 && (
    <div className="endscreen-container">
        {EndscreenData.map((data, idx) => (
            <EndscreenItem data={data} key={idx} />
        ))}
        <img className="imgerlen" src={image}></img>

    </div>


);

export default EndscreenPlace;