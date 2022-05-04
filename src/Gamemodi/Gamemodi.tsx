import React, {createContext, useState} from 'react';
import {Link, Navigate, Outlet, useParams} from "react-router-dom";
import Fortschrittsanzeige from "./Fortschrittsanzeige";
import {Button, Group, Modal} from "@mantine/core";
import {useNavigate} from "react-router";

const modis = [
    {
        id: 0,
        passed: false,
        title: 'Konversation'
    },
    {
        id: 1,
        passed: false,
        title: 'Video'
    },
    {
        id: 2,
        passed: false,
        title: 'Wimmelbild'
    },
    {
        id: 3,
        passed: false,
        title: 'Ablaufanordnung'
    },
    {
        id: 4,
        passed: false,
        title: 'Zuordnung'
    }
]

export const ModiContext = createContext({});

const Gamemodi = () => {
    const url = (window.location.href).split("/");
    const {badgeNr} = useParams();
    const [modalOpened, setModalOpened] = useState(false);
    const navigator = useNavigate();

    const markAsPassed = (title: string) => {
        modis.filter(modi => modi.title === title)[0].passed = true;

        if (modis.filter(modi => modi.passed === false).length !== 0)
            navigator('./' + modis.filter(modi => modi.passed === false)[0].title)
        else
            navigator('./Endscreen');
    }

    return (
        <>
            <Modal opened={modalOpened} onClose={() => setModalOpened(false)}>
                <p>Möchtest du wirklich abbrechen?</p>
                <Group>
                    <Link to='../Badges' onClick={() => setModalOpened(false)}>Ja</Link>
                    <Button onClick={() => setModalOpened(false)}>Nein</Button>
                </Group>
            </Modal>
            <div className="section-header">
                <h3 className="title" data-title={"Badge " + badgeNr}>{url[url.length - 1]}</h3>
                <br/>
                <Fortschrittsanzeige modis={modis}/>
                <br/>
                <div onClick={() => setModalOpened(true)} className="xbutton"></div>
            </div>

            <div className="container">
                <ModiContext.Provider value={{markAsPassed}}>
                    <Outlet/>
                </ModiContext.Provider>
            </div>

        </>
    );
}

export default Gamemodi;
