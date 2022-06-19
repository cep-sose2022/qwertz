const service = {}
const backendUrl = 'http://localhost:5000'

// --- getter ---

service.getZitate = () => {
    try {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", `${backendUrl}/getZitate`, false);
        xmlHttp.send(null);
        return JSON.parse(xmlHttp.responseText);
    } catch (e) {
        return null
    }
}

service.getBadges = () => {
    try {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", `${backendUrl}/getBadges`, false);
        xmlHttp.send(null);
        return JSON.parse(xmlHttp.responseText);
    } catch (e) {
        return null
    }
}

service.getImage = (name) => {
    try {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", `${backendUrl}/getImage/${name}`, false);
        xmlHttp.send(null);
        return "data:image/png;base64," + JSON.parse(xmlHttp.responseText)[0].img;
    } catch (e) {
        return null
    }
}
service.getSammlung = (badgeID) => {
    try {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", `${backendUrl}/getSammlung/${badgeID}`, false);
        xmlHttp.send(null);
        return "data:image/png;base64," + JSON.parse(xmlHttp.responseText)[0].sammlung;
    } catch (e) {
        return null
    }
}
service.getGif = (name) => {
    try {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", `${backendUrl}/getGif/${name}`, false);
        xmlHttp.send(null);
        return "data:image/gif;base64," + JSON.parse(xmlHttp.responseText)[0].gif;
    } catch (e) {
        return null
    }
}

service.getPdf = (badgeID) => {
    try {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", `${backendUrl}/getPdf/${badgeID}`, false);
        xmlHttp.send(null);
        const pdf = JSON.parse(xmlHttp.responseText)[0];
        pdf.pdf = "data:application/pdf;base64," + pdf.pdf
        return pdf;
    } catch (e) {
        return null
    }
}


const getModiData = (badgeID, modiID, name) => {
    try {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", `${backendUrl}/get${name}/${badgeID}/${modiID}`, false);
        xmlHttp.send(null);
        const responseJson = JSON.parse(xmlHttp.responseText)[0];
        if (responseJson === undefined)
            return undefined
        else
            return responseJson.data;
    } catch (e) {
        return null
    }
}

const getModiAufgabenstellung = (badgeID, modiID, name) =>{
    try {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", `${backendUrl}/get${name}/${badgeID}/${modiID}`, false);
        xmlHttp.send(null);
        const responseJson = JSON.parse(xmlHttp.responseText)[0];
        if (responseJson === undefined)
            return undefined
        else
            return responseJson.aufgabenstellung;
    } catch (e) {
        return null
    }
}

service.getAblaufanordnung = (badgeID, modiID) => {
    return getModiData(badgeID, modiID, 'Ablaufanordnung')
}
service.getAufgabenstellung = (badgeID, modiID) => {
    return getModiAufgabenstellung(badgeID, modiID, 'Ablaufanordnung')
}
service.getZuordnung = (badgeID, modiID) => {
    return getModiData(badgeID, modiID, 'Zuordnung')
}
service.getKonversation = (badgeID, modiID) => {
    return getModiData(badgeID, modiID, 'Konversation')
}
service.getWimmelbild = (badgeID, modiID) => {
    return getModiData(badgeID, modiID, 'Wimmelbild')
}

service.getMultipleChoice = (badgeID, modiID) => {
    return getModiData(badgeID, modiID, 'MultipleChoice')
}

module.exports = service
