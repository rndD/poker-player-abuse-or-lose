var sveta = function(hand, turn) {
    switch(turn) {
        case 2: return twoCard(hand);
        case 5: return fiveCard(hand);
        case 6: return sixCard(hand);
        case 7: return sevenCard(hand);
    }

    console.log('&&SVETA ERROR');
    return twoCard(hand);
};

function twoCard(hand) {
    if (hand.two) {
        return 4;
    }

    else return 0;
}

function fiveCard(hand) {
    if (hand.four || hand.straight_flush || hand.full_house || hand.flush) {
        return 8;
    }

    if (hand.straight || hand.three || hand.two) {
        return 4;
    }

    else return 0;
}

function sixCard(hand) {
    if (hand.four || hand.straight_flush || hand.full_house || hand.flush) {
        return 8;
    }

    if (hand.straight || hand.three || hand.two) {
        return 4;
    }

    else return 0;
}

function sevenCard(hand) {
    if (hand.four || hand.straight_flush || hand.full_house || hand.flush) {
        return 8;
    }

    if (hand.straight || hand.three) {
        return 4;
    }

    else if (hand.two) {
        return 0;
    }

    else return 0;
}

module.exports = sveta;


//var hand_categories = {
//    "straight_flush": true,
//    "four": true,
//    "full_house": true,
//    "flush": true,
//    "straight": true,
//    "three": true,
//    "two": true
//}
