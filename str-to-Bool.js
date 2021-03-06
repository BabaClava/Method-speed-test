'use strict'

const cycle = process.argv[2] || 20;
benchStart(cycle);

function benchStart(cycle) {

    console.log(`\r\nTest start with ${cycle} cycles`);
    console.time('Test duration');

    function bench(method) {
        let newArr = () => new Array(1e6).fill('123');
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
    
    const boolean = benchMean(i => Boolean(i), cycle);
    const double_not = benchMean(i => !!(i), cycle);

    const result = {
        'Boolean': {'time': boolean},
        '"Double not"(!!)': {'time': double_not},
    }
    console.table(result);
    console.timeEnd('Test duration');
    console.log('\r\n')
}