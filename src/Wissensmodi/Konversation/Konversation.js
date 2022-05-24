import React, {useContext, useEffect, useState} from "react";
import "./Konversation.css";


import JsonList from "../../Resources/Json/KonversationData.json";
import Bubble from "./Components/Bubble";
import {ModiContext} from "../../Gamemodi/Gamemodi";
import {useScrollIntoView} from "@mantine/hooks";
import ModiHeader from "../../Gamemodi/ModiHeader";
import service from "../../service";
import storage from "../../storage";
import {useNavigate} from "react-router";

const modalData = [
    {
        title: "Spielerklärung",
        content: "Klick einfach un les " //TODO sinnvoller text
    }
]

const Konversation = () => {
    const eigenerName = "Konversation";
    const [bubbles, setBubbles] = useState([]);
    const [modalContent] = useState(modalData[0]);
    const [openedModal, setOpenedModal] = useState(false);
    const [allRight, setAllRight] = useState(false);
    const {scrollIntoView, targetRef, scrollableRef} = useScrollIntoView({duration: 200});

    const {redirect} = useContext(ModiContext);

    const navigator = useNavigate();

    // TODO des muss alles in jeden modi

    // um zu dem Modi umzuleiten, der gerade daran is
    useEffect(() => {
        redirect(eigenerName)
        // läd die daten aus der DB und schreib sie in eine const
        if (bubbles[0] === undefined) {
            let Data = service.getKonversation(storage.getBadgeID(), storage.getModiID())
            if (Data === undefined) {
                navigator('../../Error503')
                return
            } else if (Data === null) {
                console.error("DB nicht erreichbar, nutze Demo Daten")
                // navigator('../../Error503')
                Data = JsonList
            }

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
    })
    // TODO bis hier

    // zum anzeigen des Nächsten Textes
    const abbilden = () => {
        const nextBubble = bubbles.filter(bubble => bubble.selected === false)[0];
        if (nextBubble !== undefined) {
            nextBubble.selected = true;
            setBubbles(bubbles.filter(bubble => bubble.id !== nextBubble.id).concat(nextBubble));
        }

        if (bubbles.filter(bubbles => bubbles.selected === false) >= 0)
            setAllRight(true);
    }

    return (
        <div className="konversation-container">
            <div className="konversation-header">
                <ModiHeader
                    setModalContent={null}
                    modalContent={modalContent}
                    openedModal={openedModal}
                    setOpenedModal={setOpenedModal}
                    openedPopover={null}
                    setOpenedPopover={null}
                    checkIfAllRight={null}
                    eigenerName={eigenerName}
                    allRight={allRight}
                    modalData={modalData}
                    aufgabenstellungVisible={false}
                    fertigVisible={false}
                    tooltipText="Du musst alles gelesen haben um weiter zu machen!"
                    popoverText=""
                />
            </div>

            <div className="konversation-body">
                <div className="theoretic-conversation" onClick={() => {
                    abbilden();
                    setTimeout(() => scrollIntoView({alignment: 'end'})
                        , 50)

                }}>
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

                        <div className="chat-objects" ref={scrollableRef}>
                            {
                                bubbles.filter(bubbles => bubbles.selected === true).map(
                                    bubbles => <Bubble key={bubbles.id} category={bubbles.category}
                                                       text={bubbles.text}/>
                                )
                            }

                            {
                                allRight ?
                                    null :
                                    <button className="loading-button" id="loading-Button" ref={targetRef}>
                                        <span>.</span><span>.</span><span>.</span>
                                    </button>

                            }
                        </div>

                        <div className="bottom_wrapper">
                            <textarea className="message_input" placeholder="type a message"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Konversation;
