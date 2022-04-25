import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

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

function App() {

    return (
        <Router>
            <div style={{ backgroundColor: 'green' }}>
                <a> Zum Debugen un Testen aller Seiten, kommt dann am Ende noch weg</a>
                <br />
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
                <Route path="" element={<Startseite />} />
                <Route path="Startseite" element={<Startseite />} />
                {/*Dashboard un alles was darunter ist }*/}
                <Route path="Dashboard" element={<Dashboard />}>
                    <Route path="Badges" element={<Badges />} />
                    <Route path="Gamemodi" element={<Gamemodi />}>
                        {/*Alles was unter Gamemodi ist*/}
                        <Route path="Ablaufanordnung" element={<Ablaufanordnung />} />
                        <Route path="Wimmelbild" element={<Wimmelbild />} />
                        <Route path="Zuordnung" element={<Zuordnung />} />
                        <Route path="Endscreen" element={<Endscreen />} />
                        <Route path="Konversation" element={<Konversation />} />
                        <Route path="Video" element={<Video />} />
                    </Route>
                </Route>
            </Routes>

            <div>
                <footer className="footer">
                    <div className="container">
                        <div className="grid-4">
                            <div className="grid-4-col footer-about">
                                <h3 className="title-sm">About</h3>
                                <p className="text">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                            <div className="grid-4-col footer-links">
                                <h3 className="title-sm">Links</h3>
                                <ul>
                                    <li>
                                        <a href="#header">Startseite</a>
                                    </li>
                                    <li>
                                        <a href="#services">Schulung</a>
                                    </li>
                                    <li>
                                        <a href="#about">Über uns</a>
                                    </li>
                                    <li>
                                        <a href="#zitat">Zitat</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="grid-4-col footer-links">
                                <h3 className="title-sm">Schulungen</h3>
                                <ul>
                                    <li>
                                        <a href="#">Lorem ipsum</a>
                                    </li>
                                    <li>
                                        <a href="#">Lorem ipsum</a>
                                    </li>
                                    <li>
                                        <a href="#">Lorem ipsum</a>
                                    </li>
                                    <li>
                                        <a href="#">Lorem ipsum</a>
                                    </li>
                                    <li>
                                        <a href="#">Lorem ipsum</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="LEER"></div>
                        </div>
                        <div className="bottom-footer">
                            <div className="copyright">
                                <p className="text">
                                    MIT License
                                    <br />
                                    -----------
                                    <br />
                                    Copyright© 2022 Team QWERTZ
                                    <br />| Made by
                                    <span>Team QWERTZ</span>
                                </p>
                            </div>
                            <div className="followme-wrap">
                                <div className="followme">
                                    <span className="footer-line" />
                                    <div className="social-media">
                                        <a href="https://www.linkedin.com/company/anapur-ag/">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                </div>
                                <div className="back-btn-wrap">
                                    <a href="#" className="back-btn">
                                        <i className="fas fa-chevron-up" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    );

}

export default App;
