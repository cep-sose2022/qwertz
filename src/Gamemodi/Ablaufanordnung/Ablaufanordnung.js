import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router";

// import ReactDND for Drag and Drop
import { DndProvider } from "react-dnd";

// import CardStorage.js
import CardStorage from "./CardStorage";

// import CSS for the design
import './Ablaufanordnung.css'

// import DragCard, whether the answer is correct or not
import DragCard from "./DragCard";

// import ItemState for right and wrong answer
import { ItemState } from "./ItemState";

// import JsonList
import JsonList from "../../Resources/Json/AblaufanordnungData.json";

// import DropBox 
import DropBox from "./DropBox";

// import Mantine Core for responsive Grid-Layout
import { SimpleGrid } from "@mantine/core";

// import ModiHeader
import ModiHeader from "../ModiHeader";

// import ModiContext
import { ModiContext } from "../Gamemodi";

// import HTML5 Backend
import { HTML5Backend } from "react-dnd-html5-backend";

// import Backend to get the data from the database
import service from "../../service";
import storage from "../../storage";


export const CardContext = createContext({
    markAsX: (_id, _state) => {
    }
});

const modalData = [
    {
        title: "SPIELANLEITUNG 🎲",
        content: "Ordnen Sie die Kärtchen in der richtigen Reihenfolge"
    },
    {
        title: "LEIDER FALSCH ✗",
        content: "Leider ist nicht alles richtig, überprüfen Sie Ihre Antworten noch einmal. 🧐"
    },
    {
        title: "ALLES RICHTIG ✓",
        content: "Super, Sie haben alles richtig gelöst! 👏"
    },
    {
        title: "AUFGABENSTELLUNG",
        content: "Ein externer Mitarbeiter hat ein infiziertes Wartungsgerät verwendet, welches zuvor schon in Ihrem ICS-Netzwerk verwendet wurde. Vermutlich hatte der externe sich die Schadsoftware über das Internet eingefangen und nun durch das erneute Verbinden in Ihr ICS-System versehentlich Schadsoftware eingeschleust. Glücklicherweise wurde dies sofort erkannt."
            + " Wie gehen Sie nun vor?"
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
    const [openedModal, setOpenedModal] = useState(true); // Task is displayed every time
    const [openedPopover, setOpenedPopover] = useState(false); // so you can close popver again
    const [modalContent, setModalContent] = useState(modalData[3]);
    const [allRight, setAllRight] = useState(false);

    const navigator = useNavigate();
    const { redirect } = useContext(ModiContext);


    useEffect(() => {
        // redirect to the actual mode
        redirect(eigenerName)
        // loading data from db
        if (cards[0] === undefined) {
            let Data = service.getAblaufanordnung(storage.getBadgeID(), storage.getModiID())
            if (Data === undefined) {
                navigator('../../Error503')
                return
            } else if (Data === null) {
                console.error("DB nicht erreichbar, nutze Demo Daten")
                // navigator('../../Error503')
                Data = JsonList
            }

            Data.map((object, idx) => {
                if (idx <= 3) {
                    let card = {
                        key: Math.random(),
                        id: idx + 1,
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
            }
            )
            setCards(shuffle(cards));
        }
        // loading data end
    }
    )


    // put card in a choosen box, if box is filled switch cards
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
    //check if all cards are allocated and in the right boxes
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

        <div className="ablaufanordnung-container">
            <DndProvider backend={HTML5Backend}>
                <CardContext.Provider value={{ markAsX }}>
                    <div className="ablaufanordnung-header">
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
                            aufgabenstellungVisible={true}
                            fertigVisible={true}
                            tooltipText="⚠️ Sie müssen erst alles richtig haben, um weiterzumachen!"
                            popoverText="⚠️ Sie müssen erst alle Boxen eingesetzt haben!"
                        />
                    </div>
                    <div className="ablaufanordnung-body">
                        {/*Card Heap*/}
                        <CardStorage>
                            {
                                cards.filter(card => card.boxId === 0)
                                    .map(card => (
                                        <DragCard key={card.key} id={card.id} text={card.text} state={card.state} />
                                    )
                                    )
                            }
                        </CardStorage>
                        {/*Card Heap end*/}

                        {/*Grid to drag the cards in*/}
                        <SimpleGrid style={{ padding: 15 }}
                            cols={4}
                            spacing="lg"
                            breakpoints={[
                                { maxWidth: 980, cols: 3, spacing: "lg" },
                                { maxWidth: 755, cols: 2, spacing: "lg" },
                                { maxWidth: 600, cols: 1, spacing: "lg" },
                            ]}
                        >
                            {
                                boxes.map(box => (
                                    <DropBox key={box.key} id={box.id}>
                                        {
                                            cards.filter(card => card.boxId === box.id).map(card => (
                                                <DragCard key={card.id} id={card.id} text={card.text}
                                                    state={card.state} />
                                            )
                                            )
                                        }
                                    </DropBox>
                                )
                                )
                            }
                        </SimpleGrid>
                        {/*Grid end*/}
                    </div>
                </CardContext.Provider>
            </DndProvider>
        </div>
    );
}
export default Ablaufanordnung;
