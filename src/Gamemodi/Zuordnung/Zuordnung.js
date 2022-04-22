import './styles.css';
import React, {createContext, useState} from 'react';
import DropZone from "./DropZone";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import DropItem from "./DropItem";
import {ItemState} from "./ItemState";


const textList = [
    {
        id: 1,
        text: "Cooler Text 1",
        state: ItemState.NOTSELECTED
    },
    {
        id: 2,
        text: "Cooler Text 2",
        state: ItemState.NOTSELECTED
    },
    {
        id: 3,
        text: "Cooler Text 3",
        state: ItemState.NOTSELECTED
    }
];

export const ItemContext = createContext({
    markAsX: (id, state) => {
    }
});

const Zuordnung = () => {
    const [itemList, setItem] = useState(textList);

    const markAsX = (id, state) => {
        const draggedItem = itemList.filter((i) => i.id === id)[0];
        draggedItem.state = state;
        setItem(itemList.filter((i) => i.id !== id).concat(draggedItem));
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <ItemContext.Provider value={{markAsX}}>

                <div>
                    <h1>Zuordnung</h1>
                    <div>
                        <DropZone type="Left">
                            Left
                            {
                                itemList.filter(i => i.state === ItemState.NOTSELECTED).map(i => (
                                    <DropItem key={i.id} state={i.state} text={i.text} id={i.id}/>
                                ))
                            }
                        </DropZone>
                    </div>

                    <div>
                        <DropZone type="Up">
                            Up
                            {
                                itemList.filter(i => i.state === ItemState.UP).map(i => (
                                    <DropItem key={i.id} state={i.state} text={i.text} id={i.id}/>
                                ))
                            }
                        </DropZone>
                    </div>

                    <div>

                        <DropZone type="Down">
                            Down
                            {
                                itemList.filter(i => i.state === ItemState.DOWN).map(i => (
                                    <DropItem key={i.id} state={i.state} text={i.text} id={i.id}/>
                                ))
                            }
                        </DropZone>
                    </div>

                </div>
            </ItemContext.Provider>
        </DndProvider>
    );
}

export default Zuordnung;
