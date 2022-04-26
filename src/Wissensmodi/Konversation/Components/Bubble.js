import React from "react";
import "../Konversation.css";

import img2 from './../../../Resources/images/avatarmitkreis.png';


const Bubble = ({text,category}) => (
        <div className={category}>
            <img src={img2} alt='Avatar'/>
            <p>{text}</p>
        </div>


);
export default Bubble;
