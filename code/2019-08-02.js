/**
 * Left Rotation
 * 
 * a 은 숫자로 된 배열이고, n 은 배열의 길이이고
 * d 는 왼쪽으로 돌릴 횟수이다. 
 * d 횟수만큼 돌린 배열로 출력한다.
 */
 
function rotLeft(a, d) {
    const len = a.length
    const result = []
    let n = d;

    while (result.length < len) {
        result.push(a[n])
        if (n === len - 1) {
            n = 0
        } else {
            n++
        }
    }

    console.log(result)
    return result
}

rotLeft([1, 2, 3, 4, 5], 4)