

class Player {
  constructor(name) {
    this.name = name
    this.token = '👩' || '💻'
    this.fighter = ""
    this.wins = 0
  }
  takeTurn(fighters){
    var randomNumber = Math.floor(Math.random() * fighters.length)
    return fighters[randomNumber]
  }
}

module.exports = Player;
