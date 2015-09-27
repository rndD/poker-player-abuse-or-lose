var _ = require('lodash');

module.exports = {
    checkFlash: function checkFlash(cards) {
        var suits = _.reduce(
            _.values(
                _.countBy(cards, 'suit')
            ), function (max, current) {
                return current > max ? current : max;
            }, 0
        );

        return suits === 5 || suits === cards.length;
    },

    checkFour: function checkFour(cards) {
        return getMaxRankCount(cards) >= 4;
    },

    checkTrio: function checkTrio(cards) {
        return getMaxRankCount(cards) >= 3;
    },

    checkPair: function checkPair(cards) {
        return getMaxRankCount(cards) >= 2;
    },

    checkTwoPair: function checkTwoPair(cards) {
        var vals = _.values(
            _.countBy(cards, 'rank')
        );

        return _.filter(vals, function (val) {return val >= 2}).length >= 2;
    },

    checkFullHouse: function checkFullHouse(cards) {
        var vals = _.values(
            _.countBy(cards, 'rank')
        );

        return _.filter(vals, function (val) {return val >= 2}).length >= 2;
    },

    checkStraight: function checkStraight(cards) {
        var normalizedCards = normalizeCards(cards);

        if (cards.length <= 5) {
            var ranks = _.pluck(normalizedCards, 'rank');
            var sortedByRank = ranks.sort(function (a, b) {
                return a < b;
            });

            for (var i = 1; i < sortedByRank.length; i++) {
                if (sortedByRank[i] !== sortedByRank[i - 1] + 1) {
                    return false;
                }
            }
            return true;
        } else {
            return false;
        }
    },

    checkStraightFlush: function checkStraightFlush(cards) {
        if (cards.length <= 5) {
            return checkStraight(cards) && checkFlash(cards);
        } else {
            return false;
        }
    }
};

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

function checkStraight(cards) {
    var normalizedCards = normalizeCards(cards);

    if (cards.length <= 5) {
        var ranks = _.pluck(normalizedCards, 'rank');
        var sortedByRank = ranks.sort(function (a, b) {
            return a < b;
        });

        for (var i = 1; i < sortedByRank.length; i++) {
            if (sortedByRank[i] !== sortedByRank[i - 1] + 1) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

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
