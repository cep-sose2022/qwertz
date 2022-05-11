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


export const CardContext = createContext({
    markAsX: (_id, _state) => {
    }
});

const modalContent1 = [
    {
        title: "Aufgabenstellung",
        content: "hier hast du eine Wichtige und coole Aufgabe"
    },
    {
        title: "Leider Falsch",
        content: "Leider nicht alles richtig, schaue dir das noch mal an."
    },
    {
        title: "Alles Richtig",
        content: "Super du hast alles richtig!"
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
    const [cards, setCards] = useState([]);
    const [boxes] = useState([]);
    const [openedModal, setOpenedModal] = useState(false);
    const [openedPopover, setOpenedPopover] = useState(false);
    const [modalContent, setModalContent] = useState(modalContent1[0]);
    const [allRight, setAllRight] = useState(false);

    const {markAsPassed, setCurrentModiTitle} = useContext(ModiContext);
    setCurrentModiTitle("Ablaufanordnung");
    const init = () => {
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
    }
    init();


    const markAsX = (id, boxId) => {
        const draggedCard = cards.filter(card => card.id === id)[0];
        let otherCard = cards.filter(card => card.boxId === boxId)[0];
        let newBoxId = undefined;

        if (otherCard !== undefined && otherCard.boxId !== 0 && otherCard.id !== id)
            newBoxId = draggedCard.boxId;

        draggedCard.boxId = boxId;
        // if (draggedCard.id === boxId)
        //     draggedCard.state = ItemState.RIGHT;
        // else
        //     draggedCard.state = ItemState.WRONG;
        if (newBoxId !== undefined)
            markAsX(otherCard.id, newBoxId);

        setCards(cards.filter(card => card.id !== id).concat(draggedCard));
    }

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
            setModalContent(modalContent1[2]);
            setOpenedModal(true);
            setAllRight(true);
        } else {
            // noch was Falsch
            setModalContent(modalContent1[1]);
            setOpenedModal(true);
            setAllRight(false);
        }
    }


    return (
        <div className="ablaufanordung-container">
            <DndProvider backend={HTML5Backend}>
                <CardContext.Provider value={{markAsX}}>
                    <div className="ablaufanordung-header">
                        <Grid justify={"center"} >
                            <Grid.Col span={2}>


                                <Modal
                                    centered
                                    opened={openedModal}
                                    onClose={() => {
                                        setOpenedModal(false);
                                        setModalContent(modalContent1[0])
                                    }}
                                    title={modalContent.title}
                                >
                                    <p>{modalContent.content}</p>
                                </Modal>
                                <Button onClick={() => setOpenedModal(true)}>Aufgabenstellung</Button>


                            </Grid.Col>

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
                                    <Button onClick={() => markAsPassed('Ablaufanordnung')}
                                            disabled={!allRight}> Weiter</Button>
                                </Tooltip>
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
                                        <DropBox key={box.key} id={box.id}
                                                 bgColor={
                                                     cards.filter(card => card.boxId === box.id)[0] !== undefined ?
                                                         (cards.filter(card => card.boxId === box.id)[0].state === ItemState.RIGHT ? 'green' : 'red')
                                                         : 'red'}>
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
