import React, { createContext, useState, useContext } from 'react';
import DropZone from "./DropZone";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragItem from "./DragItem";
import { ItemState } from "./ItemState";
import { Button, Group, Modal, Popover, Text, Tooltip } from "@mantine/core";
import { ModiContext } from "../Gamemodi";

import JsonList from "../../Resources/Json/ZuordnungData.json";

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
    }
]

export const ItemContext = createContext({
    markAsX: (_id, _state) => {
    }
});

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

    const {markAsPassed, setCurrentModiTitle} = useContext(ModiContext);
    setCurrentModiTitle("Zuordnung");


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
        <DndProvider backend={HTML5Backend}>
            <ItemContext.Provider value={{ markAsX }}>
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

                <div className="background">
                    <div>
                        <DropZone type="Left">
                            Left
                            {
                                antworten.filter(a => a.state === ItemState.NOTSELECTED).map(i => (
                                    <DragItem key={i.id} state={i.state} text={i.text} id={i.id} right={i.right} />
                                )
                                )
                            }
                        </DropZone>
                    </div>

                    <div>
                        <DropZone type="Up">
                            {
                                fragen[0].frage
                            }
                            {
                                antworten.filter(a => a.state === ItemState.UP).map(i => (
                                    <DragItem key={i.id} state={i.state} text={i.text} id={i.id} right={i.right} />)
                                )
                            }
                        </DropZone>
                    </div>

                    <div>
                        <DropZone type="Down">
                            {
                                fragen[1].frage
                            }
                            {
                                antworten.filter(a => a.state === ItemState.DOWN).map(i => (
                                    <DragItem key={i.id} state={i.state} text={i.text} id={i.id} right={i.right} />)
                                )
                            }
                        </DropZone>
                    </div>

                    <Group position="apart">
                        <Popover
                            opened={openedPopover}
                            onClose={() => setOpenedPopover(false)}
                            target={<Button onClick={checkIfAllRight}>Fertig</Button>}
                            width={260}
                            position="bottom"
                            withArrow
                        >
                            <div style={{ display: 'flex' }}>
                                <Text size="sm">Du musst erst alle Boxen zuordnen</Text>
                            </div>
                        </Popover>

                        <Tooltip label="Du muss alles richtig haben um weiter zu machen!">
                            <Button onClick={() => markAsPassed('Zuordnung')} disabled={!allRight}> Weiter</Button>
                        </Tooltip>
                    </Group>

                </div>
            </ItemContext.Provider>
        </DndProvider>
    );
}

export default Zuordnung;
