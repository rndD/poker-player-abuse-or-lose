// вовзращает твои карты
module.exports.ourCards = function(gameState) {
    var people = gameState.players;

    var cards = [];
    people.forEach(function(player) {
        if (player.id === 3) {
            cards = player["hole_cards"];
        }
    });
    return cards;
};
