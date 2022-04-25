import React from "react";
import "../Konversation.css";

import img2 from './../../../Resources/images/avatarmitkreis.png';


const Bubble = ({data}) => (
        <div className={data.category}>
            <img src={img2} alt='Avatar'/>
            <p>{data.text}</p>
        </div>


);
export default Bubble;
