import React from 'react';

const Fortschrittsanzeige = (props: { modis: any; }) => {

    const {modis} = props;
    return (
        <>
            <ul className="progressbar">
                {
                    modis.map((modi: { passed: any; title: boolean }) => (
                        <li key={Math.random()} className={modi.passed ? 'bestanden' : undefined}>{modi.title}</li>
                    ))
                }
            </ul>
        </>
    );
}

export default Fortschrittsanzeige;
