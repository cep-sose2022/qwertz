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
            // if card inserted correctly then change the color to green, otherwise the color stays the same
            style={{
                backgroundColor: ItemState.RIGHT === state ? 'var(--antwortRichtig)' : 'var(--spielbereich1)',
                fontSize: (text ? 13.4 : undefined),
            }}>

            {text}
        </p>
    );
}

export default DragCard;
