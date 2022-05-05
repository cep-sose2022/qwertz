import React from 'react';
import '../Style/Fortschrittsanzeige.css'

const Fortschrittsanzeige = (props: { modis: any; }) => {

    const { modis } = props;
    return (
        <>
            <div className="wrpvertikal">
                <ul className="progressbar">
                    {
                        modis.map((modi: { passed: any; title: boolean }) => (
                            <li key={Math.random()} className={modi.passed ? 'bestanden' : undefined}>{modi.title}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default Fortschrittsanzeige;
