var vanya = require('./vanya.js');
var vanya2 = require('./vanya2.js');
var sveta = require('./sveta.js');
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

function raise(game_state) {
    console.log('$$$RAISE')
    var cur_bet = module.exports.getMaxBetFromState(game_state);
    return cur_bet + game_state.minimum_raise;
    //return 2000;
}

function check(game_state) {
    console.log('$$$CHECK')
    return module.exports.getMaxBetFromState(game_state);
    //return 1000;
}

module.exports = {

  VERSION: "Blef mashina 1.0.0",

  bet_request: function(game_state) {
      console.log(JSON.stringify(game_state, null, 2));

  try {
      var our_cards = cards.ourCards(game_state);
      var table_cards = game_state.community_cards;
      var all_cards = our_cards.concat(table_cards);

      if (!all_cards.length) {
          console.log('NO CARDS')
          return check(game_state);
      }

      var card_status = vanya2(all_cards);
      var cur_bet = module.exports.getMaxBetFromState(game_state);
      var action = sveta(card_status, all_cards.length, cur_bet);

      switch(action) {
          case 0:
          case 1:
          case 2:
              return pass(game_state);
          break;

          case 3:
              return check(game_state);
          break;

          case 4:
          case 5:
              return raise(game_state);
          break;

          case 6:
          case 7:
          case 8:
              return all_in(game_state);
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
