import React from "react";
import {Link} from "react-router-dom";
import storage from "../../../storage";

const setData = (badgeID) => {
    storage.setBadgeID(badgeID)
    console.log(badgeID)
}

const BadgeItem = ({data}) => (
    <div className="badgeline-item">
        {/*check if badge is unlocked */}
        {
            data.unlocked ?
                <div className="badgeline-item-content">
                <span className="tag">
                    🔓
                </span>
                    <h3>{data.title}</h3>
                    <p>{data.text}</p>
                    <Link to={'../Gamemodi/' + data.modis[0]} onClick={()=>setData(data.badgeID)}>
                        Start
                    </Link>
                    <span className="circle"/>
                </div>
                :
                <div className="badgeline-item-content">
                <span className="tag">
                    🔒
                </span>
                    <h3>{data.title}</h3>
                    <p style={{filter: 'blur(4px)'}}>{data.text}</p>


                    <Link disabled='disabled' style={{filter: 'blur(4px)'}} to={''}>
                        Start
                    </Link>
                    <span className="circle"/>
                </div>
        }
    </div>
);

export default BadgeItem;
