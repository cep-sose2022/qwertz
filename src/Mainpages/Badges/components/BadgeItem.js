import React from "react";
import { Link } from "react-router-dom";

const BadgeItem = ({ data }) => (
    <div className="badgeline-item">
        <div className="badgeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <p>{data.text}</p>
            <h3>{data.title}</h3>

            {data.link && (
                <Link to={data.link.url}>
                    {data.link.text}
                </Link>
            )}
            <span className="circle"></span>
        </div>
    </div>
);

export default BadgeItem;
