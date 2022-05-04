import React, {useContext} from "react";
import {ModiContext} from "../../Gamemodi/Gamemodi";
import {Button} from "@mantine/core";

const Video = () => {

    // @ts-ignore
    const {markAsPassed} = useContext(ModiContext);

    return (
        <>
            <h1>Video</h1>
            <Button onClick={() => markAsPassed('Video')} disabled={false}> Weiter</Button>
        </>
    );
}

export default Video;
