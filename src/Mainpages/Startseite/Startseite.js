import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import NavBar from "../NavBar";
import Zitat from './Zitat'

// import Zepp and Ted for "Über uns"- Section
import img1 from './../../Resources/images/Zepp/orange_zwinkern.png'
import img2 from './../../Resources/images/Ted/erlenmeyerkolben_gruen_normal.png'

// import icon picture for Cards
import img3 from './../../Resources/images/Startseite-icons/icons8-controller.png'
import img5 from './../../Resources/images/Startseite-icons/icons8-online-learning.png'

import Header from "./Header";
import Headline from "./Headline";
import Card from "./Card";
import Introduction from "./Introduction";

const Startseite = (props) => {
    const { JsonZitate } = props;

    return (
        <main>

            <NavBar>
                <HashLink to="#header">Startseite</HashLink>
                <HashLink to="#services">Schulung</HashLink>
                <HashLink to="#about">Über uns</HashLink>
                <HashLink to="#zitat">Zitat</HashLink>
                <Link to="../Dashboard/Batches" className="active">Jetzt starten</Link>
            </NavBar>

            <header id="header">
                <Header />
            </header>

            <section className="services section" id="services">
                <div className="container">
                    <Headline
                        title={"Was wirst du lernen"}
                        headline={"Schulung"}
                        text={"OT-Awareness"}
                    />

                    <div className="cards">



                        <Card
                            image={img5}
                            title={"E-Learning-Plattform"}
                            text={"Unsere E-Learning-Module sind für Automatisierungsingenieur aus dem Sektor Chemie perfekt geeignet. Sie umfasst Wissensmodus und interaktive Module, die spielerisch zur Auseinandersetzung mit OT-Security anregen. "}
                        />

                        <Card
                            image={img3}
                            title={"Awareness-Schulung"}
                            text={"Der Schulungskurs besteht aus 2 Wissensmodulen und 3 Gamemodulen, die die wichtigsten Angriffsvektoren und den Schutz vor Bedrohungen behandeln. Die einzelnen Module liefern wertvolle Informationen über die OT-Security."}
                        />

                    </div>
                </div>
            </section>
            <Headline title={"Wer sind wir"} headline={"Über uns"} text={""} />
            <section className="about section" id="about">
                <div className="container">
                    <Introduction
                        name={"Zepp"}
                        text={"Ich bin Zepp, OT-Security Spezialist mit langjähriger Erfahrung."}
                        image={img1}
                    />
                </div>
            </section>
            <section className="about section" id="about">
                <div className="container">
                    <Introduction
                        name={"Ted"}
                        text={"Ich bin Ted, und habe keinerlei Erfahrungen mit OT-Security."}
                        image={img2}
                    />
                </div>
            </section>

            <section className="zitat section" id="zitat">
                <div className="container">
                    <Headline title={"Zitat"} headline={"Dein Zitat für heute"} text={""} />
                    <Zitat JsonData={JsonZitate} />
                </div>
            </section>
        </main>

    );

}

export default Startseite;
