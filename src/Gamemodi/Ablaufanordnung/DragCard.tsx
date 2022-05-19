import React from 'react';
import { useDrag } from "react-dnd";
import './Ablaufanordnung.css';
import { ItemState } from './ItemState';

const DragCard = (props: { id: number; state: any; text: String }) => {
    const { id, text, state } = props;

    const [{ }, drag] = useDrag({
        type: state,
        item: {
            id: id,
            type: state,
            text: text,
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <p ref={drag} className="dragCard"
            style={{

                backgroundColor: ItemState.RIGHT === state ? '#00AB08' : '#f58400',

            }}>

            {text}
        </p>
    );
}

export default DragCard;
