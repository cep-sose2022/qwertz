import React from 'react';
import { Link, Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Headline from '../Startseite/Headline';
import "./Dashboard.css"
import bild from '../../Resources/DashboardBild.jpeg';
const Dashboard = () => {
    return (
        <header id="header">
            <NavBar>
                <Link to='../Startseite'>Startseite</Link>
                <Link to='../Dashboard/Badges'>Badges</Link>
                <Link to='../Dashboard'>Dashboard</Link>
            </NavBar>
            <section className="services section" id="services">
                <div className="container">
                    <Outlet />
                    <Headline title={"Dashboard"} headline={"Meine Sammlung"} text={""} />
                    <img className="dashboardBild" src={bild} ></img>

                    <div className="tube">
                        <div className="shine"></div>
                        <div className="body">
                            <div className="liquid">
                                <div className="percentage"></div>
                            </div>
                        </div>
                        <div className="meter">
                            <div>100</div>
                            <div>80</div>
                            <div>60</div>
                            <div>40</div>
                            <div>20</div>
                        </div>
                        <div className="bubbles">
                        </div>
                    </div>
                </div>
            </section>
        </header>

    );
}

export default Dashboard;
