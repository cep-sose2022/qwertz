import React from "react";
import {Link} from "react-router-dom";

const BadgeItem = ({data, id}) => (
    <div className="badgeline-item">
        <div className="badgeline-item-content">
            <span className="tag"
                  style={{background: 'linear-gradient(to right, rgb(106, 6, 236), rgb(44, 0, 240))'}}>
                Badge {id}
            </span>
            <p>{data.text}</p>
            <h3>{data.title}</h3>

            <Link to={'../Gamemodi/' + data.modis[0]}>
                Start
            </Link>
            <span className="circle"></span>
        </div>
    </div>
);

export default BadgeItem;
