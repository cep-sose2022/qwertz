const service = {}
const backendUrl = 'http://localhost:5000'

service.getZitate = () => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", `${backendUrl}/getZitate`, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

service.getBadges = () => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", `${backendUrl}/getBadges`, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

const getModiData = (badgeID, modiID, name) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", `${backendUrl}/get${name}/${badgeID}/${modiID}`, false);
    xmlHttp.send(null);
    const responseJson = JSON.parse(xmlHttp.responseText)[0];
    if (responseJson === undefined)
        return null
    else
        return responseJson.data;
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

module.exports = service
// TODO hier wurde was gemacht
