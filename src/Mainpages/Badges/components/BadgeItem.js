import React from "react";
import {Link} from "react-router-dom";
import storage from "../../../storage";
import {FaFileDownload} from "react-icons/fa";
import {Tooltip} from "@mantine/core";
import service from "../../../service";

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
                    <div>
                        <Tooltip label="Hier kannst du dir den Inhalt dieses Badges in einer PDF-Datei herunterladen.">
                            <a className="downloadButton" href={service.getPdf(data.badgeID)}
                               download={"Badge_" + data.badgeID}>
                                {/*// TODO hier muss der Link zur PDF datei geändert werden*/}
                                <FaFileDownload/> Inhalt herunterladen
                            </a>
                        </Tooltip>
                    </div>
                    <p>{data.text}</p>


                    <div>
                        <Link className="link" to={'../Gamemodi'}
                              onClick={() => setData(data.badgeID, data.modis)} style={{fontSize: '4vh'}}>
                            Start
                        </Link>
                    </div>


                    <span className="circle"/>
                </div>
                :
                <div className="badgeline-item-content">
                <span className="tag">
                    🔒
                </span>
                    <h3>{data.title}</h3>
                    <Tooltip disabled='disabled'
                             label="Hier kannst du dir den Inhalt dieses Badges in einer PDF-Datei herunterladen.">
                        <a className="downloadButton" style={{filter: 'blur(4px)'}}>
                            {/*// TODO hier muss der Link zur PDF datei geändert werden*/}
                            <FaFileDownload/> Inhalt herunterladen
                        </a>
                    </Tooltip>
                    <p style={{filter: 'blur(4px)'}}>{data.text}</p>
                    <div style={{filter: 'blur(4px)'}}>
                        <Link disabled='disabled' className="link" to={''}
                              onClick={() => setData(data.badgeID)}>
                            Start
                        </Link>
                    </div>
                    <div>

                    </div>
                    <span className="circle"/>
                </div>
        }
    </div>
);

export default BadgeItem;
