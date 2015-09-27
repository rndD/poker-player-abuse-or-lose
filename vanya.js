var vanya = function(cards) {
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

module.exports = vanya;
