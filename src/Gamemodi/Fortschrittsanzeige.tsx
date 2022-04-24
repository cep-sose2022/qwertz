import React from 'react';
import { Link } from 'react-router-dom';

const Fortschrittsanzeige = () => {
    return (
        <>
            <Link to="/Dashboard/Gamemodi/Konversation" className="fortschrittanzeige"></Link>
            <Link to="/Dashboard/Gamemodi/Video" className="fortschrittanzeige"></Link>
            <Link to="/Dashboard/Gamemodi/Wimmelbild" className="fortschrittanzeige"></Link>
            <Link to="/Dashboard/Gamemodi/Ablaufanordnung" className="fortschrittanzeige"></Link>
            <Link to="/Dashboard/Gamemodi/Zuordnung" className="fortschrittanzeige"></Link>

        </>
    );
}

export default Fortschrittsanzeige;
