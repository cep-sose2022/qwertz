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

service.getModi = (id, modiName) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", `${backendUrl}/getBadges/${id}/${modiName}`, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}


module.exports = service
