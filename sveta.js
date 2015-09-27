var sveta = function(hand, turn) {
    if (hand.four || hand.straight_flush || hand.full_house) {
        return 8;
    }

    if (hand.flush || hand.straight || hand.three || hand.two) {
        return 4;
    }

    else return 0;
};

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
