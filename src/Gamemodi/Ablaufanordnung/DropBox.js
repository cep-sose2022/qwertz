import React, {useContext} from 'react';
import {useDrop} from "react-dnd";
import {ItemState} from "./ItemState";
import {CardContext} from "./Ablaufanordnung";
import {Center} from "@mantine/core";
import "./Ablaufanordnung.css";


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
                background: (isDragging ? 'linear-gradient(to right bottom,#7608FF,#B273FF)' : 'linear-gradient(to right bottom,#0799FFFF,#3BADFF)'),
                width: "auto",
                minHeight: 50,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div className="card-header">
                <span>{id}</span>
            </div>
            <div className="card-body">
                {children}
            </div>
        </Center>
    );
}

export default DropBox;
