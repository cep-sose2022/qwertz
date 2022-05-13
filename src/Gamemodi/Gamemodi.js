import React, {createContext, useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import Fortschrittsanzeige from "./Fortschrittsanzeige";
import {Button, Group, Modal} from "@mantine/core";
import {useNavigate} from "react-router";
import storage from '../storage';

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
    const {badgeNr} = useParams();
    const [modalOpened, setModalOpened] = useState(false);
    const navigator = useNavigate();
    const [currentModiTitle, setCurrentModiTitle] = useState("");
    // let currentModiTitle = "s"
    let firstRender = true;

    useEffect(() => {
            if (firstRender) {
                firstRender = false

                const temp = storage.getCurrentModiTitle()

                if (temp === undefined || temp === null) {
                    setCurrentModiTitle(modis.filter(modi => !modi.passed)[0].title)
                    storage.setCurrentModiTitle(currentModiTitle)
                } else {
                    setCurrentModiTitle(temp)
                }

            }
        }, [firstRender]
    )

    const markAsPassed = (title) => {
        modis.filter(modi => modi.title === title)[0].passed = true;
        if (modis.filter(modi => !modi.passed).length !== 0) {
            let modiTitle = modis.filter(modi => !modi.passed)[0].title
            storage.setCurrentModiTitle(modiTitle)
            setCurrentModiTitle(modiTitle)
            navigator('./' + modiTitle)

        } else {
            // setCurrentModiTitle("Endscreen")
            storage.removeCurrentModiTitle()
            navigator('./Endscreen')
        }
    }


    return (
        <>
            <Modal opened={modalOpened} onClose={() => setModalOpened(false)}>
                <p>Möchtest du wirklich abbrechen?</p>
                <Group>
                    <Button onClick={() => {
                        modis.map(modi => modi.passed = false)
                        storage.removeCurrentModiTitle()
                        navigator('../Badges')
                        setModalOpened(false)
                    }}>Ja</Button>
                    <Button onClick={() => setModalOpened(false)}>Nein</Button>
                </Group>
            </Modal>
            <div className="section-header">
                <h3 className="title" data-title={"Badge " + badgeNr}>{currentModiTitle}</h3>
                <br/>
                <Fortschrittsanzeige modis={modis}/>
                <br/>
                <div onClick={() => setModalOpened(true)} className="xbutton"></div>
            </div>

            <div className="container" style={{position: 'relative'}}>
                <ModiContext.Provider value={{markAsPassed, currentModiTitle}}>
                    <Outlet/>
                </ModiContext.Provider>
            </div>

        </>
    );
}

export default Gamemodi;
