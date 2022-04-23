import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

// import MainPages
import Startseite from './Mainpages/Startseite/Startseite';
import Dashboard from './Mainpages/Dashboard/Dashboard';
import Badges from './Mainpages/Badges/Badges';

// import Gamemodi
import Gamemodi from './Gamemodi/Gamemodi';
import Ablaufanordnung from './Gamemodi/Ablaufanordnung/Ablaufanordnung';
import Wimmelbild from './Gamemodi/Wimmelbild/Wimmelbild';
import Zuordnung from './Gamemodi/Zuordnung/Zuordnung';
import Endscreen from './Gamemodi/Endscreen/Endscreen';

// import CSS
import './Mainpages/style.css';
import './Gamemodi/Zuordnung/styles.css'

function App() {

    return (
        <Router>
            <div style={{backgroundColor: 'green'}}>
                <a> Zum Debugen un Testen aller Seiten, kommt dann am Ende noch weg</a>
                <br/>
                <Link to='Startseite'>Startseite </Link>
                <Link to='Dashboard'>Dashboard </Link>
                <Link to='Dashboard/Badges'>Badges </Link>
                <Link to='Dashboard/Gamemodi/Zuordnung'>Zuordnung </Link>
                <Link to='Dashboard/Gamemodi/Ablaufanordnung'>Ablaufanordnung </Link>
                <Link to='Dashboard/Gamemodi/Endscreen'>Endscreen </Link>
                <Link to='Dashboard/Gamemodi/Wimmelbild'>Wimmelbild </Link>
            </div>

            <Routes>
                {/*MainPage*/}
                <Route path="" element={<Startseite/>}/>
                <Route path="Startseite" element={<Startseite/>}/>
                {/*Dashboard un alles was darunter ist }*/}
                <Route path="Dashboard" element={<Dashboard/>}>
                    <Route path="Badges" element={<Badges/>}/>
                    <Route path="Gamemodi" element={<Gamemodi/>}>
                        {/*Alles was unter Gamemodi ist*/}
                        <Route path="Ablaufanordnung" element={<Ablaufanordnung/>}/>
                        <Route path="Wimmelbild" element={<Wimmelbild/>}/>
                        <Route path="Zuordnung" element={<Zuordnung/>}/>
                        <Route path="Endscreen" element={<Endscreen/>}/>
                    </Route>
                </Route>
            </Routes>

            <div>
                Footer
            </div>
        </Router>
    );

}

export default App;
