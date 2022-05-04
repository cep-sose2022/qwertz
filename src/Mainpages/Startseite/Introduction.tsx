import React from 'react';
import './Startseite.css';

const Introduction = (props: { name: string; text: string; image: any; }) => {
    const { name, text, image } = props;

    return (
        <div className="section-body grid-2">
            <div className="column-1">
                <h3 className="title-sm">Hallo, ich bin {name}.</h3>
                <p className="text">
                    {text}
                </p>
            </div>
            <div className="column-2 image">
                <img className="column-2 image"
                    src={image}
                    alt="logo" />
            </div>
        </div>
    );
}

export default Introduction;
