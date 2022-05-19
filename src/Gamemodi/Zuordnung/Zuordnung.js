import React, {createContext, useContext, useState} from 'react';
import DropZone from "./DropZone";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import DragItem from "./DragItem";
import {ItemState} from "./ItemState";
import {Button, Grid, Modal, Popover, Text, Tooltip} from "@mantine/core";
import {ModiContext} from "../Gamemodi";
import {IoIosInformationCircleOutline} from "react-icons/io";

import JsonList from "../../Resources/Json/ZuordnungData.json";

import {FcQuestions} from "react-icons/fc";

export const ItemContext = createContext({
    markAsX: (_id, _state) => {
    }
});

const modalData = [
    {
        title: "Spielerklärung",
        content: "Ordne die Elemente den zwei Verschiedenen Boxen zu. "
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

const Zuordnung = () => {
    const eigenerName = 'Zuordnung';
    const [fragen] = useState([]);
    const [antworten, setAntworten] = useState([]);
    const [openedModal, setOpenedModal] = useState(false);
    const [openedPopover, setOpenedPopover] = useState(false);
    const [modalContent, setModalContent] = useState(modalData[0]);
    const [allRight, setAllRight] = useState(false);

    const {markAsPassed} = useContext(ModiContext);


    // läd die daten aus der DB und schreib sie in eine const
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


    // makiert eine Box als den übergebenen status
    const markAsX = (id, state) => {
        const draggedItem = antworten.filter((i) => i.id === id)[0];
        draggedItem.state = state;
        setAntworten(antworten.filter((i) => i.id !== id).concat(draggedItem));
    }


    // prüft, ob alle Boxen richtig zugeteilt sind, aber nur wenn auch alle zugeteilt wurden
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
        <div className="container-zuordnung">
            <DndProvider backend={HTML5Backend}>
                <ItemContext.Provider value={{markAsX}}>
                    <div className="zuordnung-header">
                        <Grid justify={"center"} columns={8}>

                            {/*Modal für die Aufgabenstellung und zum Anzusagen ob alles Richtig/falsch is*/}
                            <Modal
                                transition="slide-down"
                                transitionDuration={900}
                                overlayOpacity={0.55}
                                overlayBlur={3}
                                style={{fontSize: 20}}
                                centered
                                opened={openedModal}
                                onClose={() => setOpenedModal(false)}
                                title={<IoIosInformationCircleOutline/>}
                            >
                                <h3 style={{lineHeight: 2.5, fontSize: 22}}>
                                    {modalContent.title}
                                </h3>
                                <p>{modalContent.content}</p>
                            </Modal>

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
                            </Grid.Col>
                            <Grid.Col span={5}>


                                {/* Weiter Button der nur geht wenn alles richtig is */}
                                <Tooltip label="Du muss alles richtig haben um weiter zu machen!">
                                    <Button onClick={() => markAsPassed(eigenerName)}
                                            disabled={!allRight}> Weiter</Button>
                                </Tooltip>
                            </Grid.Col>


                            {/* Button für die Spielerklärung */}
                            <Grid.Col span={1}>
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
                    <div>
                        <Grid columns={24}>
                            <Grid.Col span={10}>
                                {/*heap of items */}
                                <div className="item-heap">
                                    {/* Storage für die antworten */}
                                    <DropZone type="Left">
                                        {
                                            antworten.filter(a => a.state === ItemState.NOTSELECTED).map(i => (
                                                    <DragItem key={i.id} state={i.state} text={i.text} id={i.id}
                                                              right={i.right}/>
                                                )
                                            )
                                        }
                                    </DropZone>
                                </div>
                            </Grid.Col>
                            <Grid.Col span={14}>

                                <div className="answer-heap">
                                    {/*left answer container*/}

                                    <div className="upContainer">
                                        <div className="header"><h3 style={{
                                            backgroundColor: "#F88301",
                                            textAlign: "center",
                                            itemsAlign: 'center',
                                            width: 'auto',
                                            paddingBottom: '10px',
                                            margin: 'auto'
                                        }}>{
                                            fragen[0].frage
                                        }</h3>
                                        </div>

                                        <DropZone type="Up">

                                            {
                                                antworten.filter(a => a.state === ItemState.UP).map(i => (
                                                    <DragItem key={i.id} state={i.state} text={i.text} id={i.id}
                                                              right={i.right}/>)
                                                )
                                            }
                                        </DropZone>
                                    </div>
                                    {/*right answer container*/}
                                    <div className="downContainer">
                                        <div className="header">
                                            <h3 style={{
                                                backgroundColor: "#01BC60",
                                                textAlign: "center",
                                                itemsAlign: 'center',
                                                width: 'auto',
                                                paddingBottom: '10px',
                                                margin: 'auto'
                                            }}>{
                                                fragen[1].frage
                                            }</h3>
                                        </div>
                                        <DropZone type="Down">
                                            {
                                                antworten.filter(a => a.state === ItemState.DOWN).map(i => (
                                                    <DragItem key={i.id} state={i.state} text={i.text} id={i.id}
                                                              right={i.right}/>)
                                                )
                                            }
                                        </DropZone>
                                    </div>
                                </div>
                            </Grid.Col>
                        </Grid>
                    </div>
                </ItemContext.Provider>
            </DndProvider>
        </div>
    );
}

export default Zuordnung;
