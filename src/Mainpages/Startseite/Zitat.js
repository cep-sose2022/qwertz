import React from "react";

const Zitat = (params) => {
    const { quote, author } = params;
    return (
        <>
            <div className="icon-quote">

                <span className="icon2" />
                <i className="fas fa-quote-left" />
                <p className="quote">{quote}
                </p>
            </div>
            <div className="author">{author}</div>
        </>

    )
}
export default Zitat