import React from 'react'

const MultipleChoiceField = (props) => {

    const {aufgabe} = props

    const handleChange = (event) => {
        console.log(event.target.name)
    }

    return (
        <>
            <div key={Math.random()}>
                <h1>{aufgabe.frage}</h1>
                <ul key={Math.random()}>
                    {
                        aufgabe.antworten.map(antwort => (
                                <li key={Math.random()}>
                                    <input
                                        type="radio"
                                        name={aufgabe.frage}
                                        value={antwort.text}
                                        onChange={handleChange}
                                    />
                                    <label>{antwort.text}</label>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default MultipleChoiceField
