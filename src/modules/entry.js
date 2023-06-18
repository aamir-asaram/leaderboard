class Entry {
  constructor(name, score) {
    this.name = name
    this.score = score
  }

  get formattedEntry() {
    return `Name: ${this.name} scored ${this.score}`
  }
}