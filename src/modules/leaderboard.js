class Leaderboard {
  constructor () {
    this.leaderboard = []
  }

  addEntry (entry) {
    this.leaderboard.push(entry)
  }

  getEntries () {
    return this.leaderboard
  }
}