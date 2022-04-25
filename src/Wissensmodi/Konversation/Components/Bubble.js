import React from "react";
import "../Konversation.css";

import img2 from 'C:/Users/basti/qwertz/ot-awareness/src/Mainpages/images/avatar2mitkreis.png'


const Bubble = () => (
    <div className="theoretic-conversation">
        <div className="bubble-right">
            <img src={img2} alt='Avatar'/>
            <p>Textfeld</p>
            <p>Textfeld</p>
            <p>Textfeld</p>
            <p>Textfeld</p>
        </div>
        <div className="bubble-left">
            <img src={img2} alt='Avatar'/>
            <p>Textfeld</p>
            <p>Textfeld</p>
            <p>Textfeld</p>
            <p>Textfeld</p>
        </div>
    </div>
);
export default Bubble;
