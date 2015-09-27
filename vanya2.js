var _ = require('lodash');
var combinations = require('./combination.js');
var ranks = {
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
};

var vanya = function(cards) {

    function good(cards_) {
        var yeap = false;
        cards_.forEach(function(card) {
            if (ranks[card.rank]) {
                yeap = true;
            }
        })

        return yeap;
    }

    var hand_categories = {
        "straight_flush": false,
        "four": combinations.checkFour(cards),
        "full_house": combinations.checkFullHouse(cards),
        "flush": combinations.checkFlash(cards),
        "straight": false,
        "three": combinations.checkTrio(cards),
        "two": combinations.checkPair(cards),
        "good_kicker": good(cards)
    };

    return hand_categories;
};

module.exports = vanya;
