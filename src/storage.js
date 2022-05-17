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
    sessionStorage.setItem("badges", badges)
}
storage.getBadges = () => {
    return sessionStorage.getItem("badges")
}
storage.removeBadges = () => {
    sessionStorage.removeItem("badges")
}
storage.setBadgePassed = (badgeID) => {
    let badges = storage.getBadges()
    badges.filter(badge => badge.id === badgeID)[0].passed = true
    storage.setBadges(badges)
}

// Methoden um mit den Modis zu agieren
storage.setModis = (modis) => {
    sessionStorage.setItem("modis", JSON.stringify(modis))
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


module.exports = storage
