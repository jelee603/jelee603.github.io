// Sorting: Bubble Sort
function countSwaps(a) {
    let count = 0
    let arr = []
    for (let idx = 0, len = a.length; idx < len; idx++) {
        if (a[idx] > a[idx + 1]) {
            const [v1, v2] = swap(a[idx], a[idx + 1])
            arr.push(v1)
            arr.push(v2)
            count++
        }
    }

    console.log(`Array is sorted in ${count} swaps.`)
    console.log(`First Element: ${arr.length? arr[0] : a[0]}`)
    console.log(`Last Element: ${arr.length ? arr[a.length-1]: a[a.length-1]}`)
}

function swap(a, b) {
    return [a, b] = [b, a]
}


// countSwaps([1, 2, 3])
countSwaps([4, 2, 3, 1])
