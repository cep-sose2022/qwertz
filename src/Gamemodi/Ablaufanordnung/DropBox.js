import React, {useContext} from 'react';
import {useDrop} from "react-dnd";
import {ItemState} from "./ItemState";
import {CardContext} from "./Ablaufanordnung";


const DropBox = (props) => {
    const {children, id} = props;


    const {markAsX} = useContext(CardContext);

    const [{isDragging}, drop] = useDrop(() => ({
        accept: [ItemState.WRONG, ItemState.RIGHT],
        drop: (item) => markAsX(item.id, id),
        collect: monitor => ({
            isDragging: monitor.canDrop(),
        })
    }));

    return (
        <div
            ref={drop}
            style={{
                backgroundColor: (isDragging ? 'gray' : undefined),
            }}
        >
            {children}
        </div>
    );
}

export default DropBox;
