import React from 'react';
import '../Style/Fortschrittsanzeige.css'
import {Stepper} from '@mantine/core';

const Fortschrittsanzeige = (props: { modis: any; }) => {

    const {modis} = props;

    let bestandeneModi = 0;

    modis.map((modi: { passed: boolean; }) => modi.passed ? bestandeneModi++ : null)

    return (
        <>
            <Stepper active={bestandeneModi} breakpoint="sm">
                {
                    modis.map((modi: { title: string }) =>
                        <Stepper.Step label={modi.title}/>
                    )
                }
            </Stepper>
        </>
    );
}
export default Fortschrittsanzeige;
