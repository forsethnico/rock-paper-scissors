class Player {
  constructor(name, token) {
    this.name = name
    this.token = token
    this.fighter = ""
    this.wins = 0
  }
  takeTurn(fighters){
    var randomNumber = Math.floor(Math.random() * fighters.length)
    return fighters[randomNumber]
  }
}
