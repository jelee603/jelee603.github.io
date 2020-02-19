const sample = [
    {
        name: 'success',
        data: [
            ['01', '20'],
            ['02', '40'],
            ['03', '25'],
        ],
    },
    {
        name: 'failed',
        data: [
            ['01', '0'],
            ['03', '1'],
        ],
    },
];

function init() {
    const i = 0;
    let dataset = [];

    for (let j = 0; j < sample[i].data.length; j++) {
        const time = sample[i].data[j][0];
        const value = sample[i].data[j][1];

        if (i === 0) {
            dataset.push([time, value]);
        }
    }
    return dataset;
}

function filter() {
    const names = sample.map(v => v.name);
    let dataset = init();

    for (let i = 1; i < sample.length; i++) {
        for (let j = 0; j < sample[i].data.length; j++) {
            const time = sample[i].data[j][0];
            let num = dataset.findIndex(v => v[0] === time);
            let value = sample[i].data[j][1];

            // console.log(time, value);
            // console.log(dataset.findIndex(v => v[0] === time));
            console.log(num);
            // 정확한 인덱스가 없을 경우
            for (let i = 0; i < num; i++) {
                const value = 'null';
                const org = dataset[i];

                if (org.length <= num) {
                    org.push(value);
                    dataset[i] = org;
                }
            }
            const org = dataset[num];
            org.push(value);
            dataset[num] = org;
        }
    }

    console.log(dataset);
    names.unshift('time');
    console.log(names);
    dataset.unshift(names);
    console.log(dataset);

}


console.log(filter());