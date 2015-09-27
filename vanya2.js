var _ = require('lodash');
var combinations = require('./combination.js');
var ranks = {
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
};

var vanya = function(cards) {
    var hand_categories = {
        "straight_flush": false,
        "four": combinations.checkFour(cards),
        "full_house": false//checkFullHouse(cards),
        "flush": combinations.checkFlash(cards),
        "straight": false,
        "three": combinations.checkTrio(cards),
        "two": combinations.checkPair(cards)
    };

    return hand_categories;
};

module.exports = vanya;
