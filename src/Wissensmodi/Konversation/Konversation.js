import React, {useState} from "react";
import "./Konversation.css"
import Bubble from "./Components/Bubble";

import Data from "./Data";
import BubblePlacer from "./Components/BubblePlacer";

var firstState = false;

function getData() {
    console.log(Data);
}

const Konversation = () => {
    const [text] = useState([]);
    const [key,setKey] = useState(0);



    return (
        <div className="theoretic-conversation">
            {/*{getData()}*/}
            {/*{*/}

            {/*    Data.map((data) => (*/}
            {/*        <Bubble data={data}/>*/}
            {/*    ))*/}

            {/*}*/}

            <BubblePlacer/>


        </div>
    )

};

export default Konversation;
