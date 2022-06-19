import React from 'react';
import { useNavigate } from "react-router";

// import Mantine Core
import { Button } from "@mantine/core";

// import Backend
import storage from "../storage";

const Error503Page = () => {

    const navigator = useNavigate();

    return (
        <>
            <br /><br /><br /><br /><br /><br />
            <p>⚠️ Beim Laden vom Modus {storage.getCurrentModiTitle()} ist ein Fehler aufgetreten, sollte dieser Fehler
                weiterhin bestehen wenden sie sich an den Systemadministrator. ⚠️</p>
            <Button onClick={() => navigator('../Gamemodi/' + storage.getCurrentModiTitle())}>Neu Laden ↻</Button>
        </>
    );
}
export default Error503Page;
