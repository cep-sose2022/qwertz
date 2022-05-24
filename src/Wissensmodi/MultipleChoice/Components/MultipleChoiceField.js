import React from 'react'
import { Center, Checkbox} from "@mantine/core";

const MultipleChoiceField = (props) => {

    const {aufgabe} = props

    const handleChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
    }

    return (
        <div className="multiBox">
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
                                                name={aufgabe.frage}
                                                value={antwort.text}
                                                onChange={handleChange}
                                            />
                                        </li>
                                    )
                                )
                            }
                        </ul>

                    </div>
                </div>
            </Center>
        </div>
    )
}

export default MultipleChoiceField
