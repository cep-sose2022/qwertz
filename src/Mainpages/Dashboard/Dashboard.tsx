import React from 'react';
import {Link, Outlet} from "react-router-dom";
import Header from "../Header";

const Dashboard = () => {
    return (
        <header id="header">
            <Header>
                <Link to='../Startseite'>Startseite</Link>
                <Link to='../Dashboard/Badges'>Badges</Link>
                <Link to='../Dashboard'>Dashboard</Link>
            </Header>
            <section className="services section" id="services">
                <div className="container">
                    <Outlet/>
                </div>
            </section>
        </header>

    );
}

export default Dashboard;
