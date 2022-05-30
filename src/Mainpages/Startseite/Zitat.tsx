import React, { useState } from "react";
import './Startseite.css';
import {Button} from "@mantine/core";


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
                    <Button className="button" style={{backgroundColor:'var(--main-color)'}} onClick={generator}>Neues Zitat</Button>
                </div>
            </div>
        </div>
    );
}

export default Zitat
