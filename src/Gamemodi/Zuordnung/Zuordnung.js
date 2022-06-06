import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router";

import DropZone from "./DropZone";
import DragItem from "./DragItem";

// import ReactDND for Drag and Drop
import { DndProvider } from "react-dnd";

// import HTML5 Backend
import { HTML5Backend } from "react-dnd-html5-backend";

// import ItemState for right and wrong answer
import { ItemState } from "./ItemState";

// import Mantine core library includes essential component
import { Grid } from "@mantine/core";

// import JsonList
import JsonList from "../../Resources/Json/ZuordnungData.json";

// import ModiHeader
import ModiHeader from "../ModiHeader";

// import ModiContext
import { ModiContext } from "../Gamemodi";

// import Backend to get the data from the database
import service from "../../service";
import storage from "../../storage";

export const ItemContext = createContext({
    markAsX: (_id, _state) => {
    }
});

const modalData = [
    {
        title: "SPIELANLEITUNG 🎲",
        content: "Ordnen Sie die Aussagen den jeweiligen Boxen zu."
    },
    {
        title: "LEIDER FALSCH ✗",
        content: "Leider ist nicht alles richtig, überprüfen Sie Ihre Antworten noch einmal. 🧐"

    },
    {
        title: "ALLES RICHTIG ✓",
        content: "Super, Sie haben alles richtig gelöst! 👏"
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
    const [openedModal, setOpenedModal] = useState(true);
    const [openedPopover, setOpenedPopover] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [allRight, setAllRight] = useState(false);

    const navigator = useNavigate();
    const { redirect } = useContext(ModiContext);

    useEffect(() => {
        // redirect to actual mode
        redirect(eigenerName)
        // loading data from db
        if (antworten[0] === undefined) {
            let Data = service.getZuordnung(storage.getBadgeID(), storage.getModiID())
            if (Data === undefined) {
                navigator('../../Error503')
                return
            } else if (Data === null) {
                console.error("DB nicht erreichbar, nutze Demo Daten")
                // navigator('../../Error503')
                Data = JsonList
            }

            Data.map((object, idx) => {

                let frage = {
                    id: idx + 1,
                    frage: object.frage,
                };
                fragen.push(frage);
                object.antworten.map((a, idx) => {
                    if (idx <= 1) {
                        let antwort = {
                            id: ((idx) + 10 * (frage.id)),
                            text: a.text,
                            state: ItemState.NOTSELECTED,
                            right: false
                        };
                        antworten.push(antwort)
                    }
                });
            });
            setAntworten(shuffle(antworten))
            setModalContent(modalData[0])
        }
    })


    // marks a box a overgiven state
    const markAsX = (id, state) => {
        const draggedItem = antworten.filter((i) => i.id === id)[0];
        draggedItem.state = state;
        setAntworten(antworten.filter((i) => i.id !== id).concat(draggedItem));
    }


    //checks if all boxes are in the right place
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
            //right
            setModalContent(modalData[2]);
            setOpenedModal(true);
            setAllRight(true);
        } else {
            //wrong
            setModalContent(modalData[1]);
            setOpenedModal(true);
            setAllRight(false);
        }
    }

    return (
        <div className="container-zuordnung">
            <DndProvider backend={HTML5Backend}>
                <ItemContext.Provider value={{ markAsX }}>
                    <div className="zuordnung-header">
                        <ModiHeader
                            setModalContent={setModalContent}
                            modalContent={modalContent}
                            openedModal={openedModal}
                            setOpenedModal={setOpenedModal}
                            openedPopover={openedPopover}
                            setOpenedPopover={setOpenedPopover}
                            checkIfAllRight={checkIfAllRight}
                            eigenerName={eigenerName}
                            allRight={allRight}
                            modalData={modalData}
                            aufgabenstellungVisible={false}
                            fertigVisible={true}
                            tooltipText="⚠️ Sie müssen erst alles richtig haben, um weiterzumachen!"
                            popoverText="⚠️ Sie müssen erst alle Boxen eingesetzt haben!"
                        />
                    </div>
                    <div>
                        <Grid columns={24}>
                            <Grid.Col span={10}>
                                {/*heap of items */}
                                <div className="item-heap">
                                    {/*Storage for the answers*/}
                                    <DropZone type="Left">
                                        {
                                            antworten.filter(a => a.state === ItemState.NOTSELECTED).map(i => (
                                                <DragItem key={i.id} state={i.state} text={i.text} id={i.id}
                                                    right={i.right} />
                                            )
                                            )
                                        }
                                    </DropZone>
                                    {/*Storage for the answers ends*/}
                                </div>
                            </Grid.Col>
                            <Grid.Col span={14}>

                                <div className="answer-heap">
                                    {/*left answer container*/}
                                    <div className="upContainer">
                                        <div className="header"><h3 style={{
                                            backgroundColor: "D9A25F",
                                            textAlign: "center",
                                            itemsAlign: 'center',
                                            width: 'auto',
                                            paddingBottom: '10px',
                                            margin: 'auto'
                                        }}>{
                                                fragen.map((i, idx) => (idx === 0 ? i.frage : ""))
                                            }</h3>
                                        </div>

                                        <DropZone type="Up">

                                            {
                                                antworten.filter(a => a.state === ItemState.UP).map(i => (
                                                    <DragItem key={i.id} state={i.state} text={i.text} id={i.id}
                                                        right={i.right} />)
                                                )
                                            }
                                        </DropZone>
                                    </div>
                                    {/*left answer container ends*/}

                                    {/*right answer container*/}
                                    <div className="downContainer">
                                        <div className="header">
                                            <h3 style={{
                                                backgroundColor: "#185359",
                                                color: "white",
                                                textAlign: "center",
                                                itemsAlign: 'center',
                                                width: 'auto',
                                                paddingBottom: '10px',
                                                margin: 'auto'
                                            }}>{
                                                    fragen.map((i, idx) => (idx === 1 ? i.frage : ""))

                                                }</h3>
                                        </div>
                                        <DropZone type="Down">
                                            {
                                                antworten.filter(a => a.state === ItemState.DOWN).map(i => (
                                                    <DragItem key={i.id} state={i.state} text={i.text} id={i.id}
                                                        right={i.right} />)
                                                )
                                            }
                                        </DropZone>
                                    </div>
                                    {/*right answer container ends*/}
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
