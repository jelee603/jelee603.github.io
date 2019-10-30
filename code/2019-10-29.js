/**
 * 같은 프로퍼티가 있으면 나중값으로 교체되지 않고 이전값과 병합할 수 있다.
 *
 * @param target
 * @param source
 * @returns {*}
 */
function mergeForce (target, source) {
    for (const key in source) {
        if (target[key]) {
            const mergeDeep = Object.assign(target[key], source[key]);

            Object.assign(target, {[key]: mergeDeep});
        }
    }
    return target;
}

const testA = {a: 1, b: {c: 1, d: 2}, f: 1};
const testB = {b: {e: 5}};

const result = mergeForce(testA, testB);
console.log("testA: ", testA);
console.log("testB: ", testB);
console.log("result: ", result);