import React from "react";
import EndscreenItem from "./EndscreenItem";
import EndscreenData from "./../EndscreenData";

const EndscreenPlace = () => EndscreenData.length > 0 && (

    <div className="endscreen-container">
        {EndscreenData.map((data, idx) => (
            <EndscreenItem data={data} key={idx}/>
        ))}
   </div>

); 

export default EndscreenPlace;