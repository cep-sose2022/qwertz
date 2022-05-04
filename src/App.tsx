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
import Video from './Wissensmodi/Video/Video';
import Konversation from './Wissensmodi/Konversation/Konversation';

// import CSS
import './Mainpages/style.css';
import './Gamemodi/Zuordnung/styles.css'

// import Json Data
import JsonZitate from './Resources/Json/zitate.json';
import Footer from "./Mainpages/Startseite/Footer";


function App() {


    return (
        <Router>
            <div style={{backgroundColor: 'lightgreen'}}>
                <a> Zum Debuggen und Testen aller Seiten, kommt dann am Ende noch weg</a>
                <br/>
                <Link to='Startseite'>Startseite </Link>
                <Link to='Dashboard'>Dashboard </Link>
                <Link to='Dashboard/Badges'>Badges </Link>
                <Link to='Dashboard/Gamemodi/Zuordnung'>Zuordnung </Link>
                <Link to='Dashboard/Gamemodi/Ablaufanordnung'>Ablaufanordnung </Link>
                <Link to='Dashboard/Gamemodi/Endscreen'>Endscreen </Link>
                <Link to='Dashboard/Gamemodi/Wimmelbild'>Wimmelbild </Link>
                <Link to='Dashboard/Gamemodi/Konversation'>Konversation </Link>
                <Link to='Dashboard/Gamemodi/Video'>Video </Link>
            </div>

            <Routes>
                {/*MainPage*/}
                <Route path="" element={<Startseite JsonZitate={JsonZitate}/>}/>
                <Route path="Startseite" element={<Startseite JsonZitate={JsonZitate}/>}/>
                {/*Dashboard un alles was darunter ist }*/}
                <Route path="Dashboard" element={<Dashboard/>}>
                    <Route path="Badges" element={<Badges/>}/>
                    <Route path="Gamemodi" element={<Gamemodi/>}>
                        {/*Alles was unter Gamemodi ist*/}
                        <Route path="Ablaufanordnung" element={<Ablaufanordnung/>}/>
                        <Route path="Wimmelbild" element={<Wimmelbild/>}/>
                        <Route path="Zuordnung" element={<Zuordnung/>}/>
                        <Route path="Endscreen" element={<Endscreen/>}/>
                        <Route path="Konversation" element={<Konversation/>}/>
                        <Route path="Video" element={<Video/>}/>
                    </Route>
                </Route>
            </Routes>

            <Footer/>

        </Router>
    );

}

export default App;
