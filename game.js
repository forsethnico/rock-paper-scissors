// var Player = require('./player');

class Game {
  constructor() {
    this.humanPlayer = new Player("human", '👩')
    this.computerPlayer = new Player("computer", "💻")
    this.gameType = ""
    this.fighters = [];
  }
  setGameType(gameType) {
    this.gameType = gameType
    if (this.gameType === "classic") {
      this.fighters = ["rock", "paper", "scissors"]
    } else {
      this.fighters = ["rock", "spock", "paper", "scissors", "lizard"]
    }
  }
  decideWinner(humanChoice) {
      var winner = null
      this.humanPlayer.fighter = humanChoice;
      var computerChoice = this.computerPlayer.takeTurn(this.fighters)

      if (humanChoice === computerChoice) {
        winner = null
      } else if ((humanChoice === "rock" && ['scissors', 'lizard'].includes(computerChoice)) ||
        (humanChoice === "paper" && ['spock', 'rock'].includes(computerChoice)) ||
        (humanChoice === "scissors" && ['lizard', 'paper'].includes(computerChoice)) ||
        (humanChoice === "lizard" && ['paper', 'spock'].includes(computerChoice)) ||
        (humanChoice === "spock" && ['scissors', 'rock'].includes(computerChoice))) {
        winner = this.humanPlayer
        this.humanPlayer.wins++
      } else {
        winner = this.computerPlayer
        this.computerPlayer.wins++
      }
      return winner
    }
}



// module.exports = Game;
