var vanya = require('./vanya.js');
var cards = require('./cards.js');
var _ = require('lodash');



function all_in() {
    console.log('$$$ALL_IN')
    return 5000;
}

function pass() {
    console.log('$$$PASS')
    return 0;
}

function raise() {
    console.log('$$$RAISE')
    var cur_bet = module.exports.getMaxBetFromState();
    return cur_bet + game_state.minimum_raise;
    //return 2000;
}

function check() {
    console.log('$$$CHECK')
    return module.exports.getMaxBetFromState();
    //return 1000;
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
              return check();
          break;

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
      console.log('$$$WTF$$$')
      console.log(e)
  }
    console.log('WTF!!!???')
    return 2000;
  },

  showdown: function(game_state) {

  },

  getMaxBetFromState: function getMaxBetFromState(game_state) {
      var bets = _.pluck(game_state.players, 'bet');

      var maxBet = bets.reduce(function (max, current) {
          return current < max ? max : current;
      }, 0);

      return maxBet;
  }
};
