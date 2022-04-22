import React from 'react';
import {useDrag} from "react-dnd";

const DropItem = (props: { id: number; state: any; text: String; right: boolean }) => {
    const {id, text, state, right} = props;

    const [{isDragging}, drag] = useDrag({
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
               backgroundColor: right ? 'green' : 'red',
               fontSize: (isDragging ? 20 : undefined)
           }}>
            {text}
        </p>
    );
}

export default DropItem;
