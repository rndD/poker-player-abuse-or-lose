var _ = require('lodash');

var vanya = function(cards) {
    if (!cards ) {
        return 8;
    }
    // Положительный.
    // Карманные пары
    if (cards[0].rank == cards[1].rank) {
        return 8;
    }

    if (cards[0].rank == 2 && cards[0].rank == 7) {
        return 0;
    }

    return 4;
};

function checkFlash(cards) {
    return _.every(cards, {'suit': cards[0].suit});
}

module.exports = vanya;
