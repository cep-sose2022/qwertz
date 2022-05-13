import React, { useContext, useState } from "react";
import JsonData from '../../Resources/Json/WimmelbildData.json';
import { BackgroundImage, Box, Button, Grid, Modal, Popover, Text, Title, Tooltip } from "@mantine/core";
import { ModiContext } from "../Gamemodi";
import { FcQuestions } from "react-icons/fc";
import './Wimmelbild.css'

const Wimmelbild = () => {
    const image = require('../../Resources/images/' + JsonData[0].bild);
    const [buttons, setButton] = useState([]);
    const [modalContent, setModalContent] = useState('');
    const [openedModal, setModalOpened] = useState(false);
    const [allRight, setAllRight] = useState(false);

    const { markAsPassed } = useContext(ModiContext);

    let id = 1;
    if (buttons[0] === undefined) {
        JsonData[1].buttons.map(object => {
            let button = {
                id: id++,
                text: object.text,
                width: object.bottomRightCorner.x - object.topLeftCorner.x,
                height: object.bottomRightCorner.y - object.topLeftCorner.y,
                top: object.topLeftCorner.y,
                left: object.topLeftCorner.x,
                isClicked: false
            };
            buttons.push(button);
        })
    }

    const clickButton = (id) => {
        const clickedButton = buttons.filter(button => button.id === id)[0];
        clickedButton.isClicked = true;

        setModalContent(clickedButton.text);
        setModalOpened(true);

        setButton(buttons.filter(button => button.id !== id).concat(clickedButton));

        if (buttons.filter(button => button.isClicked === false).length === 0)
            setAllRight(true);
    }


    return (
        <div className="wimmelbild-container">
            <div className="wimmelbild-header">
                <Grid justify={"space-between"}>
                    <Grid.Col span={2}>

                        <Modal
                            transition="slide-down"
                            transitionDuration={900}
                            // transitionTimingFunction="ease"
                            overlayOpacity={0.55}
                            overlayBlur={3}
                            style={{ fontSize: 20 }}
                            // bgColor='red'
                            centered
                            opened={openedModal}
                            onClose={() => {
                                setModalOpened(false);
                            }}

                        >

                            <Title size="sm" style={{ lineHeight: 2.5, fontSize: 22 }}>
                                {modalContent}
                            </Title>

                            <p>{modalContent}</p>
                        </Modal>
                        <Button onClick={() => {
                            setModalContent("test")
                            setModalOpened(true)
                        }}>Aufgabenstellung</Button>
                    </Grid.Col>

                    <Grid.Col span={2}>
                        <Popover
                            target={<Button onClick={"test"}>Fertig</Button>}
                            width={260}
                            position="bottom"
                            withArrow
                        >
                            <div style={{ display: 'flex' }}>
                                <Text size="sm">Du musst erst alle Boxen einsetzen</Text>
                            </div>
                        </Popover>

                        <Tooltip label="Du muss alles richtig haben um weiter zu machen!">
                            <Button onClick={() => markAsPassed('Ablaufanordnung')}
                                disabled={!allRight}> Weiter</Button>
                        </Tooltip>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <div style={{ textAlign: 'end' }}>
                            <Button style={{
                                background: 'transparent'
                            }} onClick={() => {
                                setModalContent("Spielerklärung")
                                setModalOpened(true)
                            }} ><FcQuestions size={32} /></Button>
                        </div>

                    </Grid.Col>

                </Grid>
            </div>
            <div className="wimmelbild-body">
                <Box sx={{ Width: 500, High: 500 }}>
                    <BackgroundImage
                        style={{ zIndex: 1, width: 1000, height: 563, marginLeft: 'auto', marginRight: 'auto', position: 'relative' }}
                        className="imagewimmelbild" src={image}
                        radius="sm"
                    >
                        {/*Her kommen alle Buttons rein*/}
                        {
                            buttons.map(b => (
                                <button
                                    key={Math.random()}
                                    style={{
                                        border: 'gray',
                                        opacity: b.isClicked ? .5 : 2,
                                        backgroundColor: b.isClicked ? 'gray' : 'transparent',
                                        width: b.width + "%",
                                        height: b.height + "%",
                                        position: 'absolute',
                                        left: `calc(${b.left}%)`,
                                        top: `calc(${b.top}%)`,
                                    }}
                                    onClick={() => clickButton(b.id)}
                                />
                            )
                            )
                        }

                    </BackgroundImage>
                </Box>
            </div>
        </div>
    );
};

export default Wimmelbild;
// navigator('..')
