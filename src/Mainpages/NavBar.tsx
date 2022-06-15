import React from 'react';
import erlenmeyer from '../Resources/animation_erlenmeyer.png';
import { Link } from "react-router-dom";

const NavBar = (props: { children: any; }) => {

    const { children } = props;

    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <Link to={'../Startseite'}>
                        <div
                            className="icon"
                        />
                    </Link>
                </div>

                <div className="links">
                    <ul>
                        {children.map((child: any) => (
                            <li key={Math.random()}>{child}</li>))}
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default NavBar;
