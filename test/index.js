var sinon = require('sinon');
var expect = require('chai').expect;
var player = require('../player.js');

describe('Poker', function () {
    var simpleFlopGameState;
    beforeEach(function () {
        simpleFlopGameState = require('./test_data1.js').simpleFlop;
    });

    describe('base', function () {
        it('player should', function () {
            var bet = player.bet_request(simpleFlopGameState);
            expect(bet).to.eql(120);

        });
    });

    describe('bet', function () {
        it('getMaxBetFromState', function () {
            var bet = player.getMaxBetFromState(simpleFlopGameState);
            expect(bet).to.eql(80);
        });
    });
});
