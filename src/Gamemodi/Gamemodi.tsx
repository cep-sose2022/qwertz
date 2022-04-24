import React from 'react';
import { Link, Outlet, useParams } from "react-router-dom";
import Fortschrittsanzeige from "./Fortschrittsanzeige";

const Gamemodi = () => {
    const url = (window.location.href).split("/");
    const { badgeNr } = useParams();
    return (
        <>
            <div className="section-header">
                <h3 className="title" data-title={"Badge " + badgeNr}>{url[url.length - 1]}</h3>
                <br />
                <Fortschrittsanzeige />
                <br />
                <Link to="#" className="xbutton"></Link>
            </div>

            <div className="container">

                <Outlet />
            </div>

        </>
    );
}

export default Gamemodi;
