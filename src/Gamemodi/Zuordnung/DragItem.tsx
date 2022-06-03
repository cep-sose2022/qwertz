import React from 'react';
import { useDrag } from "react-dnd";
import './Zuordnung.css';
const DragItem = (props: { id: number; state: any; text: String; right: boolean }) => {
    const { id, text, state, right } = props;

    const [{}, drag] = useDrag({
        type: state,
        item: {
            id: id,
            type: state,
            text: text,
            right: right
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <p ref={drag} className="Card"
            style={{
                backgroundColor: right ? 'var(--antwortRichtig)' : 'var(--spielbereich1)',
                border: '1px solid',
                borderColor: 'var(--dark-one)',
                borderRadius: '15px',
                color: 'var(   --dark-one)',
                padding: 7,
                margin: 7,
            }}>
            {text}
        </p>
    );
}

export default DragItem;
