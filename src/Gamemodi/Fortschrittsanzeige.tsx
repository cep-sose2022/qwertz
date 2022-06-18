import React from 'react';

// import CSS
import '../Style/Fortschrittsanzeige.css'

// import Mantine Core
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
                        <Stepper.Step key={Math.random()}
                                      label={modi.title === 'Multiplechoice' ? 'Multiple-Choice' : modi.title}/>
                    )
                }
            </Stepper>
        </>
    );
}
export default Fortschrittsanzeige;
