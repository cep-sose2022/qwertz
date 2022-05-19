import React, {useContext, useState} from 'react'
import {Button, Grid, Modal, Title, Tooltip} from "@mantine/core";
import {FcQuestions} from "react-icons/fc";
import Fortschritt from "./Components/Fortschritt";

import steps from "../../Resources/Json/MultipleChoiceData.json"
import {ModiContext} from "../../Gamemodi/Gamemodi";

const modalData = [
    {
        title: "Spielerklärung",
        content: "Klick einfach un les " //TODO sinnvoller text
    }
]


const MultipleChoice = () => {
    const eigenerName = "MultipleChoice"
    const [openedModal, setModalOpened] = useState(false)
    const [modalContent, setModalContent] = useState(modalData[0])
    const [allRight, setAllRight] = useState(true)

    const {markAsPassed} = useContext(ModiContext)

    console.log(steps)
    return (
        <>
            <div className="multiChoice-header">
                <Grid justify={"space-between"}>
                    <Grid.Col span={2}>
                        <Modal
                            transition="slide-down"
                            transitionDuration={900}
                            overlayOpacity={0.55}
                            overlayBlur={3}
                            style={{fontSize: 20}}
                            centered
                            opened={openedModal}
                            onClose={() => {
                                setModalOpened(false);
                            }}
                        >
                            <Title size="sm" style={{lineHeight: 2.5, fontSize: 22}}>
                                {modalContent.title}
                            </Title>
                            <p>{modalContent.content}</p>
                        </Modal>
                    </Grid.Col>

                    {/* Weiter Button der nur geht, wenn alles gelesen wurde */}
                    <Grid.Col span={2}>
                        <Tooltip label="Du muss alles gelesen haben um weiter zu machen!">
                            <Button onClick={() => markAsPassed(eigenerName)}
                                    disabled={!allRight}> Weiter</Button>
                        </Tooltip>
                    </Grid.Col>

                    {/* Button für die Spielerklärung */}
                    <Grid.Col span={2}>
                        <div style={{textAlign: 'end'}}>
                            <Button style={{
                                background: 'transparent'
                            }} onClick={() => setModalOpened(true)}>
                                <FcQuestions size={32}/>
                            </Button>
                        </div>
                    </Grid.Col>
                </Grid>
            </div>

            <div id="Text Feld">

                <Fortschritt lection={steps[0]}/>
            </div>

        </>
    )
}

export default MultipleChoice
