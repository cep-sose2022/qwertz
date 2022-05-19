import React, {useEffect} from 'react';
import {Center} from "@mantine/core";
import {useNavigate} from "react-router";
import service from "../service";

const Error503Page = () => {
    const JsonData = service.getZitate()
    console.log(JsonData)
    if(JsonData === undefined)
        console.log("ne")

    const navigator = useNavigate();

    useEffect(() =>
        // hier muss des anfragen an die DB, bzw die überprüfung pb es geklappt hat
        false ?
            navigator('../Badges')
            :
            undefined
    )

    return (
        <>

            <Center>
                <h1>503</h1>
            </Center>
            <Center>
                <p> Service Unavailable</p>
            </Center>
            <h1>{JsonData[0].author}</h1>
        </>
    );
}
export default Error503Page;
