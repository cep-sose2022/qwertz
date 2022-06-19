import React from 'react';
import { Link, Outlet } from "react-router-dom";
import NavBar from "../NavBar";


const Dashboard = () => {
    return (
        <>
            <header id="header">
                <NavBar>
                    <Link to='../Startseite'>Startseite</Link>
                    <Link to='../Dashboard/Batches'>Batches</Link>
                    <Link to='../Dashboard/Sammlung'>Meine Sammlung</Link>
                </NavBar>
            </header>
            <div id="body">
                <section className="services section" id="services">
                    <div className="container">
                        <Outlet />
                    </div>
                </section>
            </div>
        </>

    );
}

export default Dashboard;
