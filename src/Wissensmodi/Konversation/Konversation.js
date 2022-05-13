import React, {useContext, useState} from "react";
import "./Konversation.css";
import {Button, Tooltip} from '@mantine/core';


import Data from "../../Resources/Json/KonversationData.json";
import Bubble from "./Components/Bubble";
import {ModiContext} from "../../Gamemodi/Gamemodi";

const Konversation = () => {
    const [bubbles, setBubbles] = useState([]);
    let allRight = false;

    const {markAsPassed} = useContext(ModiContext);

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
        if (nextBubble !== undefined) {
            nextBubble.selected = true;
            setBubbles(bubbles.filter(bubble => bubble.id !== nextBubble.id).concat(nextBubble));
        }
    }
    return (
        <div>
            <div className="theoretic-conversation" onClick={abbilden}>
                <div className="theoretic-conversation-body">
                    <div className="chat-window">
                        <div className="top-menu">
                            <div className="buttons">
                                <div className="button close"/>
                                <div className="button minimize"/>
                                <div className="button maximize"/>
                            </div>
                            <div className="title-chat">
                                <p>Chat</p>
                            </div>

                        </div>

                    </div>


                    <div className="chat-objects">
                        {
                            bubbles.filter(bubbles => bubbles.selected === true).map(
                                bubbles => <Bubble key={bubbles.id} category={bubbles.category}
                                    text={bubbles.text} />
                            )
                        }

                        {
                            bubbles.filter(bubbles => bubbles.selected === false) >= 0 ?
                                allRight = true :
                                <button className="loading-button" id="loading-Button">
                                    <span>.</span><span>.</span><span>.</span>
                                </button>

                        }
                    </div>

                    <div className="bottom_wrapper">
                        <textarea  className="message_input" placeholder="type a message"/>
                        <Tooltip disabled={allRight} label="Du musst die Einheit erst abschließen um weiter zu machen!">
                            <Button onClick={() => markAsPassed('Konversation')} disabled={!allRight}> Weiter</Button>
                        </Tooltip>
                    </div>
                </div>
            </div>

        </div>

    )


};

export default Konversation;
