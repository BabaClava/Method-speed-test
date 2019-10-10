'use strict'

const cycle = process.argv[2] || 10;
benchStart(cycle);

function benchStart(cycle) {

    console.log(`\r\nTest start with ${cycle} cycles`);
    console.time('Test duration');

    function bench(method) {
        const newArr = () => new Array(1e6).fill('123');
        const startDate = new Date();
        newArr().forEach(method);
        const endDate = new Date();

        return endDate - startDate;
    }

    function benchMean(method, cycle) {
        let sum = [];
        for (let i = 0; i < cycle; i++) {
            sum.push(bench(method));
        }
        return sum.reduce((a,b) => a+b) /sum.length;
    }
    
    const number = benchMean(i => Number(i), cycle);
    const parse_int = benchMean(i => parseInt(i), cycle);
    const plus = benchMean(i => +(i), cycle);
    
    const result = {
        'Number': {'time': number},
        'parseInt': {'time': parse_int},
        'plus(+)': {'time': plus}
    }
    console.table(result);
    console.timeEnd('Test duration');
    console.log('\r\n')
}
