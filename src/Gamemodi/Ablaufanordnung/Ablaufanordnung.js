import React, {createContext, useContext, useState} from 'react';
import {DndProvider} from "react-dnd";
import CardStorage from "./CardStorage";
import './Ablaufanordnung.css'
import DragCard from "./DragCard";
import {ItemState} from "./ItemState";
import {HTML5Backend} from "react-dnd-html5-backend";
import JsonList from "../../Resources/Json/AblaufanordnungData.json";
import DropBox from "./DropBox";
import {Button, Grid, Modal, Popover, SimpleGrid, Text, Tooltip} from "@mantine/core";

import {ModiContext} from "../Gamemodi";
import {IoIosInformationCircleOutline} from "react-icons/io";

import {FcQuestions} from "react-icons/fc";

export const CardContext = createContext({
    markAsX: (_id, _state) => {
    }
});

const modalData = [
    {
        title: "Spielerklärung",
        content: "(Sachverhalt/Problem beschreiben). Ordne nun die Sätze."
    },
    {
        title: "Leider Falsch",
        content: "Leider nicht alles richtig, schaue dir das noch mal an."
    },
    {
        title: "Alles Richtig",
        content: "Super du hast alles richtig!"
    },
    {
        title:"Aufgabenstellung",
        content:"Ein externer Mitarbeiter hat ein infiziertes Wartungsgerät verwendet welches zuvor schon in ihrem ICS-Netzwerk verwendet wurde. Vermutlich hatte der externe sich die Schadsoftware über das Internet eingefangen und nun durch das erneute verbinden in Ihr ICS-System versehentlich Schadsoftware eingeschleust. Glücklicherweise wurde dies sofort Erkannt wie gehen Sie nun vor?"
    }
]

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const Ablaufanordnung = () => {
    const eigenerName = 'Ablaufanordnung';
    const [cards, setCards] = useState([]);
    const [boxes] = useState([]);
    const [openedModal, setOpenedModal] = useState(true);
    const [openedPopover, setOpenedPopover] = useState(false);
    const [modalContent, setModalContent] = useState(modalData[3]);
    const [allRight, setAllRight] = useState(false);

    const {markAsPassed} = useContext(ModiContext);

    // läd die daten aus der DB und schreib sie in eine const
    let id = 1;
    if (cards[0] === undefined) {
        JsonList.map(object => {
                let card = {
                    key: Math.floor(Math.random() * 100000),
                    id: id++,
                    text: object.text,
                    state: ItemState.WRONG,
                    boxId: 0
                }
                cards.push(card);
                let box = {
                    key: Math.floor(Math.random() * 100000),
                    id: card.id
                };
                boxes.push(box);
            }
        )
        setCards(shuffle(cards));
    }

    // legt eine Karte in die angegebene Box, taucht gegebenenfalls die Karte die da dirn liegt mit sich
    const markAsX = (id, boxId) => {
        const draggedCard = cards.filter(card => card.id === id)[0];
        let otherCard = cards.filter(card => card.boxId === boxId)[0];
        let newBoxId = undefined;

        if (otherCard !== undefined && otherCard.boxId !== 0 && otherCard.id !== id)
            newBoxId = draggedCard.boxId;

        draggedCard.boxId = boxId;
        if (newBoxId !== undefined)
            markAsX(otherCard.id, newBoxId);

        setCards(cards.filter(card => card.id !== id).concat(draggedCard));
    }

    // prüft, ob alle Boxen richtig zugeteilt sind, aber nur wenn auch alle zugeteilt wurden
    const checkIfAllRight = () => {
        if (cards.filter(card => card.boxId === 0).length !== 0) {
            setOpenedPopover(true);
            setAllRight(false);
            return;
        }

        boxes.map(box => {
            let card = cards.filter(card => card.boxId === box.id)[0];
            if (card !== undefined) {
                if (card.id === box.id)
                    card.state = ItemState.RIGHT;
                else
                    card.state = ItemState.WRONG;

                setCards(cards.filter(c => c.id !== card.id).concat(card));
            }
        })

        if (cards.filter(card => card.state === ItemState.WRONG).length === 0) {
            // alles Richtig
            setModalContent(modalData[2]);
            setOpenedModal(true);
            setAllRight(true);
        } else {
            // noch was Falsch
            setModalContent(modalData[1]);
            setOpenedModal(true);
            setAllRight(false);
        }
    }


    return (

        <div className="ablaufanordung-container">
            <DndProvider backend={HTML5Backend}>
                <CardContext.Provider value={{markAsX}}>
                    <div className="ablaufanordung-header">
                        <Grid justify={"space-between"}>
                            {/*Modal für die Aufgabenstellung und zum Anzusagen ob alles Richtig/falsch is*/}

                            <Grid.Col span={2}>
                                <Modal
                                    transition="slide-down"
                                    transitionDuration={900}
                                    overlayOpacity={0.55}
                                    overlayBlur={3}
                                    style={{fontSize: 20}}
                                    centered
                                    opened={openedModal}
                                    onClose={() => setOpenedModal(false)}
                                    title={<IoIosInformationCircleOutline size={32}/>}
                                >
                                    <h3 style={{lineHeight: 2.5, fontSize: 22}}>
                                        {modalContent.title}
                                    </h3>

                                    <p>{modalContent.content}</p>
                                </Modal>
                                <Button onClick={() => {setModalContent(modalData[3]); setOpenedModal(true)}}>
                                    Augabenstellung
                                </Button>
                            </Grid.Col>

                            {/* Popover um anzusagen das erst alle boxen zugeteilt werden müssen */}
                            <Grid.Col span={2}>
                                <Popover
                                    opened={openedPopover}
                                    onClose={() => setOpenedPopover(false)}
                                    target={<Button onClick={checkIfAllRight}>Fertig</Button>}
                                    width={260}
                                    position="bottom"
                                    withArrow
                                >
                                    <div style={{display: 'flex'}}>
                                        <Text size="sm">Du musst erst alle Boxen einsetzen</Text>
                                    </div>
                                </Popover>

                                <Tooltip label="Du muss alles richtig haben um weiter zu machen!">
                                    <Button onClick={() => markAsPassed(eigenerName)}
                                            disabled={!allRight}> Weiter</Button>
                                </Tooltip>
                            </Grid.Col>

                            {/* Button für die Spielerklärung */}
                            <Grid.Col span={2}>
                                <div style={{textAlign: 'end'}}>
                                    <Button style={{
                                        background: 'transparent'
                                    }} onClick={() => {
                                        setModalContent(modalData[0])
                                        setOpenedModal(true)
                                    }}><FcQuestions size={32}/></Button>
                                </div>

                            </Grid.Col>
                        </Grid>

                    </div>
                    <div className="ablaufanordung-body">
                        <CardStorage>
                            {
                                cards.filter(card => card.boxId === 0)
                                    .map(card => (
                                            <DragCard key={card.key} id={card.id} text={card.text} state={card.state}/>
                                        )
                                    )
                            }
                        </CardStorage>

                        {/* Grid wo alle Boxen in die doe Karten gelegt werden */}
                        <SimpleGrid style={{padding: 10,}}
                                    cols={4}
                                    spacing={75}
                                    breakpoints={[
                                        {maxWidth: 1400, cols: 3},
                                        {maxWidth: 1150, cols: 2},
                                        {maxWidth: 850, cols: 1},
                                    ]}
                        >
                            {
                                boxes.map(box => (
                                        <DropBox key={box.key} id={box.id}>
                                            {
                                                cards.filter(card => card.boxId === box.id).map(card => (
                                                        <DragCard key={card.id} id={card.id} text={card.text}
                                                                  state={card.state}/>
                                                    )
                                                )
                                            }
                                        </DropBox>
                                    )
                                )
                            }
                        </SimpleGrid>

                    </div>
                </CardContext.Provider>
            </DndProvider>
        </div>
    );
}

export default Ablaufanordnung;
