import React, { useContext } from 'react';
import { useDrop } from "react-dnd";
import { ItemState } from "./ItemState";
import { CardContext } from "./Ablaufanordnung";
import { Center, Grid } from "@mantine/core";
import "./Ablaufanordnung.css";


const DropBox = (props) => {
    const { children, id } = props;


    const { markAsX } = useContext(CardContext);

    const [{ isDragging }, drop] = useDrop(() => ({
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
                background: (isDragging ? 'linear-gradient(to right bottom,gray, gray)' : 'linear-gradient(to right bottom,gray,gray)'),
                width: "auto",
                minHeight: 120,
                maxWidth: 245,
                flexDirection: "column",
                borderRadius: '15px',
                boxShadow: '4px 4px 4px black',
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
