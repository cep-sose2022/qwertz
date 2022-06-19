import React, {useState} from 'react'
import {Center, Checkbox} from "@mantine/core";

const MultipleChoiceField = (props) => {

    const {aufgabe, setAufgabeChecked} = props
    const [rerender, setRerender] = useState(false)

    const handleChange = (event) => {
        const target = event.target
        setRerender(!rerender)
        setAufgabeChecked(parseInt(target.name), parseInt(target.value))
    }

    return (
        <div className="multiBox"
             style={{backgroundColor: aufgabe.isRichtig ? 'var(--antwortRichtig)' : undefined}}>
            <Center>
                <div key={Math.random()}>
                    <div className="multiQuestion">
                        <h3>{aufgabe.frage}</h3>
                    </div>
                    <div className="multiAnswers">
                        <ul key={Math.random()}>
                            {
                                aufgabe.antworten.map(antwort => (
                                    <li key={Math.random()}>
                                        <Checkbox
                                            // icon={}
                                            label={antwort.text}
                                            name={aufgabe.id}
                                            value={antwort.id}
                                            checked={antwort.isChecked}
                                            onChange={handleChange}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </Center>
        </div>
    )
}

export default MultipleChoiceField
