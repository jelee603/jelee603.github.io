/**
 * Two Strings
 *
 * 문자가 2개 주어지고, 문자로 나눴을 때 공통 문자가 있으면 YES, 아니라면 NO 를 출력한다.
 */

function twoStrings(s1, s2) {
    let result = 'NO'

    Array.from(s1).forEach(v => {

        if (s2.includes(v)) {
            result = 'YES'
        }
    })

    console.log(result)
    return result
}



twoStrings('hello','world');
twoStrings('hi','world');