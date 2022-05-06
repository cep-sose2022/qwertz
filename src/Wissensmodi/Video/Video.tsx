import React, { useContext } from "react";
import { ModiContext } from "../../Gamemodi/Gamemodi";
import { Button } from "@mantine/core";


const Video = () => {

    // @ts-ignore
    const { markAsPassed } = useContext(ModiContext);

    return (
        <>
            <video className="responsive-video" src="Bsp_Video.mp4" controls width="640" height="400"> </video>
            <video src="Bsp_Video.ogg"></video>


            <Button onClick={() => markAsPassed('Video')} disabled={false}> Weiter</Button>
        </>
    );
}

export default Video;
