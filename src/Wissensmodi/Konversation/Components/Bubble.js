import React from "react";
import "../Konversation.css";

import img1 from './../../../Resources/images/erlenmeyerkolben_gruen_normal.png';
import img2 from './../../../Resources/images/erlenmeyerkolben_normal.png';

const Bubble = ({text, category}) => {
    let element;

    if (category === "bubble-right") {
        // chatelemet mit Image links
        element = <div className={category + "-msg-row"}>
            <div className={category + "-msg-text"}>
                <p>{text}</p>
            </div>
            <img src={img1} alt='Avatar' className={category + "-msg-img"}/>
        </div>
    } else {
        // chatelemet mit Image rechts
        element = <div className={category + "-msg-row"}>

                    <img src={img2} alt='Avatar' className={category + "-msg-img"}/>


            <div className={category + "-msg-text"}>
                {/*<h2>Name1</h2>*/}
                <p>{text}</p>
            </div>
        </div>
    }


    return (
        element
    )


};
export default Bubble;
