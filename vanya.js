var _ = require('lodash');
var ranks = {
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
};

var vanya = function(cards) {
    if (!cards ) {
        return 8;
    }
    // Положительный.
    // Карманные пары
    if (cards[0].rank == cards[1].rank) {
        return 8;
    }

    // if (checkFlash(cards)) {
    //     return 8;
    // }

    if (cards[0].rank == 2 && cards[0].rank == 7) {
        return 0;
    }

    return 4;
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

function checkStreet(cards) {
    var normalizedCard = normalizeCards(cards);
}

function normalizeCards(cards) {

}

module.exports = vanya;
