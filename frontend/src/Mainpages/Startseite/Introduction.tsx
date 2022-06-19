import React from 'react';
import './Startseite.css';

const Introduction = (props: { name: string; text: string; image: any; }) => {
    const { name, text, image } = props;

    return (
        <div className="container grid-2">
            <div className="column-1">
                <h3 className="title-sm">Hallo, ich bin {name}.</h3>
                <p className="text">
                    {text}
                </p>
            </div>
            <img className="column-2 image"
                src={image}
                alt="logo" />
        </div>
    );
}

export default Introduction;
