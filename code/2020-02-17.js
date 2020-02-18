const a = ['test1', 'test2'];
const b = [['t1', 'a'], ['t2', 'c']];

const test = [[...a], ...b];
console.log(test);