import React, {useContext, useState} from 'react'

import steps from "../../Resources/Json/MultipleChoiceData.json"
import {ModiContext} from "../../Gamemodi/Gamemodi";
import MultipleChoiceField from "./Components/MultipleChoiceField";
import './MultipleChoice.css'
import ModiHeader from "../../Gamemodi/ModiHeader";

const modalData = [
    {
        title: "Spielerklärung",
        content: "Kreuze die Zutreffenden aussagen an" //TODO sinnvoller text
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
                <ModiHeader
                    setModalContent={setModalContent}
                    modalContent={modalContent}
                    openedModal={openedModal}
                    setOpenedModal={null}
                    openedPopover={null}
                    setOpenedPopover={null}
                    checkIfAllRight={null}
                    eigenerName={eigenerName}
                    allRight={allRight}
                    modalData={modalData}
                    aufgabenstellungVisible={true}
                    fertigVisible={true}
                    tooltipText="Du musst alles richtig haben um weiter zu machen!"
                    popoverText="Du musst erst alle Boxen einsetzen"
                />
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
