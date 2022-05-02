import React from 'react';
import { Link } from 'react-router-dom';

const Fortschrittsanzeige = () => {
    return (
        <>


            <ul className="progressbar">
                <li className="bestanden">Konversation</li>
                <li>Video</li>
                <li>Wimmelbild</li>
                <li>Ablaufanordnung</li>
                <li>Zuordnung</li>
            </ul>
        </>
    );
}

export default Fortschrittsanzeige;
