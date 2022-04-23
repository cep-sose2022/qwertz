import React, {createContext, useState} from 'react';
import DropZone from "./DropZone";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import DropItem from "./DropItem";
import {ItemState} from "./ItemState";
import JsonList from "../../Resources/Json/ZuordnungData.json";

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

        if (state === ItemState.UP)
            draggedItem.right = Math.floor(id / 10) === 1;
        else if (state === ItemState.DOWN)
            draggedItem.right = Math.floor(id / 10) === 2;
        else
            draggedItem.right = false;

        setAntworten(antworten.filter((i) => i.id !== id).concat(draggedItem));
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <ItemContext.Provider value={{markAsX}}>

                <div>
                    <div>
                        <DropZone type="Left">
                            Left
                            {
                                antworten.filter(a => a.state === ItemState.NOTSELECTED).map(i => (
                                        <DropItem key={i.id} state={i.state} text={i.text} id={i.id} right={i.right}/>
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
                                    <DropItem key={i.id} state={i.state} text={i.text} id={i.id} right={i.right}/>)
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
                                    <DropItem key={i.id} state={i.state} text={i.text} id={i.id} right={i.right}/>)
                                )
                            }
                        </DropZone>
                    </div>

                </div>
            </ItemContext.Provider>
        </DndProvider>
    );
}

export default Zuordnung;
