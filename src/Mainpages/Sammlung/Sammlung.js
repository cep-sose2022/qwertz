import Headline from "../Startseite/Headline";
import bild from "../../Resources/images/SammlungDashboard.png";
import bild2 from "../../Resources/images/Sammlungen/labortisch.png";
import React from "react";
import "./Sammlung.css";
import storage from "../../storage";


const Sammlung = () => {

    let percentage = 0;
    storage.getBadges().map(badge => badge.passed ? percentage++ : null);
    console.log(percentage);
    percentage = percentage / storage.getBadges().lenght


    return (
        <>
            <Headline title={"Dashboard"} headline={"Meine Sammlung"} text={""} />
            <img className="dashboardBild" src={bild}></img>
            <div className="tube" >
                <div className="shine"></div>
                <div className="body">
                    <div className="liquid">
                        <div className="percentage" style={{
                            height: percentage * 100
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
