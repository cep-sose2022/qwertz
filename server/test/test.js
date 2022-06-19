const chakram = require('chakram');

expect = chakram.expect;

const url = 'http://localhost:5000';

describe("basic tests for the endpoint getBadges", function () {
    it("getBadges endpoint should return 200 status", function () {
        return chakram.get(`${url}/getBadges`)
            .then(function (response) {
                expect(response).to.have.status(200);
            });
    });
});

describe("basic tests for the endpoint getZitate", function () {
    it("getZitate endpoint should return 200 status", function () {
        return chakram.get(`${url}/getZitate`)
            .then(function (response) {
                expect(response).to.have.status(200);
            });
    });
});

describe("basic tests for the endpoint getImage", function () {
    it("getImage endpoint should return 404 status", function () {
        return chakram.get(`${url}/getImage`)
            .then(function (response) {
                expect(response).to.have.status(404);
            });
    });

    it("getImage/{token} endpoint should return 200 status", function () {
        return chakram.get(`${url}/getImage/1`)
            .then(function (response) {
                expect(response).to.have.status(200);
            });
    });
});

describe("basic tests for the endpoint getGif", function () {
    it("getGif endpoint should return 404 status", function () {
        return chakram.get(`${url}/getGif`)
            .then(function (response) {
                expect(response).to.have.status(404);
            });
    });

    it("getGif/{token} endpoint should return 200 status", function () {
        return chakram.get(`${url}/getGif/1`)
            .then(function (response) {
                expect(response).to.have.status(200);
            });
    });
});

describe("basic tests for the endpoint getSammlung", function () {
    it("getSammlung endpoint should return 404 status", function () {
        return chakram.get(`${url}/getSammlung`)
            .then(function (response) {
                expect(response).to.have.status(404);
            });
    });

    it("getSammlung/{token} endpoint should return 200 status", function () {
        return chakram.get(`${url}/getSammlung/1`)
            .then(function (response) {
                expect(response).to.have.status(200);
            });
    });
});

describe("basic tests for the endpoint getPdf", function () {
    it("getPdf endpoint should return 404 status", function () {
        return chakram.get(`${url}/getPdf`)
            .then(function (response) {
                expect(response).to.have.status(404);
            });
    });

    it("getPdf/{token} endpoint should return 200 status", function () {
        return chakram.get(`${url}/getPdf/1`)
            .then(function (response) {
                expect(response).to.have.status(200);
            });
    });
});

describe("basic tests for the endpoint getAblaufanordnung", function () {
    it("getAblaufanordnung endpoint should return 404 status", function () {
        return chakram.get(`${url}/getAblaufanordnung`)
            .then(function (response) {
                expect(response).to.have.status(404);
            });
    });

    it("getAblaufanordnung/{token}/{token} endpoint should return 200 status", function () {
        return chakram.get(`${url}/getAblaufanordnung/1/1`)
            .then(function (response) {
                expect(response).to.have.status(200);
            });
    });
});

describe("basic tests for the endpoint getWimmelbild", function () {
    it("getWimmelbild endpoint should return 404 status", function () {
        return chakram.get(`${url}/getWimmelbild`)
            .then(function (response) {
                expect(response).to.have.status(404);
            });
    });

    it("getWimmelbild/{token}/{token} endpoint should return 200 status", function () {
        return chakram.get(`${url}/getWimmelbild/1/1`)
            .then(function (response) {
                expect(response).to.have.status(200);
            });
    });
});

describe("basic tests for the endpoint getZuordnung", function () {
    it("getZuordnung endpoint should return 404 status", function () {
        return chakram.get(`${url}/getZuordnung`)
            .then(function (response) {
                expect(response).to.have.status(404);
            });
    });

    it("getZuordnung/{token}/{token} endpoint should return 200 status", function () {
        return chakram.get(`${url}/getZuordnung/1/1`)
            .then(function (response) {
                expect(response).to.have.status(200);
            });
    });
});

describe("basic tests for the endpoint getKonversation", function () {
    it("getKonversation endpoint should return 404 status", function () {
        return chakram.get(`${url}/getKonversation`)
            .then(function (response) {
                expect(response).to.have.status(404);
            });
    });

    it("getKonversation/{token}/{token} endpoint should return 200 status", function () {
        return chakram.get(`${url}/getKonversation/1/1`)
            .then(function (response) {
                expect(response).to.have.status(200);
            });
    });
});

describe("basic tests for the endpoint getMultipleChoice", function () {
    it("getMultipleChoice endpoint should return 404 status", function () {
        return chakram.get(`${url}/getMultipleChoice`)
            .then(function (response) {
                expect(response).to.have.status(404);
            });
    });

    it("getMultipleChoice/{token}/{token} endpoint should return 200 status", function () {
        return chakram.get(`${url}/getMultipleChoice/1/1`)
            .then(function (response) {
                expect(response).to.have.status(200);
            });
    });
});
