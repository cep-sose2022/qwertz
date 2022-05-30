const service = {}
const backendUrl = 'http://localhost:5000'

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
service.getAblaufanordnung = (badgeID, modiID) => {
    return getModiData(badgeID, modiID, 'Ablaufanordnung')
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
