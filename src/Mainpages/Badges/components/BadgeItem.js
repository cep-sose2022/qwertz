import React from "react";
import {Link} from "react-router-dom";

const BadgeItem = ({ data, id }) => (
    <div className="badgeline-item">
        {/*check if badge is unlocked */}
        {id === 1 ?
            <div className="badgeline-item-content">
                <span className="tag">
                    🔓
                </span>
                <p>{data.text}</p>
                <h3>{data.title}</h3>

                <Link to={'../Gamemodi/' + data.modis[0]}>
                    Start
                </Link>
                <span className="circle"/>
            </div>
            :
            <div className="badgeline-item-content">
                <span className="tag">
                    🔒
                </span>
                <p style={{filter: 'blur(4px)'}}>{data.text}</p>
                <h3>{data.title}</h3>

                <Link disabled='disabled' style={{filter: 'blur(4px)'}} to={''}>
                    Start
                </Link>
                <span className="circle"/>
            </div>
        }




    </div>
);

export default BadgeItem;
