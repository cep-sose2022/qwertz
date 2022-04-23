import React from 'react';
import {Link, Outlet} from "react-router-dom";
import Header from "../Header";

const Dashboard = () => {
    return (
        <div>
            <Header>
                <Link to='../Startseite'>Startseite </Link>
                <Link to='../Dashboard'>Dashboard </Link>
                <Link to='../Dashboard/Badges'>Badges </Link>
                <Link to='../Dashboard/Gamemodi/Zuordnung'>Zuordnung </Link>
                <Link to='../Dashboard/Gamemodi/Ablaufanordnung'>Ablaufanordnung </Link>
                <Link to='../Dashboard/Gamemodi/Endscreen'>Endscreen </Link>
                <Link to='../Dashboard/Gamemodi/Wimmelbild'>Wimmelbild </Link>
            </Header>
            <h1>Dashboard</h1>
            <Outlet/>
        </div>

    );
}

export default Dashboard;
