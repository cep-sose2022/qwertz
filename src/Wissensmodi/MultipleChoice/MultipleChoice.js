import React, {useContext, useState} from 'react'
import {Button, Grid, Modal, Title, Tooltip} from "@mantine/core";
import {FcQuestions} from "react-icons/fc";

import steps from "../../Resources/Json/MultipleChoiceData.json"
import {ModiContext} from "../../Gamemodi/Gamemodi";
import MultipleChoiceField from "./Components/MultipleChoiceField";
import './MultipleChoice.css'

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

            <div className="multipleChoiceContainer">
                <div className="multipleChoiceHeader">
                    <div className="textField-header">
                        <h3>Titel</h3>
                    </div>
                </div>
                <div className="multipleChoiceBody">

                    <div className="textField">

                        <div className="textFieldBody">
                            <p>
                                {steps[0].text}
                            </p>
                        </div>
                    </div>

                    <div className="multipleChoiceField">


                        {
                            steps[0].aufgaben.map(aufgabe => (
                                    <MultipleChoiceField key={Math.random()} aufgabe={aufgabe}/>
                                )
                            )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default MultipleChoice
