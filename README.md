<div align="center">

![alt Logo](https://raw.githubusercontent.com/bastian1901/OT-Awareness-Schulung/master/src/Resources/logo_small.png)

</div>

# Backend OT - Awareness Schulung
In diesem Repository befindet sich das Backend zu [OT - Awareness Schulung](https://github.com/bastian1901/OT-Awareness-Schulung.git)
Softwareentwicklungsprojekt der Hochschule Mannheim im Sommersemester 2022 vom Team QWERTZ entwickelt wurde.

## Table of Contents
- [Installation](#Installation)
- [Database](#Database)
- [Mocha Tests](#Mocha-Tests)
- [License](#License)


## Installation
- Installiere [Npm](https://nodejs.org/en/download/)
- Clone das Repository ```https://github.com/bastian1901/qwertz_backend.git```
- Installiere Abhängigkeiten ```npm install```
- Link der MongoDB unter ```MONGO_URI``` in [.env](https://github.com/bastian1901/qwertz_backend/tree/master/.env) einfügen
- Mit ```npm start server``` starten

## Database
Für dieses Repo wird eine MongoDB benötigt.
Diese kann bei einem beliebigen Anbieter oder auch lokal gehostet werden.

- [Demodaten](https://github.com/bastian1901/qwertz_backend/blob/master/OT-DEMO-Datas.zip)
Demo-Daten für Badges als JSON zum nutzen in der MongoDB.
Badges mit Fließtext und Lösungen der Badges. 
Badges mit Fließtext ohne Lösungen und Aufgabenstellungen der Badges.

- [Datenstruktur](https://github.com/bastian1901/qwertz_backend/tree/master/backend/model)

## Mocha Tests
Die Automatisierten [Mocha](https://mochajs.org/) Tests lassen sich mit ```npm test``` starten.
 
## License
qwertz_backend inklusive [OT - Awareness Schulung](https://github.com/bastian1901/OT-Awareness-Schulung.git) sind lizenziert unter
der [MIT License](https://github.com/bastian1901/qwertz/blob/master/LICENSE).


