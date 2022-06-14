var rulesWrapper = document.querySelector(".rules-wrapper")
var rulesBtn = document.querySelectorAll(".rules-box")
var fighterChoices = document.querySelectorAll(".fighter-choices")
var classicFighters = document.querySelector(".classic-choice")
var difficultFighters = document.querySelector(".difficult-choice")
var humanScore = document.querySelector(".human-wins")
var computerScore = document.querySelector(".computer-wins");
var choice = document.querySelector(".choice")
var resultPodium = document.querySelector(".result-podium")
var changeGameBtn = document.querySelector(".change-game-button")

fighterChoices.forEach((choice) => {
  choice.addEventListener("click", getUserChoice)
})
rulesBtn.forEach((choice) => {
  choice.addEventListener("click", chooseGame)
})
changeGameBtn.addEventListener("click", showRules)

var gameBoard = new Game()

function chooseGame(event) {
  if (event.target.classList.contains('rules-box') || event.target.parentNode.classList.contains('rules-box')) {
    var gameType = event.target.getAttribute("data-game-type");
    if (event.target.parentNode.classList.contains('rules-box')) {
      gameType = event.target.parentNode.getAttribute('data-game-type')
    }
    gameBoard.setGameType(gameType)
    rulesWrapper.classList.add('hidden')
    choice.innerHTML = `<h2>Choose your fighter!</h2>`
    classicFighters.classList.remove('hidden')
    if (gameBoard.gameType === "difficult") {
      difficultFighters.classList.remove('hidden')
    }
  }
}

function getUserChoice(target) {
  choice.innerHTML = `<h2>Choose your fighter!</h2>`
  var humanChoice = event.target.getAttribute("data-fighter-type")
  var winner = gameBoard.decideWinner(humanChoice)
  if (winner === null) {
    choice.innerHTML = `<h2>😭 It's a draw! 😭</h2>`
  } else {
    choice.innerHTML = `<h2>${winner.token} ${winner.name} won this round! ${winner.token}</h2>`
  }
  humanScore.innerHTML = `<h2>Wins: ${gameBoard.humanPlayer.wins}</h2>`
  computerScore.innerHTML = `<h2>Wins: ${gameBoard.computerPlayer.wins}</h2>`
  resultPodium.classList.remove('hidden')
  classicFighters.classList.add('hidden')
  difficultFighters.classList.add('hidden')
  changeGameBtn.classList.remove('hidden')
  resultPodium.innerHTML = `<img class="fighter-choices" src="assets/${gameBoard.humanPlayer.fighter}.png"/>
  <img class="fighter-choices" src="assets/${gameBoard.computerPlayer.fighter}.png"/>`
  changeGameBtn.removeEventListener("click", showRules)
  setTimeout(showGame, 2000);
}

function showGame(){
  resultPodium.classList.add('hidden')
  classicFighters.classList.remove('hidden')
  changeGameBtn.addEventListener("click", showRules)
  choice.innerHTML = `<h2>Choose your fighter!</h2>`
  if (gameBoard.gameType === "difficult") {
    difficultFighters.classList.remove('hidden')
  }
}

function showRules(){
  resultPodium.classList.add('hidden')
  rulesWrapper.classList.remove('hidden')
  classicFighters.classList.add('hidden')
  difficultFighters.classList.add('hidden')
  choice.innerHTML = `<h2>Choose your game!</h2>`
}
