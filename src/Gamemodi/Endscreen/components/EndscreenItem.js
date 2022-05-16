import React from "react";
import { Link } from "react-router-dom";

const EndscreenItem = ({ data }) => (
    <div className="endscreen-item">
        <div className="endscreen-item-content">
            <p>{data.text}</p>
            <br></br>
            <div className="btn">
                <Link to="../../Sammlung">
                    Weiter zum Dashboard  ➥
                </Link>
            </div>

        </div>
    </div>
)

export default EndscreenItem;
