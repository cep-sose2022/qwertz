import React, { useEffect, useState } from "react";
import Headline from "../Startseite/Headline";

// import CSS for the design
import "./Sammlung.css";
import img from './../../Resources/images/Dashboard/belohnungbadge1.png'
// import Backend to get the data from the database
import storage from "../../storage";
import service from "../../service";


const Sammlung = () => {
    {/*to show the progress bar*/ }
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        let passed = 0;
        const badges = storage.getBadges()
        /* checking whether a badge has been passed or not, if passes,
        then we increase the percentage, otherwise null */
        badges.map(badge => badge.passed ? passed++ : null);
        setPercentage((passed / badges.length) * 100);
    })

    return (
        <>
            <Headline title={"Dashboard"} headline={"Meine Sammlung"} text={""} />
            {/*the picture is getting from the database*/}
            <img className="dashboardBild" src={img} alt="Bild" />

            <img className="dashboardBild" src={service.getSammlung("badge" + storage.getBadgeID())} alt="Bild" />

            <div className="tube" >
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
        </>
    );
}

export default Sammlung;
