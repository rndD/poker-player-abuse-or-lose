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

function all_in() {
    return 5000;
}

function pass() {
    return 0;
}

function raise() {
    return 2000;
}

function check() {
    return 1000;
}

module.exports = {

  VERSION: "0.1.0",

  bet_request: function(game_state) {
      console.log(JSON.stringify(game_state, null, 2));
  try {
      switch(vanya(ourCards(game_state.players))) {
          case 0:
          case 1:
          case 2:
              return pass();
          break;

          case 3:
          case 4:
          case 5:
              return raise();
          break;

          case 6:
          case 7:
          case 8:
              return all_in();
          break;
      }
  } catch(e) {
      console.log('WTF!!!???')
  }
    return check();
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
