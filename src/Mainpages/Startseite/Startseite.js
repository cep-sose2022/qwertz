import React from 'react';
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

import NavBar from "../NavBar";
import Zitat from './Zitat'

// import images
import img1 from './../../Resources/images/reagenzglasOrangetransparent.png'
import img2 from './../../Resources/images/reagenzglasgruentransparent.png'
import img3 from './../../Resources/images/icons8-lebenslauf.png'
import img4 from './../../Resources/images/icons8-medien.png'
import img5 from './../../Resources/images/icons8-verschlüsseln.png'
import Header from "./Header";
import Headline from "./Headline";
import Card from "./Card";
import Introduction from "./Introduction";

const Startseite = (props) => {
    const {JsonZitate} = props;

    return (
        <main>
            <NavBar>
                <HashLink to="#header">Startseite</HashLink>
                <HashLink to="#services">Schulung</HashLink>
                <HashLink to="#about">Über uns</HashLink>
                <HashLink to="#zitat">Zitat</HashLink>
                <Link to="../Dashboard" className="active">Jetzt starten</Link>
            </NavBar>

            <header id="header">
                <Header/>
            </header>

            <section className="services section" id="services">
                <div className="container">
                    <Headline
                        title={"Was wirst du lernen"}
                        headline={"Schulung"}
                        text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"}
                    />

                    <div className="cards">
                        <Card
                            image={img5}
                            title={"Lorem ipsum"}
                            text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, " +
                                "seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"}
                            link={"#"}
                        />
                        <Card
                            image={img3}
                            title={"Lorem ipsum"}
                            text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, " +
                                "seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"}
                            link={"#"}
                        />
                        <Card
                            image={img4}
                            title={"Lorem ipsum"}
                            text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, " +
                                "seddiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"}
                            link={"#"}
                        />
                    </div>
                </div>
            </section>

            <section className="about section" id="about">
                <div className="container">
                    <Headline title={"Wer sind wir"} headline={"Über uns"} text={""}/>

                    <Introduction
                        name={"Zepp"}
                        text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" +
                            "nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam" +
                            "erat, sed diam voluptua. At vero eos et accusam et justo duo" +
                            "dolores et ea rebum. Stet clita kasd gubergren, no sea takimata" +
                            "sanctus est Lorem ipsum dolor sit amet."}
                        image={img1}
                    />
                </div>
            </section>
            <section className="about section" id="about">
                <div className="container">
                    <Introduction
                        name={"Ted"}
                        text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" +
                            "nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam" +
                            "erat, sed diam voluptua. At vero eos et accusam et justo duo" +
                            "dolores et ea rebum. Stet clita kasd gubergren, no sea takimata" +
                            "sanctus est Lorem ipsum dolor sit amet."}
                        image={img2}
                    />
                </div>
            </section>

            <section className="zitat section" id="zitat">
                <div className="container">
                    <Headline title={"Zitat"} headline={"Dein Zitat für heute"} text={""}/>
                    <Zitat JsonData={JsonZitate}/>
                </div>
            </section>
        </main>
    );
}

export default Startseite;
