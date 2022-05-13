import React, { useContext, useState } from "react";
import JsonData from '../../Resources/Json/WimmelbildData.json';
import { BackgroundImage, Box, Button, Modal, Tooltip, Title } from "@mantine/core";
import { ModiContext } from "../Gamemodi";

const Wimmelbild = () => {
    const image = require('../../Resources/images/' + JsonData[0].bild);
    const [buttons, setButton] = useState([]);
    const [modalContent, setModalContent] = useState('');
    const [openedModal, setModalOpened, setOpenedModal] = useState(false);
    const [allRight, setAllRight] = useState(false);

    const { markAsPassed, setCurrentModiTitle } = useContext(ModiContext);
    setCurrentModiTitle("Wimmelbild");

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
        <>
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
                    setOpenedModal(false);
                    setModalContent(modalContent[0])
                }}

            >

                <Title size="sm" style={{ lineHeight: 2.5, fontSize: 22 }}>
                    {modalContent.title}
                </Title>

                <p>{modalContent.content}</p>
            </Modal>
            <Button onClick={() => setOpenedModal(true)}>Aufgabenstellung</Button>

            <Box sx={{ Width: 500, High: 500 }}>
                <BackgroundImage
                    style={{ width: 500, height: 500, marginLeft: 'auto', marginRight: 'auto', position: 'relative' }}
                    src={image}
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
                                    // backgroundColor: b.isClicked ? 'gray' : 'transparent',
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
            <Tooltip label="Du muss alles gefunden haben um weiter zu machen!">
                <Button onClick={() => markAsPassed('Wimmelbild')} disabled={!allRight}> Weiter</Button>
            </Tooltip>
        </>
    );
};

export default Wimmelbild;
// navigator('..')
