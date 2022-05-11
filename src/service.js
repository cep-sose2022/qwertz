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

service.getAblaufanordnung = (id) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", `${backendUrl}/getAblaufanordnung/${id}`, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}
service.getZuordnung = (id) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", `${backendUrl}/getZuordnung/${id}`, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}
service.getKonversation = (id) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", `${backendUrl}/getKonversation/${id}`, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}
service.getWimmelbild = (id) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", `${backendUrl}/getWimmelbild/${id}`, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

module.exports = service
