import React from "react";
import "../Konversation.css";

const Bubble = ({text, category}) => {
    let element;

    if (category === "bubble-right") {
        // chatelemet right
        element = <p className={category}>{text}</p>
    } else {
        // chatelemet left
        element = <p className={category}>{text}</p>

    }


    return (
        element
    )


};
export default Bubble;
