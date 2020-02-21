const history = [
    {
        date: 1582124400,
        hourList: [
            { hour: 0, success: 1, fail: 0, running: 0 },
            { hour: 1, success: 1, fail: 0, running: 0 },
            { hour: 2, success: 1, fail: 0, running: 0 },
            { hour: 3, success: 1, fail: 0, running: 0 },
            { hour: 4, success: 1, fail: 0, running: 0 },
            { hour: 5, success: 1, fail: 0, running: 0 },
            { hour: 6, success: 1, fail: 0, running: 0 },
            { hour: 7, success: 1, fail: 0, running: 0 },
            { hour: 8, success: 1, fail: 0, running: 0 },
            { hour: 9, success: 1, fail: 0, running: 0 },
            { hour: 10, success: 1, fail: 0, running: 0 },
            { hour: 11, success: 1, fail: 0, running: 0 },
            { hour: 12, success: 1, fail: 0, running: 0 },
            { hour: 13, success: 0, fail: 0, running: 1 },
            { hour: 14, success: 0, fail: 0, running: 0 },
            { hour: 15, success: 0, fail: 0, running: 0 },
            { hour: 16, success: 0, fail: 0, running: 0 },
            { hour: 17, success: 0, fail: 0, running: 0 },
            { hour: 18, success: 0, fail: 0, running: 0 },
            { hour: 19, success: 0, fail: 0, running: 0 },
            { hour: 20, success: 0, fail: 0, running: 0 },
            { hour: 21, success: 0, fail: 0, running: 0 },
            { hour: 22, success: 0, fail: 0, running: 0 },
            { hour: 23, success: 0, fail: 0, running: 0 },
        ],
    },
];


function test() {
    const dataset = [];

    for (let i = 0; i < history.length; i++) {
        const items = history[i].hourList;
        for (let j = 0; j < items.length; j++) {
            const item = Object.values(items[j]);
            dataset.push(item);
        }
        console.log(dataset);
    }
    return dataset;
}

console.log(test());
