import React from "react";
import "./Konversation.css"
import Bubble from "./Components/Bubble";

import Data from "./Data";

const Konversation = () => (
    <div className="theoretic-conversation">
        {Data.map(data => (
            <Bubble data={data}/>
        ))

        }


    </div>

);

export default Konversation;
