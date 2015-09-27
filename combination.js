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
        return getMaxRankCount(cards) === 4;
    },

    checkTrio: function checkTrio(cards) {
        return getMaxRankCount(cards) === 3;
    },

    checkPair: function checkPair(cards) {
        return getMaxRankCount(cards) === 2;
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
