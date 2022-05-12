import React from 'react';
import './Startseite.css';

// @ts-ignore
import { HashLink } from 'react-router-hash-link';

const Footer = () => {


    return (
        <footer className="footer">
            <div className="container">
                <div className="grid-4">
                    <div className="grid-4-col footer-about">
                        <h3 className="title-sm">Über die Schulung</h3>
                        <p className="text">
                            OT-Security ist ein wichtiger werdender Teil der Industrieanlagen. Im Rahmen dieser Awareness Schulung soll das Bewusstsein für mögliche Verletzungen der Industrieanlagen geschärft werden. Darunter fällt die Simulationen von Gefahren, die das menschliche Verhalten ausnutzen, um zum Beispiel durch Phishing-Mails an wertvolle Informationen zu gelangen.
                        </p>
                    </div>
                    <div className="grid-4-col footer-links">
                        <h3 className="title-sm">Links</h3>
                        <ul>
                            <li key={Math.random()}>
                                <HashLink to="#header">Startseite</HashLink>
                            </li>
                            <li key={Math.random()}>
                                <HashLink to="#services">Schulung</HashLink>
                            </li>
                            <li key={Math.random()}>
                                <HashLink to="#about">Über uns</HashLink>
                            </li>
                            <li key={Math.random()}>
                                <HashLink to="#zitat">Zitat</HashLink>
                            </li>
                        </ul>
                    </div>
                    <div className="grid-4-col footer-links">
                        <h3 className="title-sm">Schulungen</h3>
                        <ul>
                            <li key={Math.random()}><a href="#">Wissensmodulen</a></li>
                            <li key={Math.random()}><a href="#">Gamemodulen</a></li>

                        </ul>
                    </div>
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
                            <span> Team QWERTZ</span>
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

    );
}

export default Footer;
