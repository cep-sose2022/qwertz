import React from 'react';
import erlenmeyer from '../Resources/erlenmeyer_animiert.gif';
import { Link } from "react-router-dom";

const NavBar = (props: { children: any; }) => {

    const { children } = props;

    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <Link to={'../Startseite'}>
                        <img
                            className="icon"
                            src={erlenmeyer}
                            alt="icon"
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
