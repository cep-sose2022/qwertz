import React, {useContext} from "react";
import {ModiContext} from "../../Gamemodi/Gamemodi";
import {Button} from "@mantine/core";
import service from "../../service"

const Video = () => {

    // @ts-ignore
    const {markAsPassed, badgeNr} = useContext(ModiContext);
    return (
        <>
            <h1>Video {badgeNr}</h1>
            <p>Servise {service.getZitate()[0]._id}</p>
            <Button onClick={() => markAsPassed('Video')} disabled={false}> Weiter</Button>
        </>
    );
}

export default Video;
