var _ = require('lodash');
var ranks = {
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
};

var vanya = function(cards) {
    var hand_categories = {
        "straight_flush": false,
        "four": checkPoker(cards),
        "full_house": checkFullHouse(cards),
        "flush": checkFlash(cards),
        "straight": false,
        "three": checkTrio(cards),
        "two": checkPair(cards)
    };

    return hand_categories;
};

function checkFlash(cards) {
    var suits = _.reduce(
        _.values(
            _.countBy(cards, 'suit')
        ), function (max, current) {
            return current > max ? current : max;
        }, 0
    );

    return suits === 5 || suits === cards.length;
}

function checkPoker(cards) {
    getMaxRankCount(cards) === 4;
}

function checkTrio(cards) {
    getMaxRankCount(cards) === 3;
}

function checkPair(cards) {
    getMaxRankCount(cards) === 2;
}

function checkTwoPair(cards) {
    var vals = _.values(
        _.countBy(cards, 'rank')
    );

    return _.filter(vals, function (val) {return val >= 2}).length >= 2;
}

function normalizeCards(cards) {
    var clone = _.cloneDeep(cards);
    return _.map(clone, function (card) {
        card.rank = rank[card.rank]
    })
}

function getMaxRankCount(cards) {
    return _.reduce(
        _.values(
            _.countBy(cards, 'rank')
        ), function (max, current) {
            return current > max ? current : max;
        }, 0
    );
}

module.exports = vanya;
