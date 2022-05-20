const storage = {}

// Methoden um mit den currentModiTitle zu agieren
storage.setCurrentModiTitle = (currentModiTitle) => {
    sessionStorage.setItem("currentModiTitle", currentModiTitle)
}
storage.getCurrentModiTitle = () => {
    return sessionStorage.getItem("currentModiTitle")
}
storage.removeCurrentModiTitle = () => {
    sessionStorage.removeItem("currentModiTitle")
}

// Methoden um mit den Badges zu agieren
storage.setBadges = (badges) => {
    sessionStorage.setItem("badges", JSON.stringify(badges))
}
storage.getBadges = () => {
    return JSON.parse(sessionStorage.getItem("badges"))
}
storage.removeBadges = () => {
    sessionStorage.removeItem("badges")
}
storage.setBadgePassed = (badgeID) => {
    let badges = storage.getBadges()
    badges.filter(badge => badge.badgeID === badgeID)[0].passed = true

    let nextBadge = badges.filter(badge => badge.badgeID === (badgeID + 1))[0]
    if (nextBadge !== undefined)
        nextBadge.unlocked = true
    storage.setBadges(badges)
}
storage.setBadgeID = (badgeID) => {
    sessionStorage.setItem("badgeID", badgeID)
}
storage.getBadgeID = () => {
    return parseInt(sessionStorage.getItem("badgeID"))
}
storage.removeBadgeID = () => {
    sessionStorage.removeItem("badgeID")
}

// Methoden um mit den Modis zu agieren
storage.setModis = (modis) => {
    let modiData = []
    modis.map(object => {
        let modi = {
            modiID: object.modiID,
            title: object.name,
            passed: false
        }
        modiData.push(modi)
    })
    sessionStorage.setItem("modis", JSON.stringify(modiData))
}
storage.getModis = () => {
    return JSON.parse(sessionStorage.getItem("modis"))
}
storage.removeModis = () => {
    sessionStorage.removeItem("modis")
}
storage.setModiPassed = (modiId) => {
    let modis = storage.getModis()
    modis.filter(modi => modi.modiID === modiId)[0].passed = true
    storage.setModis(modis)
}
storage.setModiID = (modiId) => {
    sessionStorage.setItem("modiID", modiId)
}
storage.getModiID = () => {
    return parseInt(sessionStorage.getItem("modiID"))
}
storage.removeModiID = () => {
    sessionStorage.removeItem("modiID")
}

storage.removeAll = () => {
    storage.removeModiID()
    storage.removeBadgeID()
    storage.removeCurrentModiTitle()
    storage.removeModis()
    // storage.removeBadges()
}


module.exports = storage
// TODO hier wurde was gemacht
