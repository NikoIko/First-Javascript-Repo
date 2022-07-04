let homeScore = 0 
let awayScore = 0 

let scoreElHo = document.getElementById("home-score")
let scoreElAw = document.getElementById("away-score")

function onePoint() {
    homeScore += 1
    scoreElHo.textContent = homeScore
}

function twoPoints() {
    homeScore += 2
    scoreElHo.textContent = homeScore

}

function threePoints() {
    homeScore += 3
    scoreElHo.textContent = homeScore
}

function onePointAway(){
    awayScore += 1
    scoreElAw.textContent = awayScore
}

function twoPointsAway() {
    awayScore += 2
    scoreElAw.textContent = awayScore
}

function threePointsAway(){
    awayScore += 3
    scoreElAw.textContent = awayScore
}