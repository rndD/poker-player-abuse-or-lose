
module.exports = {

  VERSION: "0.1.0",

  bet_request: function(game_state) {
      console.log(game_state);
    return 1000;
  },

  showdown: function(game_state) {

  },

  getMaxBetFromState: function getMaxBetFromState(game_state) {
      var players = game_state.players;

      var maxBet = players.reduce(function (max, current) {
          return current < max ? max : current;
      }, 0);

      return maxBet;
  }
};
