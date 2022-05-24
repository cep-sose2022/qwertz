import React from "react";
import "./Endscreen.css";
import {Container, Grid} from "@mantine/core";
import {Link} from "react-router-dom";
import {VscFolderLibrary} from "react-icons/vsc";
import {FaAward} from "react-icons/fa";
import EndscreenData from "./EndscreenData";
import EndscreenItem from "./components/EndscreenItem";
import image from "../../Resources/images/orange_zwinkern.png";
import gif from "../../Resources/zeppgefunden.gif";
import storage from "../../storage";

const Endscreen = () => {
    const machEnde = () => {
        storage.setBadgePassed(storage.getBadgeID())
        storage.removeAll()
    }

    return (
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
            <>
                <Container size={10100} px={0}>
                    <section className="endscreengif">
                        <img className="gif" src={gif} alt=""/>
                    </section>
                </Container>

            </>


        </div>

    )
};

export default Endscreen;

