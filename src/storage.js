const storage = {}

// Methoden um mit den currentModiTitle zu agieren
storage.setCurrentModiTitle = (currentModiTitle) => {
    localStorage.setItem("currentModiTitle", currentModiTitle)
}
storage.getCurrentModiTitle = () => {
    return localStorage.getItem("currentModiTitle")
}
storage.removeCurrentModiTitle = () => {
    localStorage.removeItem("currentModiTitle")
}

// Methoden um mit den Badges zu agieren
storage.setBadges = (badges) => {
    localStorage.setItem("badges", badges)
}
storage.getBadges = () => {
    return localStorage.getItem("badges")
}
storage.removeBadges = () => {
    localStorage.removeItem("badges")
}
storage.setBadgePassed = (badgeID) => {
    let badges = storage.getBadges()
    badges.filter(badge => badge.id === badgeID)[0].passed = true
    storage.setBadges(badges)
}

// Methoden um mit den Modis zu agieren
storage.setModis = (modis) => {
    localStorage.setItem("modis", JSON.stringify(modis))
}
storage.getModis = () => {
    return JSON.parse(localStorage.getItem("modis"))
}
storage.removeModis = () => {
    localStorage.removeItem("modis")
}
storage.setModiPassed = (modiId) => {
    let modis = storage.getModis()
    modis.filter(modi => modi.modiID === modiId)[0].passed = true
    storage.setModis(modis)
}


module.exports = storage
