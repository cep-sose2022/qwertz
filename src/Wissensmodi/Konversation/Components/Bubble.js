import React from "react";
import "../Konversation.css";

import img2 from './../../../Mainpages/images/avatar2mitkreis.png'


const Bubble = () => (
        <div className='bubble-left'>
            <img src={img2} alt='Avatar'/>

            <p>Textfeld</p>
        </div>

);
export default Bubble;
