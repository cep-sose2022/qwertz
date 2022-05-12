import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import NavBar from "../NavBar";
import Zitat from './Zitat'

// import images
import img1 from './../../Resources/images/orange_normal.png'
import img2 from './../../Resources/images/erlenmeyerkolben_gruen_normal.png'
import img3 from './../../Resources/images/icons8-controller.png'
import img4 from './../../Resources/images/icons8-medien.png'
import img5 from './../../Resources/images/icons8-online-learning.png'
import Header from "./Header";
import Headline from "./Headline";
import Card from "./Card";
import Introduction from "./Introduction";
import { Spoiler } from '@mantine/core';
const Startseite = (props) => {
    const { JsonZitate } = props;

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
                <Header />
            </header>

            <section className="services section" id="services">
                <div className="container">
                    <Headline
                        title={"Was wirst du lernen"}
                        headline={"Schulung"}
                        text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"}
                    />

                    <div className="cards">



                        <Spoiler maxHeight={450} showLabel="Show more" hideLabel="Hide">
                            {<Card
                                image={img5}
                                title={"E-Learning-Plattform"}
                                text={"Unsere E-Learning-Module sind für Automatisierungsingenieur aus dem Sektor Chemie perfekt geeignet. Sie umfasst Wissensmodus und interaktive Module, die spielerisch zur Auseinandersetzung mit OT-Security anregen. "}
                            />}
                        </Spoiler>

                        <Spoiler maxHeight={450} showLabel="Show more" hideLabel="Hide">
                            {<Card
                                image={img3}
                                title={"Awareness-Schulung"}
                                text={"Der Schulungskurs besteht aus 2 Wissensmodulen und 3 Gamemodulen, die die wichtigsten Angriffsvektoren und den Schutz vor Bedrohungen behandeln. Die einzelnen Module liefern wertvolle Informationen über die OT-Security."}
                            />}
                        </Spoiler>

                        <Spoiler maxHeight={450} showLabel="Show more" hideLabel="Hide">
                            {<Card
                                image={img4}
                                title={"Test"}
                                text={"Der Schulungskurs besteht aus 2 Wissensmodulen und 3 Gamemodulen, die die wichtigsten Angriffsvektoren und den Schutz vor Bedrohungen behandeln. Die einzelnen Module liefern wertvolle Informationen über die OT-Security."}
                            />}
                        </Spoiler>

                    </div>
                </div>
            </section>

            <section className="about section" id="about">
                <div className="container">
                    <Headline title={"Wer sind wir"} headline={"Über uns"} text={""} />

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
                        text={"testtesttesttesttesttesttesttesttesttest testtesttesttesttest testtesttesttest"}
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
