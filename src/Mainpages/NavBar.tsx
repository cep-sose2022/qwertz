import React from 'react';
import Anapur_Ag_Logo_removebg from '../Resources/images/Anapur_Ag_Logo-removebg.png';

const NavBar = (props: { children: any; }) => {

    const {children} = props;

    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <img
                        className="icon"
                        src={Anapur_Ag_Logo_removebg}
                        alt="icon"
                    />
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
