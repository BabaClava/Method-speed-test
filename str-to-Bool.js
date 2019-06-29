'use strict'

const cycle = process.argv[2] || 10;
benchStart(cycle);

function benchStart(cycle) {
    
    console.log(`\r\nTest start with ${cycle} cycles`);
    console.time('Test duration');

    function bench(method) {
        let newArr = () => {
            let arr = [];
            for (let i = 0; i < 1e6; i++) {
                arr.push(`${i}`);            
            }
            return arr;
        }
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
    const testStart = new Date();
        const boolean = benchMean(i => Boolean(i), cycle);
        const double_not = benchMean(i => !!(i), cycle);
    const testEnd = new Date();
    const testDuration = testEnd - testStart;    

    // return `${('Boolean').padEnd(20, '-')}: ${boolean}ms <br>
    //         ${('"double not"(!!)').padEnd(20, '-')}: ${double_not}ms <br>
    //         cycles: ${cycle} <br>
    //         test duration: ${testDuration/1000}sec`;
    const result = {
        'Boolean': {'time': boolean},
        '"Double not"(!!)': {'time': double_not},
    }
    console.table(result);
    console.timeEnd('Test duration');
    console.log('\r\n')
}