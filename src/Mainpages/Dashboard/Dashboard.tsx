import React from 'react';
import {Link, Outlet} from "react-router-dom";
import Header from "../Header";

const Dashboard = () => {
    return (
        <div>
            <Header>
                <Link to='../Startseite'>Startseite</Link>
                <Link to='../Dashboard/Badges'>Badges</Link>
                <Link to='../Dashboard'>Dashboard</Link>
            </Header>
            <section className="services section" id="services">
                <Outlet/>
            </section>

        </div>

    );
}

export default Dashboard;
