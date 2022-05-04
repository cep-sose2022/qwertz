import React from "react";
import "../Konversation.css";

const Bubble = ({text, category}) => {
    let element;

    if (category === "bubble-right") {
        // chatelemet mit Image links
        element = <p className={category}>{text}</p>
    } else {
        // chatelemet mit Image rechts
        element = <p className={category}>{text}</p>

    }


    return (
        element
    )


};
export default Bubble;
