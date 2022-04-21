import React from 'react';
import './App.css';
// @ts-ignore
import {BrowserRouter as Router, Route} from "react-router-dom";

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

function App() {
    // @ts-ignore
    return (
        <Router>
            {/*MainPage*/}
            <Route path="/" exact component={Startseite}/>
            {/*Dashboard un alles was darunter ist }*/}
            <Route path="/Dashboard" component={Dashboard}/>

            <Route path="/Dashboard/Gamemodi" component={Gamemodi}/>
            {/*Alles was unter Gamemodi ist*/}
            <Route path="/Dashboard/Gamemodi/Ablaufanordnung" component={Ablaufanordnung}/>
            <Route path="/Dashboard/Gamemodi/Wimmelbild" component={Wimmelbild}/>
            <Route path="/Dashboard/Gamemodi/Zuordnung" component={Zuordnung}/>
            <Route path="/Dashboard/Gamemodi/Endscreen" component={Endscreen}/>

            <Route path="/Dashboard/Badges" component={Badges}/>


        </Router>
    );
}

export default App;
