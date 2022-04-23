import React from 'react';
import Header from "../Header";
import {Link} from "react-router-dom";
import '../style.css'

const Startseite = () => {
    return (
        <div>
            <>
                <Header>
                    <Link to="#header">Startseite</Link>
                    <Link to="#services">Schulung</Link>
                    <Link to="#about">Über uns</Link>
                    <Link to="#zitat">Zitat</Link>
                    <Link to="../Dashboard" className="active">Jetzt starten</Link>
                </Header>
            </>
            <h1>Startseite</h1>
        </div>

    );
}

export default Startseite;
