import React, {useContext, useState, useEffect} from "react";
import {BackgroundImage, Box, Button, Grid, Modal, Title, Tooltip} from "@mantine/core";
import {ModiContext} from "../Gamemodi";
import {FcQuestions} from "react-icons/fc";

import './Wimmelbild.css'
import {useNavigate} from "react-router";
import service from "../../service";
import storage from "../../storage";
import JsonList from '../../Resources/Json/WimmelbildData.json';

const modalData = [
    {
        title: "Spielerklärung",
        content: "Finde alle verstecken fehler "
    }
]

const Wimmelbild = () => {
    const eigenerName = 'Wimmelbild';
    const image = require('../../Resources/images/' + JsonList[0].bild);
    const [buttons, setButton] = useState([]);
    const [modalTitle, setModalTitle] = useState(modalData[0].title);
    const [modalContent, setModalContent] = useState(modalData[0].content);
    const [openedModal, setModalOpened] = useState(false);
    const [allRight, setAllRight] = useState(false);

    const {markAsPassed} = useContext(ModiContext);
    const navigator = useNavigate();
    const {redirect} = useContext(ModiContext);

    // um zu dem Modi umzuleiten, der gerade daran is
    useEffect(() => {
        redirect(eigenerName)
        // läd die daten aus der DB und schreib sie in eine const
        if (buttons[0] === undefined) {
            const tempButtons = []
            console.log('ich wa da')
            let Data = service.getWimmelbild(storage.getBadgeID(), storage.getModiID())
            if (Data === undefined) {
                navigator('../../Error503')
                return
            } else if (Data === null) {
                console.error("DB nicht erreichbar, nutze Demo Daten")
                // navigator('../../Error503')
                Data = JsonList
            }
            Data.map((object, idx) => {
                let button = {
                    id: idx + 1,
                    text: object.text,
                    width: object.bottomRightCorner.x - object.topLeftCorner.x,
                    height: object.bottomRightCorner.y - object.topLeftCorner.y,
                    top: object.topLeftCorner.y,
                    left: object.topLeftCorner.x,
                    isClicked: false
                };
                tempButtons.push(button);
                setButton(tempButtons)
            })
        }
    })

    // makiert ein Button als geklickt
    const clickButton = (id) => {
        const clickedButton = buttons.filter(button => button.id === id)[0];
        clickedButton.isClicked = true;

        setModalTitle("")
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
                                {modalTitle}
                            </Title>
                            <p>{modalContent}</p>
                        </Modal>
                    </Grid.Col>

                    <Grid.Col span={2}>
                        <Tooltip label="Du muss alles gefunden haben um weiter zu machen!">
                            <Button onClick={() => markAsPassed(eigenerName)}
                                    disabled={!allRight}> Weiter</Button>
                        </Tooltip>
                    </Grid.Col>


                    {/* Weiter Button der nur geht, wenn alles gefunden wurde */}
                    <Grid.Col span={2}>
                        <div style={{textAlign: 'end'}}>
                            <Button style={{
                                background: 'transparent'
                            }} onClick={() => {
                                setModalTitle(modalData[0].title);
                                setModalContent(modalData[0].content);
                                setModalOpened(true);
                            }}>
                                <FcQuestions size={32}/>
                            </Button>
                        </div>
                    </Grid.Col>

                </Grid>
            </div>
            <div className="wimmelbild-body">
                <Box sx={{Width: 500, High: 500}}>
                    <BackgroundImage
                        style={{
                            zIndex: 1,
                            width: 1210,
                            height: 680,
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            position: 'relative'
                        }}
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
                                            backgroundColor: b.isClicked ? 'gray' : 'red',
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
