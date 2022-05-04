import React from "react";
import BadgeItem from "./BadgeItem";

const BadgeLine = (props) => {
    const {badgeData} = props;

    // BadgeData.length > 0 && (
    //     <div className="badgeline-container">
    //         {BadgeData.map((data, idx) => (
    //             <BadgeItem data={data} key={idx}/>
    //
    //         ))}
    //     </div>

    return (
        <div className="badgeline-container">
            {
                badgeData.map((data, idx) => (
                    <BadgeItem key={idx} data={data} id={idx+1} />
                ))
            }
        </div>
    );

}

export default BadgeLine;
