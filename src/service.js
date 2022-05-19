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

service.getAblaufanordnung = (badgeID, modiID) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", `${backendUrl}/getAblaufanordnung/${badgeID}/${modiID}`, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText).data;
}
service.getZuordnung = (badgeID, modiID) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", `${backendUrl}/getZuordnung/${badgeID}/${modiID}`, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText).data;
}
service.getKonversation = (badgeID, modiID) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", `${backendUrl}/getKonversation/${badgeID}/${modiID}`, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText).data;
}
service.getWimmelbild = (badgeID, modiID) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", `${backendUrl}/getWimmelbild/${badgeID}/${modiID}`, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText).data;
}

module.exports = service
