import React, {useState} from "react";

const Admin = () => {

    const [modiName, setModiName] = useState("")
    const [badgeID, setBadgeID] = useState("")
    const [modiID, setModiID] = useState("")
    const [jsonFile, setJsonFile] = useState("")


    const postInDB = () => {
        const dbString = "{" +
            "\"badgeID\":" + badgeID + "," +
            "\"modiID\":" + modiID + "," +
            "\"data\":" + jsonFile + "}"


        // const dbString = new FormData();
        // dbString.append("badgeID", badgeID);
        // dbString.append("modiID", modiID);
        // dbString.append("data", jsonFile)

        console.log(dbString)

        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open("POST", `http://localhost:5000/post${modiName}`, false);
        xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlHttp.send(dbString);
    }

    return (
        <div>
            <h1>Hier kannst du Daten in die DB hochladen</h1>
            <div className="string-input">
                <label htmlFor="name">Modi Name</label>
                <input type="text" name="name" id="name" onChange={(e) => setModiName(e.target.value)}/>
            </div>

            <div className="number-input">
                <label htmlFor="badge">BadgeID</label>
                <input type="number" name="badge" id="badge" onChange={(e) => setBadgeID(e.target.value)}/>
                <br/>
                <label htmlFor="modi">ModiID</label>
                <input type="number" name="modi" id="modi" onChange={(e) => setModiID(e.target.value)}/>
            </div>

            <div className="file-upload">
                <label htmlFor="json">Json Datei</label>
                <br/>
                <input type="file" name="json" id="json" onChange={(e) => {

                    const fileReader = new FileReader();
                    fileReader.readAsText(e.target.files[0], "UTF-8");
                    fileReader.onload = e => {
                        setJsonFile(e.target.result);
                    }
                }}/>
            </div>
            <div className="submit-btn">
                <button onClick={postInDB}>Submit</button>
            </div>
        </div>
    )
};

export default Admin;

