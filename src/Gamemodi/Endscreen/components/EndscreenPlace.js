import React from "react";
import EndscreenItem from "./EndscreenItem";
import EndscreenData from "./../EndscreenData";
import image from '../../../Resources/images/orange_zwinkern.png';
import {Link} from "react-router-dom";
import {Grid} from "@mantine/core";

import {FaAward} from "react-icons/fa";
import {VscFolderLibrary} from "react-icons/vsc";
import storage from "../../../storage";

const machEnde = () => {
    storage.setBadgePassed(storage.getBadgeID())
    storage.removeAll()
}
// TODO hier wurde was gemacht
const EndscreenPlace = () => EndscreenData.length > 0 && (
    <div className="endscreen-container">
        <div className="endscreen-header">
            <Grid justify={"space-around"}>
                <div className="btn" onClick={machEnde}>
                    <Link to="../../Sammlung">
                        <span style={{fontSize: '20px', textAlign: 'center', itemsAlign: 'center'}}>
                            <VscFolderLibrary/> Weiter zur Sammlung
                        </span>
                    </Link>
                </div>
                <div className="btn" onClick={machEnde}>
                    <Link to="../../Badges" style={{fontSize: '20px', textAlign: 'center', itemsAlign: 'center'}}>
                        <FaAward/> Zu den Badges </Link>
                </div>
            </Grid>
        </div>
        <div className="endscreen-body">
            <Grid justify={"center"}>
                <div className="endscreen-text">
                    <div className="speechbubble">
                        {EndscreenData.map((data, idx) => (
                            <EndscreenItem data={data} key={idx}/>
                        ))}
                    </div>
                </div>

                <img className="imgerlen" src={image} alt="erlenmeyerkolbenZwinkert"/>
            </Grid>

        </div>

    </div>


);

export default EndscreenPlace;
