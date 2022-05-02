import React from "react";
import BadgeLine from "./components/BadgeLine";
import "./Badges.css"
import Headline from "../Startseite/Headline";
const Badges = () => (
    <div className="bodyForBadge">
        <Headline title={"Badges"} headline={"irgendwas sinnvolles steht hier"} text={""} />
        <BadgeLine />
    </div>

);

export default Badges;