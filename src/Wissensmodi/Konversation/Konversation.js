import React, {useContext, useEffect, useState} from "react";
import "./Konversation.css";
import {Button, Tooltip, Grid, Modal, Title} from '@mantine/core';


import Data from "../../Resources/Json/KonversationData.json";
import Bubble from "./Components/Bubble";
import {ModiContext} from "../../Gamemodi/Gamemodi";
import {FcQuestions} from "react-icons/fc";
import {useScrollIntoView} from "@mantine/hooks";
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
    const [openedModal, setModalOpened] = useState(false);
    const [allRight, setAllRight] = useState(false);
    const {scrollIntoView, targetRef, scrollableRef} = useScrollIntoView({duration: 200});

    const {markAsPassed, redirect} = useContext(ModiContext);

    const navigator = useNavigate();

    // TODO des muss alles in jeden modi

    // um zu dem Modi umzuleiten, der gerade daran is
    useEffect(() => {
        redirect(eigenerName)
        // läd die daten aus der DB und schreib sie in eine const
        if (bubbles[0] === undefined) {
            const Data = service.getKonversation(storage.getBadgeID(), storage.getModiID())
            if (Data === null) {
                navigator('../../Error503')
                return
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
                <Grid justify={"space-between"}>
                    <Grid.Col span={2}>
                        <Modal
                            transition="slide-down"
                            transitionDuration={900}
                            overlayOpacity={0.55}
                            overlayBlur={3}
                            style={{fontSize: 20}}
                            centered
                            opened={openedModal}
                            onClose={() => {
                                setModalOpened(false);
                            }}
                        >
                            <Title size="sm" style={{lineHeight: 2.5, fontSize: 22}}>
                                {modalContent.title}
                            </Title>
                            <p>{modalContent.content}</p>
                        </Modal>
                    </Grid.Col>

                    {/* Weiter Button der nur geht, wenn alles gelesen wurde */}
                    <Grid.Col span={2}>
                        <Tooltip label="Du muss alles gelesen haben um weiter zu machen!">
                            <Button onClick={() => markAsPassed(eigenerName)}
                                    disabled={!allRight}> Weiter</Button>
                        </Tooltip>
                    </Grid.Col>

                    {/* Button für die Spielerklärung */}
                    <Grid.Col span={2}>
                        <div style={{textAlign: 'end'}}>
                            <Button style={{
                                background: 'transparent'
                            }} onClick={() => setModalOpened(true)}>
                                <FcQuestions size={32}/>
                            </Button>
                        </div>
                    </Grid.Col>
                </Grid>
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
