import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router";

// import Fortschrittsanzeige, whether mode passed
import Fortschrittsanzeige from "./Fortschrittsanzeige";

// import Mantine core library includes essential component
import { Button, Group, Modal } from "@mantine/core";

// import Backend to get the data from the database
import storage from '../storage';

export const ModiContext = createContext({});

const Gamemodi = () => {
    const badgeNr = storage.getBadgeID();
    const [modalOpened, setModalOpened] = useState(false);
    const navigator = useNavigate();
    const [currentModiTitle, setCurrentModiTitle] = useState("");
    const [firstRender, setFirstRender] = useState(true)
    const [reload, setReload] = useState(true)
    const [modis] = useState(storage.getModis())


    useEffect(() => {
        if (firstRender) {
            setFirstRender(false)
            loadModiData()
        }
        if (reload) {
            setReload(false)
            redirect()
        }
    }
    )

    // navigates to the current mode
    const redirect = (eigenerName) => {
        const currentModiTitle = storage.getCurrentModiTitle()
        if (currentModiTitle !== null && currentModiTitle !== eigenerName) {
            navigator('./' + currentModiTitle)
        }
    }

    const loadModiData = () => {
        // sets the current mode title
        const tempModiTitle = storage.getCurrentModiTitle()
        if (tempModiTitle === undefined || tempModiTitle === null) {
            const currentModi = modis.filter(modi => !modi.passed)[0]
            setCurrentModiTitle(currentModi.title)
            storage.setCurrentModiTitle(currentModi.title)
            storage.setModiID(currentModi.modiID)
        } else {
            setCurrentModiTitle(tempModiTitle)
        }
    }

    // sets a mode as 'Passed' and forwards to the next
    const markAsPassed = () => {
        storage.setModiPassed()
        modis.filter(modi => !modi.passed)[0].passed = true

        if (modis.filter(modi => !modi.passed).length !== 0) {
            let nextModi = modis.filter(modi => !modi.passed)[0]
            storage.setCurrentModiTitle(nextModi.title)
            storage.setModiID(nextModi.modiID)

            setCurrentModiTitle(nextModi.title)
            setReload(true)
            navigator('./')
        } else {
            storage.setCurrentModiTitle('Endscreen')
            setCurrentModiTitle('Endscreen')
            navigator('./Endscreen')
        }
    }

    return (
        <>
            {/* Modal to cancel*/}
            <Modal opened={modalOpened} onClose={() => setModalOpened(false)}>
                <p>Möchtest du wirklich abbrechen?</p>
                <Group>
                    <Button onClick={() => {
                        modis.map(modi => modi.passed = false)
                        storage.removeAll()
                        navigator('../Badges')
                        setModalOpened(false)
                    }}>Ja</Button>
                    <Button onClick={() => setModalOpened(false)}>Nein</Button>
                </Group>
            </Modal>
            {/* Modal to cancel ends*/}

            {/* progress indicator */}
            <div className="section-header">
                <h3 className="title" data-title={"Batch " + badgeNr}>{currentModiTitle === 'Multiplechoice' ? 'Multiple-Choice' : currentModiTitle}</h3>
                <br />
                <Fortschrittsanzeige modis={modis} />
                <br />
                <div onClick={() => setModalOpened(true)} className="xbutton" />
            </div>
            {/* progress indicator ends*/}

            {/* area for the modules*/}
            <div className="container" style={{ position: 'relative' }}>
                <ModiContext.Provider value={{ markAsPassed, redirect }}>
                    <Outlet />
                </ModiContext.Provider>
            </div>
            {/* area for the modules ends*/}

        </>
    );
}

export default Gamemodi;
