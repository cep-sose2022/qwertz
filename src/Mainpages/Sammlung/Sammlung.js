import React, { useEffect, useState } from "react";
import Headline from "../Startseite/Headline";

// import CSS for the design
import "./Sammlung.css";
import img from './../../Resources/images/Dashboard/belohnung_badge0.png'
// import Backend to get the data from the database
import storage from "../../storage";
import service from "../../service";

import { Grid, Center } from "@mantine/core";

const Sammlung = () => {
    {/*to show the progress bar*/
    }
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        let passed = 0;
        const badges = storage.getBadges()
        /* checking whether a badge has been passed or not, if passes,
        then we increase the percentage, otherwise null */
        badges.map(badge => badge.passed ? passed++ : null);
        setPercentage((passed / badges.length) * 100);
    })

    // return an image
    const getImage = () => {
        // filter all passed badges
        const passedBadges = storage.getBadges().filter(badge => badge.passed)
        // if no badge is passed return default image
        if (passedBadges.length === 0)
            return img
        else
            // gets the image from the last passed badge from the db
            return service.getSammlung(passedBadges[passedBadges.length - 1].badgeID)
    }

    return (
        <>
            <Headline title={"Dashboard"} headline={"Meine Sammlung"} text={""} />




            <div className="tube" style={{ marginBottom: 30 }}>
                <div className="shine"></div>
                <div className="body">
                    <div className="liquid">
                        {/*the logic for the percentage so that it adapts to the passed badges*/}
                        <div className="percentage" style={{
                            height: percentage
                        }}>
                        </div>
                    </div>
                </div>
                <div className="meter">
                    <div>100</div>
                    <div>80</div>
                    <div>60</div>
                    <div>40</div>
                    <div>20</div>
                </div>
            </div>

            <Center style={{ float: "left", marginRight: 15 }}>
                <div>   {/*the picture is getting from the database*/}
                    <img style={{ textAlign: "center", marginTop: 10 }} className="dashboardBild" src={getImage()} alt="Bild" /></div>
            </Center>
        </>
    );
}

export default Sammlung;
