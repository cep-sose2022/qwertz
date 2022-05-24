import React from "react";
import {Link} from "react-router-dom";
import storage from "../../../storage";
import img1 from "../../../Resources/images/orange_zwinkern.png";
import {FaFileDownload} from "react-icons/fa";
import {Tooltip} from "@mantine/core";

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

                    <div
                        style={{width: "100%", display: 'flex', flexDirection: "row", justifyContent: "space-between"}}>
                        <div>
                            <Link className="link" to={'../Gamemodi'}
                                  onClick={() => setData(data.badgeID, data.modis)}>
                                Start
                            </Link>
                        </div>
                        <div>
                            <Tooltip label="Hier kannst du dir den Inhalt dieses Badges in einer PDF-Datei herunterladen.">
                                <a className="downloadButton" href={img1} download>
                                    <FaFileDownload/>
                                </a>
                            </Tooltip>
                        </div>
                    </div>
                    <span className="circle"/>
                </div>
                :
                <div className="badgeline-item-content">
                <span className="tag">
                    🔒
                </span>
                    <h3>{data.title}</h3>
                    <p style={{filter: 'blur(4px)'}}>{data.text}</p>

                    <div
                        style={{
                            width: "100%",
                            display: 'flex',
                            flexDirection: "row",
                            justifyContent: "space-between",
                            filter: 'blur(4px)'
                        }}>
                        <div>
                            <Tooltip disabled='disabled'
                                     label="Hier kannst du dir den Inhalt dieses Badges in einer PDF-Datei herunterladen.">
                                <a className="downloadButton">
                                    <FaFileDownload/>
                                </a>
                            </Tooltip>
                        </div>
                        <div>
                            <Link disabled='disabled' className="link" to={''}
                                  onClick={() => setData(data.badgeID)}>
                                Start
                            </Link>
                        </div>
                    </div>
                    <span className="circle"/>
                </div>
        }
    </div>
);

export default BadgeItem;
