const coins = require('./coins');

const totalPrice = coins.reduce(function (acc, coin) {
    const totalPrice = acc + coin.current_price;
    return totalPrice;
}, 0);

console.log(totalPrice);
