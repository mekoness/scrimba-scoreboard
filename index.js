let homeScore = 0
let guestScore = 0

let homePointsEl = document.getElementById("home-points-text")
let guestPointsEl = document.getElementById("guest-points-text")

function plusOneH() {
    homeScore ++
    homePointsEl.textContent = homeScore
}

function plusTwoH() {
    homeScore += 2
    homePointsEl.textContent = homeScore
}

function plusThreeH() {
    homeScore += 3
    homePointsEl.textContent = homeScore
}

function plusOneG() {
    guestScore ++
    guestPointsEl.textContent = guestScore
}

function plusTwoG() {
    guestScore += 2
    guestPointsEl.textContent = guestScore
}

function plusThreeG() {
    guestScore += 3
    guestPointsEl.textContent = guestScore
}

function reset() {
    homeScore = 0
    guestScore = 0
    homePointsEl.textContent = homeScore
    guestPointsEl.textContent = guestScore
}