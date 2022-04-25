import React from 'react';
import Anapur_Ag_Logo_removebg from '../Resources/images/Anapur_Ag_Logo-removebg.png';

const Header = (props: { children: any; }) => {

    const {children} = props;

    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <img src={Anapur_Ag_Logo_removebg} alt=""/>
                </div>

                <div className="links">
                    <ul>
                        {children.map((child: any) => (
                            <li key={Math.floor(Math.random() * 10)}>{child}</li>))}
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Header;


// <li><Link to='Startseite'>Startseite </Link></li>
// <li><Link to='Dashboard'>Dashboard </Link></li>
// <li><Link to='Dashboard/Badges'>Badges </Link></li>
// <li><Link to='Dashboard/Gamemodi/Zuordnung'>Zuordnung </Link></li>
// <li><Link to='Dashboard/Gamemodi/Ablaufanordnung'>Ablaufanordnung </Link></li>
// <li><Link to='Dashboard/Gamemodi/Endscreen'>Endscreen </Link></li>
// <li><Link to='Dashboard/Gamemodi/Wimmelbild'>Wimmelbild </Link></li>
