import React, {useContext} from 'react';
import {Button, Grid, Modal, Popover, Text, Tooltip} from "@mantine/core";
import {IoIosInformationCircleOutline} from "react-icons/io";
import {FcQuestions} from "react-icons/fc";
import {ModiContext} from "./Gamemodi";

const ModiHeader = (props) => {
    const {
        tooltipText,
        popoverText,
        aufgabenstellungVisible,
        fertigVisible,
        setModalContent,
        modalContent,
        openedModal,
        setOpenedModal,
        openedPopover,
        setOpenedPopover,
        checkIfAllRight,
        eigenerName,
        allRight,
        modalData
    } = props
    const {markAsPassed} = useContext(ModiContext);

    // const {
    //     setModalContent,
    //     modalContent,
    //     openedModal,
    //     setOpenedModal,
    //     openedPopover,
    //     setOpenedPopover,
    //     checkIfAllRight,
    //     eigenerName,
    //     allRight,
    //     modalData
    // } = useContext(HeaderContext)

    return (
        <>
            <Grid justify={"space-between"}>
                {/*Modal für die Aufgabenstellung und zum Anzusagen ob alles Richtig/falsch is*/}
                <Modal
                    transition="slide-down"
                    transitionDuration={900}
                    overlayOpacity={0.55}
                    overlayBlur={3}
                    style={{fontSize: 20}}
                    centered
                    opened={openedModal}
                    onClose={() => setOpenedModal(false)}
                    title={<IoIosInformationCircleOutline size={32}/>}
                >
                    <h3 style={{lineHeight: 2.5, fontSize: 22}}>
                        {modalContent.title}
                    </h3>

                    <p>{modalContent.content}</p>
                </Modal>

                <Grid.Col span={2}>
                    {
                        aufgabenstellungVisible ?
                            <Button onClick={() => {
                                setModalContent(modalData[3]);
                                setOpenedModal(true)
                            }}>
                                Aufgabenstellung
                            </Button>
                            :
                            null
                    }
                </Grid.Col>

                {/* Popover um anzusagen das erst alle boxen zugeteilt werden müssen */}
                <Grid.Col span={2}>
                    {
                        fertigVisible ?
                            <Popover
                                opened={openedPopover}
                                onClose={() => setOpenedPopover(false)}
                                target={<Button onClick={checkIfAllRight}>Fertig</Button>}
                                width={260}
                                position="bottom"
                                withArrow
                            >
                                <div style={{display: 'flex'}}>
                                    <Text size="sm">{popoverText}</Text>
                                </div>
                            </Popover>
                            :
                            null
                    }
                    <>  </>
                    <Tooltip label={tooltipText}>
                        <Button onClick={() => markAsPassed(eigenerName)}
                                disabled={!allRight}> Weiter</Button>
                    </Tooltip>
                </Grid.Col>

                {/* Button für die Spielerklärung */}
                <Grid.Col span={2}>
                    <div style={{textAlign: 'end'}}>
                        <Button style={{
                            background: 'transparent'
                        }} onClick={() => {
                            setModalContent(modalData[0])
                            setOpenedModal(true)
                        }}><FcQuestions size={32}/></Button>
                    </div>
                </Grid.Col>

            </Grid>
        </>
    )
}

export default ModiHeader


// des muss dann in jeden modi Rein
/*
                            <ModiHeader
                                setModalContent={setModalContent}
                                modalContent={modalContent}
                                openedModal={openedModal}
                                setOpenedModal={setOpenedModal}
                                openedPopover={openedPopover}
                                setOpenedPopover={setOpenedModal}
                                checkIfAllRight={checkIfAllRight}
                                eigenerName={eigenerName}
                                allRight={allRight}
                                modalData={modalData}
                                aufgabenstellungVisible={false}
                                fertigVisible={true}
                                tooltipText="Du muss alles richtig haben um weiter zu machen!"
                                popoverText="Du musst erst alle Boxen einsetzen"
                            />

 */
