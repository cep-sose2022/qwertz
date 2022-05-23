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
                backgroundColor: right ? 'green' : 'var(--dark-two)',
                fontSize: (isDragging ? 20 : undefined),
                border: '1px solid',
                borderColor: 'var(--dark-one)',
                borderRadius: '22px',
                color: 'white',
                padding: 7,
                margin: 7,
            }}>
            {text}
        </p>
    );
}

export default DragItem;
