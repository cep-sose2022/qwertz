import React, {createContext, useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import Fortschrittsanzeige from "./Fortschrittsanzeige";
import {Button, Group, Modal} from "@mantine/core";
import {useNavigate} from "react-router";
import storage from '../storage';

let modis = [
    {
        modiID: 1,
        passed: false,
        title: 'Konversation'
    },
    {
        modiID: 2,
        passed: false,
        title: 'Video'
    },
    {
        modiID: 3,
        passed: false,
        title: 'Wimmelbild'
    },
    {
        modiID: 4,
        passed: false,
        title: 'Ablaufanordnung'
    },
    {
        modiID: 5,
        passed: false,
        title: 'Zuordnung'
    }
]

export const ModiContext = createContext({});

const Gamemodi = () => {
    const {badgeNr} = useParams();
    const [modalOpened, setModalOpened] = useState(false);
    const navigator = useNavigate();
    const [currentModiTitle, setCurrentModiTitle] = useState("");
    const [firstRender, setFirstRender] = useState(true)


    useEffect(() => {
            if (firstRender) {
                setFirstRender(false)
                navigateToCurrentModi()
            }
        }
    )

    const navigateToCurrentModi = () => {
        // läd die Modis (also ob sie schon abgeschlossen sin oder net) aus dem LocalStorage
        const tempModis = storage.getModis()
        if (tempModis === undefined || tempModis === null) {
            storage.setModis(modis)
        } else
            modis = tempModis

        // Redirected zu dem nächsten modi der dran is
        const tempModiTitle = storage.getCurrentModiTitle()
        if (tempModiTitle === undefined || tempModiTitle === null) {
            const modiTitle = modis.filter(modi => !modi.passed)[0].title
            setCurrentModiTitle(modiTitle)
            storage.setCurrentModiTitle(modiTitle)
        } else {
            setCurrentModiTitle(tempModiTitle)
        }
    }

    // sett einen Modi alls 'Passed' und leitet zum nächsten weiter
    const markAsPassed = (modiTitle) => {
        modis.filter(modi => modi.title === modiTitle)[0].passed = true;
        if (modis.filter(modi => !modi.passed).length !== 0) {
            let modiTitle = modis.filter(modi => !modi.passed)[0].title
            storage.setCurrentModiTitle(modiTitle)
            storage.setModiPassed(modis.filter(modi => !modi.passed)[0].modiID)
            setCurrentModiTitle(modiTitle)
            navigator('./' + modiTitle)
        } else {
            storage.removeCurrentModiTitle()
            storage.removeModis()
            navigator('./Endscreen')
        }
    }

    return (
        <>
            {/* Modal zum abbrechen*/}
            <Modal opened={modalOpened} onClose={() => setModalOpened(false)}>
                <p>Möchtest du wirklich abbrechen?</p>
                <Group>
                    <Button onClick={() => {
                        modis.map(modi => modi.passed = false)
                        storage.removeCurrentModiTitle()
                        storage.removeModis()
                        navigator('../Badges')
                        setModalOpened(false)
                    }}>Ja</Button>
                    <Button onClick={() => setModalOpened(false)}>Nein</Button>
                </Group>
            </Modal>

            {/* Fortschrittsanzeige */}
            <div className="section-header">
                <h3 className="title" data-title={"Badge " + badgeNr}>{currentModiTitle}</h3>
                <br/>
                <Fortschrittsanzeige modis={modis}/>
                <br/>
                <div onClick={() => setModalOpened(true)} className="xbutton"></div>
            </div>

            {/* Bereich für die Modi*/}
            <div className="container" style={{position: 'relative'}}>
                <ModiContext.Provider value={{markAsPassed, currentModiTitle}}>
                    <Outlet/>
                </ModiContext.Provider>
            </div>
        </>
    );
}

export default Gamemodi;
