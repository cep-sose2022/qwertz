import React from 'react';
import erlenmeyer from '../Resources/erlenmeyer_animiert2.gif';

const NavBar = (props: { children: any; }) => {

    const { children } = props;

    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <img
                        className="icon"
                        src={erlenmeyer}
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
