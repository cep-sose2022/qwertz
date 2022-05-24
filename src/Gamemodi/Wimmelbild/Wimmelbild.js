import React, {useState} from "react";
import JsonData from '../../Resources/Json/WimmelbildData.json';
import {BackgroundImage, Box} from "@mantine/core";

import './Wimmelbild.css'
import ModiHeader from "../ModiHeader";

const modalData = [
    {
        title: "Spielerklärung",
        content: "Finde alle verstecken fehler "
    }
]

const Wimmelbild = () => {
    const eigenerName = 'Wimmelbild';
    const image = require('../../Resources/images/' + JsonData[0].bild);
    const [buttons, setButton] = useState([]);
    const [modalContent, setModalContent] = useState(modalData[0]);
    const [openedModal, setOpenedModal] = useState(false);
    const [allRight, setAllRight] = useState(false);


    // läd die daten aus der DB und schreib sie in eine const
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

    // makiert ein Button als geklickt
    const clickButton = (id) => {
        const clickedButton = buttons.filter(button => button.id === id)[0];
        clickedButton.isClicked = true;

        setModalContent({title: "", content: clickedButton.text});
        setOpenedModal(true);

        setButton(buttons.filter(button => button.id !== id).concat(clickedButton));

        if (buttons.filter(button => button.isClicked === false).length === 0)
            setAllRight(true);
    }


    return (
        <div className="wimmelbild-container">
            <div className="wimmelbild-header">
                <ModiHeader
                    setModalContent={setModalContent}
                    modalContent={modalContent}
                    openedModal={openedModal}
                    setOpenedModal={setOpenedModal}
                    openedPopover={null}
                    setOpenedPopover={null}
                    checkIfAllRight={null}
                    eigenerName={eigenerName}
                    allRight={allRight}
                    modalData={modalData}
                    aufgabenstellungVisible={false}
                    fertigVisible={false}
                    tooltipText="Du musst erst alles gefunden haben um weiter zu machen!"
                    popoverText=""
                />
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
