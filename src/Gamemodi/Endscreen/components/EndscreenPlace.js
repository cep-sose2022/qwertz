import React from "react";
import EndscreenItem from "./EndscreenItem";
import EndscreenData from "./../EndscreenData";
import image from '../../../Resources/images/orange_zwinkern.png';
import gif from '../../../Resources/zeppgefunden.gif';
import { Image } from "@mantine/core";

import { Link } from "react-router-dom";
import { Grid } from "@mantine/core";

import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import storage from "../../../storage";

const machEnde = () => {
    let badgeID = storage.getBadgeID()
    storage.setBadgePassed(parseInt(badgeID))
    storage.removeAll()
}

const EndscreenPlace = () => EndscreenData.length > 0 && (
    <div className="endscreen-container">
        <div className="endscreen-header">
            <Grid justify={"space-around"}>
                <div className="btn" onClick={machEnde}>
                    <Link to="../../Sammlung">
                        <span style={{ fontSize: '20px', textAlign: 'center', itemsAlign: 'center' }}>
                            <VscFolderLibrary /> Weiter zur Sammlung
                        </span>
                    </Link>
                </div>
                <div className="btn" onClick={machEnde}>
                    <Link to="../../Badges" style={{ fontSize: '20px', textAlign: 'center', itemsAlign: 'center' }}>
                        <FaAward /> Zu den Badges </Link>
                </div>
            </Grid>
        </div>
        <div className="endscreen-body">
            <Grid justify={"center"}>
                <div className="endscreen-text">
                    <div className="speechbubble">
                        {EndscreenData.map((data, idx) => (
                            <EndscreenItem data={data} key={idx} />
                        ))}
                    </div>
                </div>


                <img className="imgerlen" src={image} alt="erlenmeyerkolbenZwinkert" />
            </Grid>

        </div>
        <div style={{ width: 600, marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' }}>
            <Image
                radius="md"
                src={gif}
                alt="gif"
            />
        </div>


    </div >


);

export default EndscreenPlace;