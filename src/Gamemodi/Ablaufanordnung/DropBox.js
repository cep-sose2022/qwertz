import React, {useContext} from 'react';
import {useDrop} from "react-dnd";
import {ItemState} from "./ItemState";
import {CardContext} from "./Ablaufanordnung";
import {Center} from "@mantine/core";


const DropBox = (props) => {
    const {children, id, bgColor} = props;


    const {markAsX} = useContext(CardContext);

    const [{isDragging}, drop] = useDrop(() => ({
        accept: [ItemState.WRONG, ItemState.RIGHT],
        drop: (item) => markAsX(item.id, id),
        collect: monitor => ({
            isDragging: monitor.canDrop(),
        })
    }));

    return (
        <Center
            ref={drop}
            style={{
                backgroundColor: (isDragging ? 'gray' : bgColor),
                width: 250,
                height: 50

            }}
        >
            {children}
        </Center>
    );
}

export default DropBox;
