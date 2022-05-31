import React from 'react';
import {Button} from "@mantine/core";
import {useNavigate} from "react-router";
import storage from "../storage";

const Error503Page = () => {

    const navigator = useNavigate();

    return (
        <>
            <br/><br/><br/><br/><br/><br/>
            <p>Beim laden vom Modus {storage.getCurrentModiTitle()} ist ein Fehler aufgetreten, sollte dieser Fehler
                weiterhin bestehen wenden sie sich an sen Systemadministrator</p>
            <Button onClick={() => navigator('../Gamemodi/' + storage.getCurrentModiTitle())}>Neu Laden</Button>
        </>
    );
}
export default Error503Page;
