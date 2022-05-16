import React from "react";
import BadgeLine from "./components/BadgeLine";
import "./Badges.css"
import "./Schloss.css"

import Headline from "../Startseite/Headline";
import { BackgroundImage } from "@mantine/core";

import JsonData from "../../Resources/Json/BadgeData.json";

const Badges = () => (
    <div className="bodyForBadge">
        <Headline title={"Badges"} headline={""} text={""} />
        <BackgroundImage className="image" src={''}>
            <BadgeLine badgeData={JsonData} />
        </BackgroundImage>


    </div>

);

export default Badges;
