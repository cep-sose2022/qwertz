import React from 'react';

const Card = (props: { image: any; title: string; text: string; link: string; }) => {
    const {image, title, text, link} = props;

    return (
        <div className="card-wrap">
            <div className="card" data-card="Lorem ipsum">
                <div className="card-content z-index">
                    <img className="icon"
                         src={image}
                         alt="icon"/>
                    <h3 className="title-sm">{title}</h3>
                    <p className="text">
                        {text}
                    </p>
                    {/*TODO link anpassen, für was is das?*/}
                    <a href={link} className="btn small">
                        Mehr lesen
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
