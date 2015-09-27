var vanya = require('./vanya.js');
var cards = require('./cards.js');



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

      var our_cards = cards.ourCards(game_state);
      var table_cards = game_state.community_cards;
  try {
      switch(vanya(our_cards.concat(table_cards))) {
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
