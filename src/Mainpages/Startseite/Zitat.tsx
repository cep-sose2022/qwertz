import React, { useState } from "react";
import './Startseite.css';


const Zitat = (props: { JsonData: any; }) => {
    const { JsonData } = props;
    const [zitat, setZitat] = useState(JsonData[Math.floor(Math.random() * JsonData.length)])
    const generator = () => {
        setZitat(JsonData[Math.floor(Math.random() * JsonData.length)])
    }

    return (
        <div className="quote-body">

            <div className="icon-quote">

                <span className="icon2" />
                <i className="fas fa-quote-left" />
                <p className="quote">{zitat.quote}
                </p>
            </div>
            <div className="author">{zitat.author}</div>

            <div className="quote-buttons">
                <div className="btnzitat">
                    <button onClick={generator}>Neues Zitat</button>
                </div>
            </div>
        </div>
    );
}

export default Zitat
