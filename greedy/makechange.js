function makeChange(origin, coins) {
    var remain = 0;
    if (origin % 0.25 < origin) {
        coins[3] = parseInt(origin / 0.25);
        remain = origin % 0.25;
        origin = remain
    }
    if (origin % 0.1 < origin) {
        coins[2] = parseInt(origin / 0.1);
        remain = origin % 0.1;
        origin = remain
    }
    if (origin % 0.05 < origin) {
        coins[1] = parseInt(origin / 0.05);
        remain = origin % 0.05;
        origin = remain
    }
    coins[0] = parseInt(origin / 0.01);
}

function showChange(coins) {
    if (coins[3] > 0) {
        print('Number of 25 cent - ' + coins[3] + ' - ' + coins[3] * 0.25);
    }
    if (coins[2] > 0) {
        print('Number of 10 cent - ' + coins[2] + ' - ' + coins[2] * 0.1);
    }
    if (coins[1] > 0) {
        print('Number of 5 cent - ' + coins[1] + ' - ' + coins[1] * 0.05);
    }
    if (coins[0] > 0) {
        print('Number of 1 cent - ' + coins[0] + ' - ' + coins[0] * 0.01);
    }
}

var origin = 0.63;
var coins = [];
makeChange(origin, coins);
showChange(coins);