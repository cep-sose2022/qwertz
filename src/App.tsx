import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

// import MainPages
import Startseite from './Mainpages/Startseite/Startseite';
import Dashboard from './Mainpages/Dashboard/Dashboard';
import Badges from './Mainpages/Badges/Badges';
import Sammlung from './Mainpages/Sammlung/Sammlung';

// import Gamemodi
import Gamemodi from './Gamemodi/Gamemodi';
import Ablaufanordnung from './Gamemodi/Ablaufanordnung/Ablaufanordnung';
import Wimmelbild from './Gamemodi/Wimmelbild/Wimmelbild';
import Zuordnung from './Gamemodi/Zuordnung/Zuordnung';
import Endscreen from './Gamemodi/Endscreen/Endscreen';
import Konversation from './Wissensmodi/Konversation/Konversation';

// import CSS
import './Style/style.css';
import './Gamemodi/Zuordnung/Zuordnung.css'

// import Json Data
import JsonZitate from './Resources/Json/zitate.json';
import Footer from "./Mainpages/Startseite/Footer";
import Error503Page from "./Gamemodi/Error503Page";
import MultipleChoice from "./Wissensmodi/MultipleChoice/MultipleChoice";
import ScrollToTop from "./ScrollToTop";


function App() {
    return (
        <Router>
            <ScrollToTop/>
            {/*{*/}

            {/*    <div style={{ backgroundColor: 'lightgreen' }}>*/}
            {/*        <a> Zum Debuggen und Testen aller Seiten, kommt dann am Ende noch weg</a>*/}
            {/*        <br />*/}
            {/*        <Link to='Startseite'>Startseite </Link>*/}
            {/*        <Link to='Dashboard/Sammlung'>Dashboard </Link>*/}
            {/*        <Link to='Dashboard/Badges'>Badges </Link>*/}
            {/*        <Link to='Dashboard/Gamemodi/Zuordnung'>Zuordnung </Link>*/}
            {/*        <Link to='Dashboard/Gamemodi/Ablaufanordnung'>Ablaufanordnung </Link>*/}
            {/*        <Link to='Dashboard/Gamemodi/Endscreen'>Endscreen </Link>*/}
            {/*        <Link to='Dashboard/Gamemodi/Wimmelbild'>Wimmelbild </Link>*/}
            {/*        <Link to='Dashboard/Gamemodi/Konversation'>Konversation </Link>*/}
            {/*        <Link to='Dashboard/Gamemodi/Video'>Video </Link>*/}
            {/*        */}
            {/*    </div>*/}

            {/*}*/}
            <Routes>
                {/*MainPage*/}
                <Route path="" element={<Startseite JsonZitate={JsonZitate}/>}/>
                <Route path="Startseite" element={<Startseite JsonZitate={JsonZitate}/>}/>
                {/*Dashboard outlets}*/}
                <Route path="Dashboard" element={<Dashboard/>}>
                    <Route path="Batches" element={<Badges/>}/>
                    <Route path="Sammlung" element={<Sammlung/>}/>
                    <Route path="Error503" element={<Error503Page/>}/>
                    <Route path="Gamemodi" element={<Gamemodi/>}>
                        {/*gamemodi outlets */}
                        <Route path="Ablaufanordnung" element={<Ablaufanordnung />} />
                        <Route path="Wimmelbild" element={<Wimmelbild />} />
                        <Route path="Zuordnung" element={<Zuordnung />} />
                        <Route path="Endscreen" element={<Endscreen />} />
                        <Route path="Konversation" element={<Konversation />} />
                        <Route path="MultipleChoice" element={<MultipleChoice />} />
                    </Route>
                </Route>
            </Routes>

            <Footer />

        </Router>
    );

}

export default App;
