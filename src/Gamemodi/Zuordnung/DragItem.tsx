import React from 'react';
import { useDrag } from "react-dnd";

const DragItem = (props: { id: number; state: any; text: String; right: boolean }) => {
    const { id, text, state, right } = props;

    // von React-DnD, macht eine Komponente Draggable
    const [{ isDragging }, drag] = useDrag({
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
                backgroundColor: right ? 'lightgreen' : 'var(--dark-two)',
                fontSize: (isDragging ? 20 : undefined),
                border: '1px solid',
                borderColor:'var(--dark-one)',
                borderRadius: '2022px',
                color: 'white'
            }}>
            {text}
        </p>
    );
}

export default DragItem;
