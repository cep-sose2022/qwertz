import React from "react"
import MultipleChoiceField from "./MultipleChoiceField";

const Fortschritt = (props) => {
    const {lection} = props

    return (
        <>
            <div className="TextField">
                <a>
                    {lection.text}
                </a>
            </div>
            <br/>
            <div className="MultipleChoiceField">
                {
                    lection.aufgaben.map(aufgabe => (
                            <MultipleChoiceField key={Math.random()} aufgabe={aufgabe}/>
                        )
                    )
                }

            </div>
        </>
    )
}

export default Fortschritt
