import React, {useState, createContext} from 'react';
import {DndProvider} from "react-dnd";
import CardStorage from "./CardStorage";
import './styles.css'
import DragCard from "./DragCard";
import {ItemState} from "./ItemState";
import {HTML5Backend} from "react-dnd-html5-backend";
import JsonList from "../../Resources/Json/AblaufanordnungData.json";
import DropBox from "./DropBox";


export const CardContext = createContext({
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

const Ablaufanordnung = () => {
    const [cards, setCards] = useState([]);
    const [boxes] = useState([]);

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

        if (otherCard !== undefined && otherCard.boxId !== 0)
            newBoxId = draggedCard.boxId;

        draggedCard.boxId = boxId;
        if (draggedCard.id === boxId)
            draggedCard.state = ItemState.RIGHT;
        else
            draggedCard.state = ItemState.WRONG;
        if (newBoxId !== undefined)
            markAsX(otherCard.id, newBoxId);

        setCards(cards.filter(card => card.id !== id).concat(draggedCard));
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <CardContext.Provider value={{markAsX}}>
                <h1>Ablaufanordnung</h1>
                <CardStorage>
                    {
                        cards.filter(card => card.boxId === 0)
                            .map(card => (
                                    <DragCard key={card.key} id={card.id} text={card.text} state={card.state}/>
                                )
                            )
                    }
                </CardStorage>
                <div className="board">
                    {
                        boxes.map(box => (
                                <DropBox key={box.key} id={box.id}>
                                    <br/>
                                    {
                                        cards.filter(card => card.boxId === box.id).map(card => (
                                                <DragCard key={card.id} id={card.id} text={card.text} state={card.state}/>
                                            )
                                        )
                                        // let card = cards.filter(card =>(card.boxId === box.id))[0],
                                        // box.id === cards.filter(card => (card.boxId === box.id))[0] ?
                                        // <DragCard key={card.id} id={card.id} text={card.text} state={card.state}/>
                                        // : <a> Leer </a>
                                    }

                                </DropBox>
                            )
                        )
                    }
                </div>
            </CardContext.Provider>
        </DndProvider>

    );
}

export default Ablaufanordnung;
