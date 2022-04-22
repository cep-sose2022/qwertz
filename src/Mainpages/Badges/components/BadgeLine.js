import React from "react";
import BadgeData from "../BadgeData";
import BadgeItem from "./BadgeItem";

const BadgeLine = () => BadgeData.length > 0 && (
    <div className="badgeline-container">   
        {BadgeData.map((data, idx) => (
            <BadgeItem data={data} key={idx} />

        ))}
    </div>
);


export default BadgeLine;