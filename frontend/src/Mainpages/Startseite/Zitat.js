import React, { useEffect, useState } from "react";
import './Startseite.css';
import { Button } from "@mantine/core";
import service from '../../service'


const Zitat = (props) => {
    const { JsonData } = props;
    const [Data, setData] = useState([]);
    const [zitat, setZitat] = useState(undefined)

    const generator = () => {
        setZitat(Data[Math.floor(Math.random() * Data.length)])
    }
    // to redirect to the mode it is currently on
    useEffect(() => {
        // loads the data from the DB and writes it to a const
        if (zitat === undefined) {
            let tempData = service.getZitate()
            if (tempData === null || tempData.length === 0) {
                console.error("DB nicht erreichbar, nutze Demo Daten")
                // navigator('../../Error503')
                tempData = JsonData
            }
            setData(tempData)
            setZitat(tempData[Math.floor(Math.random() * tempData.length)])
        }
    })

    return (
        <div className="quote-body">
            <div className="icon-quote">
                <span className="icon2" />
                <i className="fas fa-quote-left" />
                <p className="text quote" >{zitat !== undefined ? zitat.quote : undefined}
                </p>
            </div>
            <p className="text author">{zitat !== undefined ? zitat.author : undefined}</p>

            <div className="quote-buttons">
                <div className="btnzitat">
                    <Button className="button" style={{ backgroundColor: 'var(--main-color)' }} onClick={generator}>Neues Zitat</Button>
                </div>
            </div>
        </div>
    );
}

export default Zitat
