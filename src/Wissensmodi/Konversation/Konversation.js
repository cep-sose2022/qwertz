import React, {useState} from "react";
import "./Konversation.css"

import Data from "../../Resources/Json/KonversationData.json";
import Bubble from "./Components/Bubble";


const Konversation = () => {
    const [bubbles, setBubbles] = useState([]);


    if (bubbles[0] === undefined) {
        Data.map(object => {
            let bubble = {
                id: Math.floor(Math.random() * 10000),
                text: object.text,
                category: object.category,
                selected: false
            }
            bubbles.push(bubble);
        })

    }

    const abbilden = () => {
        const nextBubble = bubbles.filter(bubble => bubble.selected === false)[0];
        nextBubble.selected = true;
        setBubbles(bubbles.filter(bubble => bubble.id !== nextBubble.id).concat(nextBubble));

    }
    return (
        <div className="theoretic-conversation">
            <div className="chatelemente">
                {
                    bubbles.filter(bubbles => bubbles.selected === true).map(
                        bubbles => <Bubble key={bubbles.id} category={bubbles.category} text={bubbles.text}/>
                    )
                }

                {
                    bubbles.filter(bubbles => bubbles.selected === false) >= 0 ?
                        null :
                        <button onClick={abbilden} className="loading-button"><span>.</span><span>.</span><span>.</span>
                        </button>
                }
            </div>
        </div>
    )

};

export default Konversation;
