import React, { useContext, useEffect, useState } from "react";
import { BackgroundImage, Box } from "@mantine/core";

import './Wimmelbild.css'
import ModiHeader from "../ModiHeader";
import { useNavigate } from "react-router";
import service from "../../service";
import storage from "../../storage";
import JsonList from '../../Resources/Json/WimmelbildData.json';
import { ModiContext } from "../Gamemodi";

const modalData = [
    {
        title: "SPIELANLEITUNG 🎲",
        content: "Klicken Sie alle versteckten Fehler an."
    }
]

const Wimmelbild = () => {
    const eigenerName = 'Wimmelbild';
    const [image, setImage] = useState("");
    const [buttons, setButton] = useState([]);
    const [modalContent, setModalContent] = useState(modalData[0]);
    const [openedModal, setOpenedModal] = useState(true);
    const [allRight, setAllRight] = useState(false);

    const navigator = useNavigate();
    const { redirect } = useContext(ModiContext);

    useEffect(() => {
        // redirect to actual mode
        redirect(eigenerName)
        // loading data from db
        if (buttons[0] === undefined) {
            const tempButtons = []
            let Data = service.getWimmelbild(storage.getBadgeID(), storage.getModiID())
            if (Data === undefined) {
                navigator('../../Error503')
                return
            } else if (Data === null) {
                console.error("DB nicht erreichbar, nutze Demo Daten")
                // navigator('../../Error503')
                Data = JsonList
            }

            setImage(service.getImage(Data.imageName))
            console.log(image)
            Data.buttons.map((object, idx) => {
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

    // marks a button as clicked
    const clickButton = (id) => {
        const clickedButton = buttons.filter(button => button.id === id)[0];
        clickedButton.isClicked = true;

        setModalContent({ title: "", content: clickedButton.text });
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
                <Box sx={{ Width: 500, High: 500 }}>
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
                        {/*alle Buttons*/}
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
