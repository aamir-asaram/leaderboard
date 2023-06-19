export default class Leaderboard {
  constructor() {
    this.leaders = [];
  }

  addEntry(name, score) {
    const entry = { name, score };
    this.leaders.push(entry);
  }

  getSortedLeaders() {
    return this.leaders.sort((a, b) => b.score - a.score);
  }
}