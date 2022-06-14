var rulesWrapper = document.querySelector('.rules-wrapper')
var rulesBoxes = document.querySelectorAll('.rules-box')
var fighterChoices = document.querySelectorAll('.fighter-choices')
var classicFighters = document.querySelector('.classic-choice')
var difficultFighters = document.querySelector('.difficult-choice')
var humanScore = document.querySelector('.human-wins')
var computerScore = document.querySelector('.computer-wins');
var phrase = document.querySelector('.phrase')
var resultPodium = document.querySelector('.result-podium')
var changeGameBtn = document.querySelector('.change-game-button')

fighterChoices.forEach((choice) => {
  choice.addEventListener('click', showWinner)
})
rulesBoxes.forEach((choice) => {
  choice.addEventListener('click', chooseGame)
})
changeGameBtn.addEventListener('click', showRules)

var gameBoard = new Game()

function chooseGame(event) {
  if (event.target.classList.contains('rules-box') || event.target.parentNode.classList.contains('rules-box')) {
    var gameType = event.target.getAttribute('data-game-type');
    if (event.target.parentNode.classList.contains('rules-box')) {
      gameType = event.target.parentNode.getAttribute('data-game-type')
    }
    gameBoard.setGameType(gameType)
    phrase.innerHTML = `<h2>Choose your fighter!</h2>`
    rulesWrapper.classList.add('hidden')
    classicFighters.classList.remove('hidden')
    if (gameBoard.gameType === 'difficult') {
      difficultFighters.classList.remove('hidden')
    }
  }
}

function showWinner(target) {
  phrase.innerHTML = `<h2>Choose your fighter!</h2>`
  var humanChoice = event.target.getAttribute('data-fighter-type')
  var winner = gameBoard.decideWinner(humanChoice)
  if (winner === null) {
    phrase.innerHTML = `<h2>😭 It's a draw! 😭</h2>`
  } else {
    phrase.innerHTML = `<h2>${winner.token} ${winner.name} won this round! ${winner.token}</h2>`
  }
  humanScore.innerHTML = `<h2>Wins: ${gameBoard.humanPlayer.wins}</h2>`
  computerScore.innerHTML = `<h2>Wins: ${gameBoard.computerPlayer.wins}</h2>`
  resultPodium.classList.remove('hidden')
  classicFighters.classList.add('hidden')
  difficultFighters.classList.add('hidden')
  changeGameBtn.classList.remove('hidden')
  resultPodium.innerHTML = `<img class="fighter-choices" src="assets/${gameBoard.humanPlayer.fighter}.png"/>
  <img class="fighter-choices" src="assets/${gameBoard.computerPlayer.fighter}.png"/>`
  changeGameBtn.removeEventListener('click', showRules)
  setTimeout(showGame, 2000);
}

function showGame(){
  phrase.innerHTML = `<h2>Choose your fighter!</h2>`
  changeGameBtn.addEventListener('click', showRules)
  resultPodium.classList.add('hidden')
  classicFighters.classList.remove('hidden')
  if (gameBoard.gameType === "difficult") {
    difficultFighters.classList.remove('hidden')
  }
}

function showRules(){
  phrase.innerHTML = `<h2>Choose your game!</h2>`
  resultPodium.classList.add('hidden')
  rulesWrapper.classList.remove('hidden')
  classicFighters.classList.add('hidden')
  difficultFighters.classList.add('hidden')
}
