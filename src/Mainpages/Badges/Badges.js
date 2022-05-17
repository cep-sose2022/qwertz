import React from "react";
import BadgeLine from "./components/BadgeLine";
import "./Badges.css"
import "./Schloss.css"

import Headline from "../Startseite/Headline";
import {BackgroundImage} from "@mantine/core";

import JsonData from "../../Resources/Json/BadgeData.json";

const Badges = () => (
        <div className="badges-container">
            <div className="badges-header">
                <Headline title={"Badges"} headline={"Dein Fortschritt"} text={""}/>
            </div>
            <div className="badges-body">
                <BackgroundImage className="image" src={''}>
                    <BadgeLine badgeData={JsonData}/>
                </BackgroundImage>
            </div>
        </div>

    )
;

export default Badges;
