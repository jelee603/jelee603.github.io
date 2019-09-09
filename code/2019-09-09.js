/**
 *  async/await forEach
 *
 *  반복문을 돌면서 비동기의 값을 순차적으로 출력한다.
 */
const waitFor = (ms) => new Promise(r => setTimeout(r, ms))

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}

const start = async () => {
    await asyncForEach([1,2,3], async (num) => {
        await waitFor(50) // promise 를 걸고, await 로 기다린다.
        console.log(num) // 값을 순차적으로 출력한다.
    })
    console.log('Done') // 마지막에 Done 을 출력한다.
}

start()

// [출처] https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404