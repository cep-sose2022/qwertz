import Headline from "../Startseite/Headline";
import bild from "../../Resources/DashboardBild.jpeg";
import bild2 from "../../Resources/images/Sammlungen/labortisch.png";
import React from "react";
import "./Sammlung.css";


const Sammlung = () => {


    return (
        <>
            <Headline title={"Dashboard"} headline={"Meine Sammlung"} text={""} />
            <img className="dashboardBild" src={bild}></img>
            <img className="sammlung1" src={bild2}></img>

            <div className="tube">
                <div className="shine"></div>
                <div className="body">
                    <div className="liquid">
                        <div className="percentage"></div>
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
