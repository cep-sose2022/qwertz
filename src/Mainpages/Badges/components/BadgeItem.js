import React from "react";
import {Link} from "react-router-dom";
import storage from "../../../storage";

// TODO hier wurde was gemacht
const setData = (badgeID, modis) => {
    if (storage.getBadgeID() !== badgeID) {
        storage.removeAll()
        storage.setBadgeID(badgeID)
        let modiData = []
        modis.map(object => {
            let modi = {
                modiID: object.modiID,
                title: object.title,
                passed: false
            }
            modiData.push(modi)
        })
        storage.setModis(modiData)
    }
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
                    <Link to={'../Gamemodi'} onClick={() => setData(data.badgeID, data.modis)}>
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
