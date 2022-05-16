import React, { useContext, useState } from "react";
import "./Konversation.css";
import { Button, Tooltip, Grid, Modal, Title, Popover, Text } from '@mantine/core';


import Data from "../../Resources/Json/KonversationData.json";
import Bubble from "./Components/Bubble";
import { ModiContext } from "../../Gamemodi/Gamemodi";

const Konversation = () => {
    const [bubbles, setBubbles] = useState([]);
    const [buttons, setButton] = useState([]);
    const [modalContent, setModalContent] = useState('');
    const [openedModal, setModalOpened] = useState(false);
    const [setAllRight] = useState(false);
    let allRight = false;

    const { markAsPassed } = useContext(ModiContext);

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
    const modalContent1 = [
        {
            title: "Aufgabenstellung",
            content: "hier hast du eine Wichtige und coole aufgabe"
        },
        {
            title: "Leider Falsch",
            content: "Leider nicht alles richtig, schaue dir das noch mal an."
        },
        {
            title: "Alles Richtig",
            content: "Super du hast alles richtig!"
        }, {
            title: "Spielerklärung",
            content: "Ordne die Elemente den zwei Verschiedenen Boxen zu. "
        }
    ]

    const abbilden = () => {
        const nextBubble = bubbles.filter(bubble => bubble.selected === false)[0];
        if (nextBubble !== undefined) {
            nextBubble.selected = true;
            setBubbles(bubbles.filter(bubble => bubble.id !== nextBubble.id).concat(nextBubble));
        }
    }
    return (
        <div className="konversation-container">
            <div className="konversation-header">
                <Grid justify={"center"} >
                    <Grid.Col span={2}>

                        <Modal
                            transition="slide-down"
                            transitionDuration={900}
                            // transitionTimingFunction="ease"
                            overlayOpacity={0.55}
                            overlayBlur={3}
                            style={{ fontSize: 20 }}
                            // bgColor='red'
                            centered
                            opened={openedModal}
                            onClose={() => {
                                setModalOpened(false);
                            }}

                        >

                            <Title size="sm" style={{ lineHeight: 2.5, fontSize: 22 }}>
                                {modalContent}
                            </Title>

                            <p>{modalContent}</p>
                        </Modal>
                        <Button onClick={() => {
                            setModalContent("test")
                            setModalOpened(true)
                        }}>Aufgabenstellung</Button>
                    </Grid.Col>

                    <Grid.Col span={2}>
                        <Popover
                            target={<Button onClick={"test"}>Fertig</Button>}
                            width={260}
                            position="bottom"
                            withArrow
                        >
                            <div style={{ display: 'flex' }}>
                                <Text size="sm">Du musst erst alle Boxen einsetzen</Text>
                            </div>
                        </Popover>

                        <Tooltip label="Du muss alles richtig haben um weiter zu machen!">
                            <Button onClick={() => markAsPassed('Konversation')}
                                disabled={!allRight}> Weiter</Button>
                        </Tooltip>


                    </Grid.Col>

                </Grid>
            </div>

            <div className="konversation-body">
                <div>
                    <div className="theoretic-conversation" onClick={abbilden}>
                        <div className="theoretic-conversation-body">
                            <div className="chat-window">
                                <div className="top-menu">
                                    <div className="buttons">
                                        <div className="button close" />
                                        <div className="button minimize" />
                                        <div className="button maximize" />
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
                                <textarea className="message_input" placeholder="type a message" />
                                <Tooltip disabled={allRight} label="Du musst die Einheit erst abschließen um weiter zu machen!">
                                    <Button onClick={() => markAsPassed('Konversation')} disabled={!allRight}> Weiter</Button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Konversation;
