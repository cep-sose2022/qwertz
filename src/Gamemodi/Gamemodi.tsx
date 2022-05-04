import React, { createContext, useState } from 'react';
import { Outlet, useParams } from "react-router-dom";
import Fortschrittsanzeige from "./Fortschrittsanzeige";
import { Button, Group, Modal } from "@mantine/core";
import { useNavigate } from "react-router";

const modis = [
    {
        passed: false,
        title: 'Konversation'
    },
    {
        passed: false,
        title: 'Video'
    },
    {
        passed: false,
        title: 'Wimmelbild'
    },
    {
        passed: false,
        title: 'Ablaufanordnung'
    },
    {
        passed: false,
        title: 'Zuordnung'
    }
]

export const ModiContext = createContext({});

const Gamemodi = () => {
    const { badgeNr } = useParams();
    const [modalOpened, setModalOpened] = useState(false);
    const navigator = useNavigate();

    const markAsPassed = (title: string) => {
        modis.filter(modi => modi.title === title)[0].passed = true;

        if (modis.filter(modi => !modi.passed).length !== 0)
            navigator('./' + modis.filter(modi => !modi.passed)[0].title)
        else
            navigator('./Endscreen');
    }

    return (
        <>
            <Modal opened={modalOpened} onClose={() => setModalOpened(false)}>
                <p>Möchtest du wirklich abbrechen?</p>
                <Group>
                    <Button onClick={() => {
                        navigator('../Badges')
                        setModalOpened(false)
                    }}>Ja</Button>
                    <Button onClick={() => setModalOpened(false)}>Nein</Button>
                </Group>
            </Modal>
            <div className="section-header">
                <h3 className="title" data-title={"Badge " + badgeNr}>{modis.filter(modi => !modi.passed)[0].title}</h3>
                <br />
                <Fortschrittsanzeige modis={modis} />
                <br />
                <div onClick={() => setModalOpened(true)} className="xbutton"></div>
            </div>

            <div className="container">
                <ModiContext.Provider value={{ markAsPassed }}>
                    <Outlet />
                </ModiContext.Provider>
            </div>

        </>
    );
}

export default Gamemodi;
