import React from 'react';
import './Startseite.css';


const Headline = (props: { title: string; headline: string; text: string; }) => {
    const { title, headline, text } = props;

    return (
        <div className="section-header">
            <h3 className="title" data-title={title}>
                {headline}
            </h3>
            <p className="text">
                {text}
            </p>
        </div>
    );
}

export default Headline;
