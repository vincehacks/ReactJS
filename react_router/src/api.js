// Created by Vince Chang

/* A simple data API that will be used to get the data for our components.
 * On a real website, a more robust data fetching solution would be more
 * appropriate.
 */
const PlayerAPI = {
  players: [
    { number: 80, name: "Jerry Rice", position: "WR" },
    { number: 16, name: "Joe Montana", position: "QB" },
    { number: 81, name: "Terrel Owens", position: "WR" },
    { number: 21, name: "Frank Gore", position: "RB" },
    { number: 52, name: "Patrick Willis", position: "LB" },
    { number: 7, name: "Colin Kaepernick", position: "QB" }
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

export default PlayerAPI;