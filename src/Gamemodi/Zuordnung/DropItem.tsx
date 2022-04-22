import React from 'react';
import {useDrag} from "react-dnd";

const DropItem = (props: { id: number; state: any; text: String }) => {
    const {id, text, state} = props;

    const [{isDragging}, drag] = useDrag({
        type: state,
        item: {
            id: id,
            type: state,
            text: text,
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <p ref={drag} className="Card"
           style={{
               backgroundColor: 'green',
               fontSize: (isDragging ? 20 : undefined)
           }}>
            {text}
        </p>
    );
}

export default DropItem;
