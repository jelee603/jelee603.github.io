/**
 *  문자열 S가 주어졌을 때, 이 문자열의 단어만 뒤집어서 출력한다.
 *  특수문자(태그)가 있을 땐, 태그 사이의 값만 단어이다.
 *
 */
function reverseWord(input) {
    const start = input.indexOf(">")

    if (start !== -1) {
        const text = input.substr(start + 1, input.length)
        const end = text.indexOf("<")
        const exam2 = text.substr(0, end)
        const change = exam2.split(' ').map(v => [...v].reverse().join(''))

        return input.replace(exam2, change.join(' '))
    } else {
        return input.split(' ').map(v => [...v].reverse().join(''))
    }
}

console.log(reverseWord("baekjoon online judge"))
console.log(reverseWord("<ab cd>ef gh<ij kl>"))
console.log(reverseWord("<open>tag<close>"))
console.log(reverseWord("one1 two2 three3 4fourr 5five 6six"))
// [출처] https://www.acmicpc.net/problem/17413