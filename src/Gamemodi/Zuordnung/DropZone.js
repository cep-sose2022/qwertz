import React, { useContext } from 'react';
import { useDrop } from "react-dnd";
import { ItemState } from "./ItemState";
import { ItemContext } from "./Zuordnung";


const DropZone = (props) => {
    const { children, type } = props;


    let state = ItemState.NOTSELECTED;
    if (type === 'Up')
        state = ItemState.UP;
    else if (type === 'Down')
        state = ItemState.DOWN;
    else if (type === 'Left')
        state = ItemState.NOTSELECTED;

    const { markAsX } = useContext(ItemContext);

    const [{ isDragging }, drop] = useDrop(() => ({
        accept: [ItemState.NOTSELECTED, ItemState.UP, ItemState.DOWN],
        drop: (item) => markAsX(item.id, state),
        collect: monitor => ({
            isDragging: monitor.canDrop(),
        })
    }));

    return (
        <div ref={drop}
            style={{
                backgroundColor: (isDragging ? 'gray' : undefined),
            }}
            className={type}
        >
            {children}
        </div>
    );
}

export default DropZone;
