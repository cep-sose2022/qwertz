import React from "react";
import { Link } from "react-router-dom";

const EndscreenItem = ({ data }) => (
    <div className="endscreen-item">
        <div className="endscreen-item-content">
            <p>{data.text}</p>
            <br></br>
            <div className="btn">
                <Link to="../../Badges">
                    Weiter zum abschließen  ➥
                </Link>
            </div>

        </div>
    </div>
)

export default EndscreenItem;
