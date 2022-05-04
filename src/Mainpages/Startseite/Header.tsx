import React from 'react';
import img1 from "../../Resources/images/reagenzglasOrangetransparent.png";
import './style.css';

const Header = () => {


    return (
        <div className="header-content">
            <div className="container grid-2">
                <div className="column-1">
                    <h1 className="header-title">Hallo, ich bin Zepp</h1>
                    <p className="text">
                        Ich bin Zepp, OT-Security Spezialist mit langjähriger Erfahrung.
                        Ich begleite dich auf deinem Weg!
                    </p>
                    <a href="/Dashboard/Badges" className="btn">
                        Jetzt starten
                    </a>
                </div>
                <img className="column-2 image"
                     src={img1}
                     alt="logo"/>
            </div>
        </div>

    );
}

export default Header;
