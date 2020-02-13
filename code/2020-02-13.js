// case 1
const list = [
    { data: [{ fail: 0, success: 1 }, { fail: 1, success: 3 }] },
    { data: [{ fail: 4, success: 5 }, { fail: 6, success: 5}] }
];

function sum(list) {
    const failSum = list.map(v => v.fail).reduce((a, b) => a + b);
    const successSum = list.map(v => v.success).reduce((a, b) => a + b);

    return [failSum, successSum]
}

function getList() {
    const dataset = [];
    for (let i = 0; i < list.length; i++) {
        const data = list[i].data;
        const result = sum(data);
        dataset.push(result);
    }
    return dataset;
}

const dataset = getList();

console.log(dataset[0]); // [1, 4]
console.log(dataset[1]); // [10, 10]



// case 2
function sum2(list) {
    const obj = {};
    const a = list[0].data[0];
    const b = list[0].data[1];

    return Object.keys(a).map(v => obj[v] = a[v] + b[v]);
}

console.log(sum2(list));

// [참고]: https://stackoverflow.com/questions/43249813/how-to-sum-two-object-values-in-javascript/43249890


// date - timeline
console.log(Array.from(Array(25), (_, idx) => idx < 10 ? `0${idx}`: `${idx}`));
