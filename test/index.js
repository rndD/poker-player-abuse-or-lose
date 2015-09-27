var sinon = require('sinon');
var expect = require('chai').expect;
var player = require('../player.js');

describe('Poker', function () {
    var simpleFlopGameState;
    beforeEach(function () {
        simpleFlopGameState = require('./test_data1.js').simpleFlop;
    });

    describe('bet', function () {
        it('getMaxBetFromState', function () {
            var bet = player.getMaxBetFromState(simpleFlopGameState);
            console.log(bet)
            expect(bet).to.eql(3);
        });
    });
});
