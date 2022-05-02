import React, { useState } from "react";
import JsonData from '../../Resources/Json/WimmelbildData.json';
import { BackgroundImage, Box, Button, Modal, Tooltip } from "@mantine/core";

const Wimmelbild = () => {
    const image = require('../../Resources/images/' + JsonData[0].bild);
    const [buttons, setButton] = useState([]);
    const [modalContent, setModalContent] = useState('');
    const [modalOpened, setModalOpened] = useState(false);
    const [allRight, setAllRight] = useState(false);

    let id = 1;
    if (buttons[0] === undefined) {
        JsonData[1].buttons.map(object => {
            let width = object.rightCorner.x - object.leftCorner.x;
            let height = object.rightCorner.y - object.leftCorner.y;
            console.log(width, height);
            let button = {
                id: id++,
                text: object.text,
                width: width,
                height: height,
                top: object.leftCorner.y,
                left: object.leftCorner.x,
                isClicked: false
            };
            console.log(button);
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
            <Modal opened={modalOpened} onClose={() => setModalOpened(false)}>
                <p>{modalContent}</p>
            </Modal>
            <Box sx={{ Width: 500, High: 500 }}>
                <BackgroundImage
                    style={{ width: 500, height: 500, marginLeft: 'auto', marginRight: 'auto', position: 'relative', top: 70 }}
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
                                    left: `calc(${b.left}% - 0px)`,
                                    top: `calc(${b.top}% - 0px)`,
                                }}
                                onClick={() => clickButton(b.id)}
                            />
                        )
                        )
                    }

                </BackgroundImage>
            </Box>
            <Tooltip label="Du muss alles gefunden haben um weiter zu machen!">
                <Button onClick={() => console.log("Weiter")} disabled={!allRight}> Weiter</Button>
            </Tooltip>
        </>
    )
        ;
};

export default Wimmelbild;


// <div
//     id='picture container'
//     className="picture"
//     style={
//         {
//             backgroundImage: `url(  ${process.env.PUBLIC_URL + image}  )`,
//             backgroundRepeat: 'no-repeat',
//             width: 750,
//             height: 550
//         }}
// >
//     {/*/!*{*!/*/}
//     {/*/!*    buttons.filter(b => b.isClicked === true).map(b =>*!/*/}
//     {/*/!*        <Modal button={null} selected={true}>*!/*/}
//     {/*/!*            <h1>Du hast es gefunden</h1>*!/*/}
//     {/*/!*            <p>{b.text}</p>*!/*/}
//     {/*/!*        </Modal>*!/*/}
//     {/*/!*    )*!/*/}
//     {/*/!*}*!/*/}
//
//     {/*    // buttons.map(b => (*/}
//
//     {/*            // <Modal button={*/}
//     {/*            //     <button*/}
//     {/*            //         key={Math.random()}*/}
//     {/*            //         style={{*/}
//     {/*            //             border: 'none',*/}
//     {/*            //             opacity: b.isClicked ? .5 : 2,*/}
//     {/*            //             // backgroundColor: button.isClicked ? 'gray' : 'transparent',*/}
//     {/*            //             width: 100,*/}
//     {/*            //             height: 100,*/}
//     {/*            //             position: 'absolute',*/}
//     {/*            //             right: b.pos.x,*/}
//     {/*            //             top: b.pos.y,*/}
//     {/*            //         }}*/}
//     {/*            //         onClick={() => clickButton(b.id)}*/}
//     {/*            //     >*/}
//     {/*            //         {*/}
//     {/*            //             b.isClicked ? b.text : null*/}
//     {/*            //         }*/}
//     {/*            //     </button>} selected={false}>*/}
//     {/*            //     <h1>Du hast es gefunden</h1>*/}
//     {/*            //     <p>{b.text}</p>*/}
//     {/*            // </Modal>*/}
//
//
//     {/*        // )*/}
//     {/*    // )*/}
//     {/*// }*/}
//
// </div>
