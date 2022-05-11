import React, {useEffect} from 'react';
import { Center} from "@mantine/core";
import {useNavigate} from "react-router";

const Error503Page = () => {

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
        </>
    );
}
export default Error503Page;
