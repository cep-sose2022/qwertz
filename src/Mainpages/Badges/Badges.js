import React from "react";
import BadgeLine from "./components/BadgeLine";
import "./Badges.css"
import "./Schloss.css"

import Headline from "../Startseite/Headline";
import {BackgroundImage} from "@mantine/core";

import JsonData from "../../Resources/Json/BadgeData.json";
import storage from "../../storage";
import service from "../../service";

const Badges = () => {
    let badges = []

    // läd die daten aus der DB uns speichert sie zwischen
    // wen schon daten im storage sind, lade die, ansonsten lade die aus der DB
    if (storage.getBadges() === null) {
        let Data = service.getBadges()
        if (Data === null)
            Data = JsonData

        Data.map((object) => {
                let badge = {
                    badgeID: parseInt(object.badgeID),
                    title: object.title,
                    text: object.text,
                    modis: object.modis,
                    passed: object.passed,
                    unlocked: object.unlocked
                }
                badges.push(badge)
            }
        )
        badges[0].unlocked = true
        storage.setBadges(badges)
    } else
        badges = storage.getBadges()

// TODO hier wurde was gemacht
    return (
        <div className="badges-container">
            <div className="badges-header">
                <Headline title={"Badges"} headline={"Dein Fortschritt"} text={""}/>
            </div>
            <div className="badges-body">
                <BackgroundImage className="image" src={''}>
                    <BadgeLine badgeData={badges}/>
                </BackgroundImage>
            </div>
        </div>
    )
};

export default Badges;
