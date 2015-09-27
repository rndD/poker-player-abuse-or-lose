var sinon = require('sinon');
var expect = require('chai').expect;
var player = require('../player.js');
var cards = require('../cards.js');
var vanya2 = require('../vanya2.js')

describe('Poker', function () {
    var simpleFlopGameState;
    var simplePairCards;
    var simpleThreeCards = require('./test_data1.js').simpleThreeCards;
    var simpleFlushCards = require('./test_data1.js').simpleFlushCards;

    beforeEach(function () {
        simpleFlopGameState = require('./test_data1.js').simpleFlop;
        simplePairCards = require('./test_data1.js').simplePairCards;
    });

    describe('base', function () {
        it('player should', function () {
            var bet = player.bet_request(simpleFlopGameState);
            expect(bet).to.eql(0);
        });
    });

    describe('bet', function () {
        it('getMaxBetFromState', function () {
            var bet = player.getMaxBetFromState(simpleFlopGameState);
            expect(bet).to.eql(80);
        });
    });

    describe('vanya2', function() {

        it('should return pair true', function () {
            var catergorys = vanya2(simplePairCards);
            expect(catergorys.two).to.eql(true);
            expect(catergorys.flush).to.eql(false);
        });

        it('should return pair true', function () {
            var catergorys = vanya2(simpleThreeCards);
            expect(catergorys.two).to.eql(true);
            expect(catergorys.three).to.eql(true);
            expect(catergorys.flush).to.eql(false);
        });

        it('should return flush true', function () {
            var catergorys = vanya2(simpleFlushCards);
            expect(catergorys.two).to.eql(false);
            expect(catergorys.three).to.eql(false);
            expect(catergorys.flush).to.eql(true);
        });

    });
});
