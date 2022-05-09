import React from 'react';
import '../Style/Fortschrittsanzeige.css'
import { Stepper } from '@mantine/core';
import { Link } from 'react-router-dom';

const Fortschrittsanzeige = (props: { modis: any; }) => {

    const { modis } = props;
    return (
        <>
            <Stepper active={1} breakpoint="sm">
                <Stepper.Step label="Konversation" description="Wissensmodus" />
                <Stepper.Step label="Video" description="Wissensmodus" />
                <Stepper.Step label="Wimmelbild" description="Gamemodus" />
                <Stepper.Step label="Ablaufanordnung" description="Gamemodus" />
                <Stepper.Step label="Zuordnung" description="Gamemodus" />
                {
                    modis.map((modi: { passed: any; title: boolean }) => (
                        <li key={Math.random()} className={modi.passed ? 'bestanden' : undefined}>{modi.title}</li>
                    ))
                }
            </Stepper>
        </>
    );
}
export default Fortschrittsanzeige;
