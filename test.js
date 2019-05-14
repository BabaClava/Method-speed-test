(async () => {
    let result = await benchStart(20);
    document.getElementById('test').innerHTML = result
    document.title = 'complete.'
})()

async function benchStart(cycle) {

    function bench(method) {
        let newArr = () => {
            let arr = [];
            for (let i = 0; i < 1000000; i++) {
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
        const number = benchMean(i => Number(i), cycle);
        const parse_int = benchMean(i => parseInt(i), cycle);
        const plus = benchMean(i => +(i), cycle);
    const testEnd = new Date();
    const testDuration = testEnd - testStart;    

    return `${('Number').padEnd(20, '-')}: ${number}ms <br>
            ${('parseInt').padEnd(20, '-')}: ${parse_int}ms <br>
            ${('operator"+"').padEnd(20, '-')}: ${plus}ms <br>
            cycles: ${cycle} <br>
            test duration: ${testDuration/1000}sec`;
}