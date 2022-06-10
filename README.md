<div align="center">

![Logo](src/Resources/logo_small.png)


</div>

# OT - Awareness Schulung

Dieses Repository enthält den Prototypen einer Awareness-Schulungen im Bereich OT-Security. Welcher im
Softwareentwicklungsprojekt der Hochschule Mannheim im Sommersemester 2022 vom Team QWERTZ entwickelt wurde.

## Table of Contents

- [Installation](#Installation)
- [Backend](#Backend)
- [Architektur](#Architektur)
- [Technologien](#Technologien)
- [License](#License)

## Installation

- Installiere [Npm](https://nodejs.org/en/download/)
- Clone das Repository ```git clone https://github.com/bastian1901/OT-Awareness-Schulung.git```
- Installiere Abhängkeiten ```npm install```

## Backend

Das Backend befindet sich in folgendem Repository [qwertz_backend](https://github.com/bastian1901/qwertz_backend.git).
<br/>
Um ein eigenes Backend aufzusetzen muss lediglich die Datei [service](https://github.com/bastian1901/qwertz/blob/master/src/service.js) angepasst werden
und sich an die richtige [Datenstruktur](https://github.com/bastian1901/qwertz_backend/tree/master/backend/model) gehalten werden.

## Starten der Software

- Um die Awareness-Schulung zu starten wird das [Backend](#Backend) benötigt.
- Dieses muss vor der Anwendung mit ```npm start server``` gestartet werden.
    - und läuft nun auf (standardmäßig) [http://localhost:5000](http://localhost:5000)
- Danach kann die Anwendung mit ```npm start``` gestartet werden.
    - Diese läuft nun auf (standardmäßig) [http://localhost:3000](http://localhost:3000)

## Architektur
Zur [Architektur](https://github.com/bastian1901/OT-Awareness-Schulung/blob/master/src/Resources/Architektur.pdf)

## Technologien

- [React](https://reactjs.org/) 
- [ReactDND](https://react-dnd.github.io/react-dnd/)
- [NodeJS](https://nodejs.org)
- [Mantine](https://mantine.dev/)

## License

OT-Awareness-Schulung inklusive [qwertz_backend](#Backend) sind lizenziert unter
der [MIT License](https://github.com/bastian1901/qwertz/blob/master/LICENSE).
