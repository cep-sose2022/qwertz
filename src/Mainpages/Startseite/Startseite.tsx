import React from 'react';
import Header from "../Header";
import { Link } from "react-router-dom";

// import images
import img1 from './../images/avatarmitkreis.png'
import img2 from './../images/avatar2mitkreis.png'
import img3 from './../images/icons8-lebenslauf.png'
import img4 from './../images/icons8-medien.png'
import img5 from './../images/icons8-verschlüsseln.png'
import logo from './../images/Anapur_Ag_Logo-removebg.png'

const Startseite = () => {
    return (
        <div>
            <>
                <Header>
                    <Link to="#header">Startseite</Link>
                    <Link to="#services">Schulung</Link>
                    <Link to="#about">Über uns</Link>
                    <Link to="#zitat">Zitat</Link>
                    <Link to="../Dashboard" className="active">Jetzt starten</Link>
                </Header>
                <main>
                    <header id="header">
                        <nav>
                            <div className="container">
                                <div className="logo">
                                    <img className="icon"
                                        src={logo}
                                        alt="icon" />
                                </div>
                                <div className="links">
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
                                        <li>
                                            <Link to="/Dashboard/Badges" className="active">Jetzt starten</Link>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="header-content">
                            <div className="container grid-2">
                                <div className="column-1">
                                    <h1 className="header-title">Hallo, ich bin Zepp</h1>
                                    <p className="text">
                                        Ich bin Zepp, OT-Security Spezialist mit langjähriger Erfahrung.
                                        Ich begleite dich auf deinem Weg!
                                    </p>
                                    <a href="/Dashboard/Badges" className="btn">
                                        Jetzt starten
                                    </a>
                                </div>
                                <img className="column-2 image"
                                    src={img1}
                                    alt="logo" />
                            </div>
                        </div>
                    </header>
                    <section className="services section" id="services">
                        <div className="container">
                            <div className="section-header">
                                <h3 className="title" data-title="Was wirst du lernen?">
                                    Schulung
                                </h3>
                                <p className="text">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                </p>
                            </div>
                            <div className="cards">
                                <div className="card-wrap">
                                    <div className="card" data-card="Lorem ipsum">
                                        <div className="card-content z-index">
                                            <img className="icon"
                                                src={img5}
                                                alt="icon" />
                                            <h3 className="title-sm">Lorem ipsum</h3>
                                            <p className="text">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                                aliquyam
                                            </p>
                                            <a href="#" className="btn small">
                                                Mehr lesen
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-wrap">
                                    <div className="card" data-card="Lorem ipsum">
                                        <div className="card-content z-index">
                                            <img className="icon"
                                                src={img3}
                                                alt="icon" />
                                            <h3 className="title-sm">Lorem ipsum</h3>
                                            <p className="text">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                                aliquyam
                                            </p>
                                            <a href="#" className="btn small">
                                                Mehr lesen
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-wrap">
                                    <div className="card" data-card="Lorem ipsum">
                                        <div className="card-content z-index">
                                            <img className="icon"
                                                src={img4}
                                                alt="icon" />
                                            <h3 className="title-sm">Lorem ipsum</h3>
                                            <p className="text">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                                aliquyam
                                            </p>
                                            <a href="#" className="btn small">
                                                Mehr lesen
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about section" id="about">
                        <div className="container">
                            <div className="section-header">
                                <h3 className="title" data-title="Wer sind wir?">
                                    Über uns
                                </h3>
                            </div>
                            <div className="section-body grid-2">
                                <div className="column-1">
                                    <h3 className="title-sm">Hallo, ich bin Zepp.</h3>
                                    <p className="text">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                        erat, sed diam voluptua. At vero eos et accusam et justo duo
                                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                        sanctus est Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <div className="column-2 image">
                                    <img className="column-2 image"
                                        src={img1}
                                        alt="logo" />                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about section" id="about">
                        <div className="container">
                            <div className="section-body grid-2">
                                <div className="column-1">
                                    <h3 className="title-sm">Hallo, ich bin Lorem ipsum.</h3>
                                    <p className="text">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                        erat, sed diam voluptua. At vero eos et accusam et justo duo
                                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                        sanctus est Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <div className="column-2 image">
                                    <img className="column-2 image"
                                        src={img2}
                                        alt="logo" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="zitat section" id="zitat">
                        <div className="container">
                            <div className="section-header">
                                <h3 className="title" data-title="Zitat">
                                    Dein Zitat für heute
                                </h3>
                            </div>
                            <div className="quote-body">
                                <div className="icon-quote">
                                    <span className="icon2"></span>
                                    <i className="fas fa-quote-left"></i>
                                    <p className="quote">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                </div>
                                <div className="author">― Lorem ipsum</div>

                                <div className="quote-buttons">
                                    <div className="btnzitat">
                                        <button id="quote-btn">Neues Zitat</button>
                                    </div>
                                </div>
                            </div>

                            <script src="/zitate.js"></script>
                        </div>
                    </section>
                </main>
            </>
        </div>
    );
}

export default Startseite;
