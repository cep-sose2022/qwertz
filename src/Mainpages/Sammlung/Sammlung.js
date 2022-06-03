import Headline from "../Startseite/Headline";
import bild from "../../Resources/images/SammlungDashboard.png";
import React, { useEffect, useState } from "react";
import "./Sammlung.css";
import storage from "../../storage";
import service from "../../service";


const Sammlung = () => {

    const [percentage, setPercentage] = useState(0);
    useEffect(() => {
        let passed = 0;
        const badges = storage.getBadges()
        badges.map(badge => badge.passed ? passed++ : null);
        setPercentage((passed / badges.length) * 100);
    })

    return (
        <>
            <Headline title={"Dashboard"} headline={"Meine Sammlung"} text={""} />
            <img className="dashboardBild" src={service.getSammlung("badge" + storage.getBadgeID())} alt="Bild" />

            <div className="tube" >
                <div className="shine"></div>
                <div className="body">
                    <div className="liquid">
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
                <div className="bubbles">
                </div>
            </div>
        </>
    );
}

export default Sammlung;
