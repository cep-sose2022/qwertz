import React from "react";
import { Link } from "react-router-dom";

const EndscreenItem = ({ data }) => (
    <div className="endscreen-item">
        <div className="endscreen-item-content">
            <p>{data.text}</p>
            <br></br>
            <Link to={data.link.route}>
                {data.link.text}
            </Link>
            <div id="styledimg"></div>

        </div>
    </div>
)

export default EndscreenItem;