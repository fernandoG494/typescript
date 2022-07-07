const numbers = [1,2,3,4];

const sum = numbers.reduce(function (acc, num) {
    const updatedValue = acc + num;
    return updatedValue;
}, 0);

console.log(sum);