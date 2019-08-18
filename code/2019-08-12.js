/**
 * Minimum Swaps 2
 *
 * swap 해서 오름차순으로 정렬하는데 최소 swap 횟수를 출력한다.
 */

function minimumSwaps(arr) {
    const start = 0;
    let count = 0;
    while (0 < arr.length) {
        const min = Math.min.apply(null, arr)
        const min_idx = arr.indexOf(min)

        if (start === min_idx) {
            arr.splice(min_idx, 1)
        } else {
            const [prev, curr] = [arr[min_idx], arr[start]]

            arr[start] = prev
            arr[min_idx] = curr
            arr.splice(start, 1)
            count++
        }
    }

    console.log(count)
    return count;
}


minimumSwaps([1, 3, 5, 2, 4, 6, 7])
minimumSwaps([4, 3, 1, 2])