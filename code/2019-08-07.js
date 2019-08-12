/**
 * Sorting: Bubble Sort
 *
 * 마지막에서 한칸씩 앞으로 오면서 바로 이전 값과 비교 => n, n-1
 * 큰 값이면 뒤로 이동
 * 이와 같은 반복을 정렬이 끝날때까지 계속 한다.
 */

function countSwaps(n, a) {
    let count = 0
    // const min = Math.min.apply(null, a)
    for (let loop = 0; loop < n; loop++) {
        for (let idx = a.length, len = 0; len < idx; idx--) {

            let [prev, curr] = [a[idx-1], a[idx]]
            if (prev > curr) {
                [prev, curr] = [curr, prev]
                a[idx] = curr
                a[idx-1] = prev
                count++
            }
        }
    }
   
    console.log(`Array is sorted in ${count} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[a.length-1]}`)
}

// countSwaps([1, 2, 3])
// countSwaps([2, 1, 5, 3, 4])
countSwaps(3, [1, 2, 3])
