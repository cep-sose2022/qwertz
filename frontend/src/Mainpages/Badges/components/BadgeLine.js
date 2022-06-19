import React from "react";
import BadgeItem from "./BadgeItem";

const BadgeLine = (props) => {
    const {badgeData} = props;
    return (
        <div className="badgeline-container">
            {
                badgeData.map((data, idx) => (
                    <BadgeItem key={idx} data={data} />
                ))
            }
        </div>
    );

}

export default BadgeLine;
