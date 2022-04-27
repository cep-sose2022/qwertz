import React from 'react';
// @ts-ignore
import {HashLink} from 'react-router-hash-link';

const Footer = () => {


    return (
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
                            <li key={Math.floor(Math.random() * 10000)}>
                                <HashLink to="#header">Startseite</HashLink>
                            </li>
                            <li key={Math.floor(Math.random() * 10000)}>
                                <HashLink to="#services">Schulung</HashLink>
                            </li>
                            <li key={Math.floor(Math.random() * 10000)}>
                                <HashLink to="#about">Über uns</HashLink>
                            </li>
                            <li key={Math.floor(Math.random() * 10000)}>
                                <HashLink to="#zitat">Zitat</HashLink>
                            </li>
                        </ul>
                    </div>
                    <div className="grid-4-col footer-links">
                        <h3 className="title-sm">Schulungen</h3>
                        <ul>
                            <li key={Math.floor(Math.random() * 10000)}><a href="#">Lorem ipsum</a></li>
                            <li key={Math.floor(Math.random() * 10000)}><a href="#">Lorem ipsum</a></li>
                            <li key={Math.floor(Math.random() * 10000)}><a href="#">Lorem ipsum</a></li>
                            <li key={Math.floor(Math.random() * 10000)}><a href="#">Lorem ipsum</a></li>
                            <li key={Math.floor(Math.random() * 10000)}><a href="#">Lorem ipsum</a></li>
                        </ul>
                    </div>
                    <div className="LEER"></div>
                </div>

                <div className="bottom-footer">
                    <div className="copyright">
                        <p className="text">
                            MIT License
                            <br/>
                            -----------
                            <br/>
                            Copyright© 2022 Team QWERTZ
                            <br/>| Made by
                            <span>Team QWERTZ</span>
                        </p>
                    </div>
                    <div className="followme-wrap">
                        <div className="followme">
                            <span className="footer-line"/>
                            <div className="social-media">
                                <a href="https://www.linkedin.com/company/anapur-ag/">
                                    <i className="fab fa-linkedin-in"/>
                                </a>
                            </div>
                        </div>
                        <div className="back-btn-wrap">
                            <a href="#" className="back-btn">
                                <i className="fas fa-chevron-up"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
