var vanya = require('./vanya.js');

var ourCards = function(people) {
    var cards = [];
    people.forEach(function(player) {
        if (player.id === 3) {
            cards = player["hole_cards"];
        }
    });
    return cards;
};

module.exports = {

  VERSION: "0.1.0",

  bet_request: function(game_state) {
      console.log(JSON.stringify(game_state));
      switch(vanya(ourCards(game_state.players))) {
          case 0:
              return 0;
          break;

          case 4:
              return 400;
          break;

          case 8:
              return 1000;
          break;
      }
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
