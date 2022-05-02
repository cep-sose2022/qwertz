import React from 'react';
import {useDrag} from "react-dnd";

const DragCard = (props: { id: number; state: any; text: String }) => {
    const {id, text, state} = props;

    const [{}, drag] = useDrag({
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
        <p
            ref={drag}
        >
            {text}
        </p>
    );
}

export default DragCard;
