import React, { createContext, useContext, useState } from 'react';
import DropZone from "./DropZone";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragItem from "./DragItem";
import { ItemState } from "./ItemState";
import { Button, Grid, Modal, Popover, Text, Tooltip } from "@mantine/core";
import { ModiContext } from "../Gamemodi";
import { IoIosInformationCircleOutline } from "react-icons/io";

import JsonList from "../../Resources/Json/ZuordnungData.json";

import { FcQuestions } from "react-icons/fc";

export const ItemContext = createContext({
    markAsX: (_id, _state) => {
    }
});
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
        content: "Ordne die grauen Elemente den zwei unteren Boxen zu. "
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

const Zuordnung = () => {
    const [fragen] = useState([]);
    const [antworten, setAntworten] = useState([]);
    const [openedModal, setOpenedModal] = useState(false);
    const [openedPopover, setOpenedPopover] = useState(false);
    const [modalContent, setModalContent] = useState(modalContent1[0]);
    const [allRight, setAllRight] = useState(false);

    const { markAsPassed } = useContext(ModiContext);


    if (fragen[0] === undefined) {
        let fragenId = 1;
        JsonList.map(object => {
            let frage = {
                id: fragenId,
                frage: object.frage,
            };
            fragen.push(frage);
            let antwortId = 1;
            object.antworten.map(a => {
                let antwort = {
                    id: ((antwortId) + 10 * fragenId),
                    text: a.text,
                    state: ItemState.NOTSELECTED,
                    right: false
                };
                antworten.push(antwort)
                antwortId++;
            });
            fragenId++;
        });

        setAntworten(shuffle(antworten));
    }


    const markAsX = (id, state) => {
        const draggedItem = antworten.filter((i) => i.id === id)[0];
        draggedItem.state = state;
        setAntworten(antworten.filter((i) => i.id !== id).concat(draggedItem));
    }


    const checkIfAllRight = () => {
        if (antworten.filter(antwort => antwort.state === ItemState.NOTSELECTED).length !== 0) {
            setOpenedPopover(true);
            setAllRight(false);
            return;
        }

        antworten.map(antwort => {
            if (antwort.state === ItemState.UP)
                antwort.right = Math.floor(antwort.id / 10) === 1;
            else if (antwort.state === ItemState.DOWN)
                antwort.right = Math.floor(antwort.id / 10) === 2;
            else
                antwort.right = false;
        })

        if (antworten.filter(antwort => antwort.right === false).length === 0) {
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
        <div className="container-zuordnung">
            <DndProvider backend={HTML5Backend}>
                <ItemContext.Provider value={{ markAsX }}>
                    <div className="zuordnung-header">
                        <Grid justify={"space-between"} >
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
                                        setOpenedModal(false);
                                        setModalContent(modalContent1[0])
                                    }}

                                    title={<IoIosInformationCircleOutline />}
                                >
                                    <h3 style={{ lineHeight: 2.5, fontSize: 22 }}>
                                        {modalContent.title}
                                    </h3>

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
                                    <div style={{ display: 'flex' }}>
                                        <Text size="sm">Du musst erst alle Boxen einsetzen</Text>
                                    </div>
                                </Popover>

                                <Tooltip label="Du muss alles richtig haben um weiter zu machen!">
                                    <Button onClick={() => markAsPassed('Ablaufanordnung')}
                                        disabled={!allRight}> Weiter</Button>
                                </Tooltip>
                            </Grid.Col>
                            <Grid.Col span={2}>
                                <div style={{ textAlign: 'end' }}>
                                    <Button style={{
                                        background: 'transparent'
                                    }} onClick={() => {
                                        setModalContent(modalContent1[3])
                                        setOpenedModal(true)
                                    }} ><FcQuestions size={32} /></Button>
                                </div>

                            </Grid.Col>
                        </Grid>


                    </div>
                    {/*heap of items */}
                    <div className="item-heap">
                        <DropZone type="Left">
                            Left
                            {
                                antworten.filter(a => a.state === ItemState.NOTSELECTED).map(i => (
                                    <DragItem key={i.id} state={i.state} text={i.text} id={i.id}
                                        right={i.right} />
                                )
                                )
                            }
                        </DropZone>

                    </div>
                    <div className="answer-heap">
                        {/*left answer container*/}
                        <DropZone type="Up">
                            {
                                fragen[0].frage
                            }
                            {
                                antworten.filter(a => a.state === ItemState.UP).map(i => (
                                    <DragItem key={i.id} state={i.state} text={i.text} id={i.id}
                                        right={i.right} />)
                                )
                            }
                        </DropZone>
                        {/*right answer container*/}
                        <DropZone type="Down">
                            {
                                fragen[1].frage
                            }
                            {
                                antworten.filter(a => a.state === ItemState.DOWN).map(i => (
                                    <DragItem key={i.id} state={i.state} text={i.text} id={i.id}
                                        right={i.right} />)
                                )
                            }
                        </DropZone>

                    </div>

                </ItemContext.Provider>
            </DndProvider>
        </div >
    );
}

export default Zuordnung;
