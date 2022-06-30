function SeriesSum(n: number): string {
    if(n === 0) return '0.00';

    let acc: number = 0;

    for(let i = 0; i < n; i++){
        acc += Math.pow(1, n) / ((i * 3) + 1)
    }

    return acc.toFixed(2).toString();
}

console.log(SeriesSum(5));
