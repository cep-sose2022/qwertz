import React from "react";

const BadgeItem = ({ data }) => (
    <div className="badgeline-item">
        <div className="badgeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <p>{data.text}</p>
            {data.link && (
                <a link to={data.link.url} target="_blank" rel="noopener noreferrer">
                    {data.link.text} 
                </a>
            )}
            <span className="circle"></span>
        </div>
    </div>
);

export default BadgeItem;