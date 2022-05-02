import React from "react";
import "../Konversation.css";


import img2 from './../../../Resources/images/avatarmitkreis.png';

const Bubble = ({text, category}) => {
    let element;

    if (category === "bubble-right") {
        element = <div className={category + "-msg-row"}>
            <div className={category + "-msg-text"}>
                <h2>Name1</h2>
                <p>{text}</p>
            </div>
            <img src={img2} alt='Avatar' className={category + "-msg-img"}/>
        </div>
    } else {
        element = <div className={category + "-msg-row"}>
            <img src={img2} alt='Avatar' className={category + "-msg-img"}/>
            <div className={category + "-msg-text"}>
                <h2>Name1</h2>
                <p>{text}</p>
            </div>
        </div>
    }


    return (
        element
    )


};
export default Bubble;
