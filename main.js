//const Game = require('/game');

var rulesBtn = document.querySelectorAll(".rules-box")
var fighterChoices = document.querySelectorAll(".fighter-choices")
var humanScore = document.querySelector(".human-wins")
var computerScore = document.querySelector(".computer-wins");
var result = document.querySelector(".result")
var classicFighters = document.querySelector(".classic-choice")
var difficultFighters = document.querySelector(".difficult-choice")
var rulesWrapper = document.querySelector(".rules-wrapper")

// window.addEventListener("load", chooseGame)
fighterChoices.forEach((choice) => {
  choice.addEventListener("click", getUserChoice)
})
rulesBtn.forEach((choice) => {
  choice.addEventListener("click", chooseGame)
})

var gameBoard = new Game()

function chooseGame(event) {
  gameBoard.setGameType(event.target.getAttribute("data-game-type"))
  rulesWrapper.classList.add('hidden')
  classicFighters.classList.remove('hidden')
  if (gameBoard.gameType === "difficult") {
    difficultFighters.classList.remove('hidden')
  }
}

function getUserChoice(target) {
  var humanChoice = event.target.getAttribute("data-fighter-type")
  var winner = gameBoard.decideWinner(humanChoice)
  if (winner === null) {
    result.innerHTML = `<h1 class="result">It's a draw!</h1>`
  } else {
    result.innerHTML = `<h1 class="result">${winner.token}${winner.name} won this round!${winner.token}</h1>`
  }
  //show computer and human choices on winner podium
  humanScore.innerText = `Wins: ${gameBoard.humanPlayer.wins}`
  computerScore.innerText = `Wins: ${gameBoard.computerPlayer.wins}`
}
