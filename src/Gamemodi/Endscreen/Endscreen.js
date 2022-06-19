import React from "react";
import { Link } from "react-router-dom";

// import CSS
import "./Endscreen.css";
// import Mantine Core for responsive Container and Grid-Layout
import { Container, Grid } from "@mantine/core";

// import react-icons
import { VscFolderLibrary } from "react-icons/vsc";
import { FaAward } from "react-icons/fa";

// import Data
import EndscreenData from "./EndscreenData";

// import Component
import EndscreenItem from "./components/EndscreenItem";

// import Backend to get the data from the database
import storage from "../../storage";
import service from "../../service";

const Endscreen = () => {
    //marks a Badge as finished
    const machEnde = () => {
        storage.setBadgePassed(parseInt(storage.getBadgeID()))
        storage.removeAll()
    }

    return (
        <div className="endscreen-container">
            <div className="endscreen-header">
                <Grid justify={"space-around"}>
                    <div className="btn" onClick={machEnde}>
                        <Link to="../../Sammlung">
                            <span style={{ fontSize: '20px', textAlign: 'center', itemsAlign: 'center', color: "black" }}>
                                <VscFolderLibrary /> Weiter zur Sammlung
                            </span>
                        </Link>
                    </div>
                    <div className="btn" onClick={machEnde}>
                        <Link to="../../Batches" style={{ fontSize: '20px', textAlign: 'center', itemsAlign: 'center', color: "black" }}>
                            <FaAward /> Zu den Batches </Link>
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

                    {/*the picture is getting from the database*/}
                    <img className="imgerlen" src={service.getImage("badge" + storage.getBadgeID())} alt="erlenmeyerkolbenZwinkert" />
                </Grid>

            </div>
            <>
                <Container size={10100} px={0}>
                    <section className="endscreengif">
                        {/*the GIF is getting from the database*/}
                        <img className="gif" src={service.getGif("badge" + storage.getBadgeID())} alt="" />
                    </section>
                </Container>

            </>


        </div>

    )
};

export default Endscreen;
