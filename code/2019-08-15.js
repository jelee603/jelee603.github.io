/**
 * Sherlock and Anagrams
 * 
 * 주어진 모든 단어를 찾은 배열을 만들고, 2개의 단어로 된 걸 체크하고, 중복되는 단어의 갯수를 센다. 
 */

 function sherlockAndAnagrams(s) {
  const resultArr = []
  let sum = 0

  for (let idx = 1; idx < s.length; idx++) {
    resultArr.push(getSubString(s, idx))
  }

  for (let i = 0; i < resultArr.length; i++) {
    sum += countAnagram(i, resultArr)
  }
  //  console.log(sum)
  return sum
 }

 function getSubString(str, end) {
   const newArr = []
   const len = (str.length + 1) - end
  for (let idx = 0; idx < len; idx++) {
    const arr = [...str.substring(idx, idx + end)].sort().join('')
    newArr.push(arr)
  }
  return newArr
 }

 function countAnagram(idx, arr) {
    let count = 0
    const targetArr = arr[idx]
    const len = targetArr.length
    for (let i = 0; i < len; i++) {
      for (let j = i; j < len; j++) {
        if (targetArr[i] === targetArr[j+1])
          count++
      }
    }
   return count
 }

sherlockAndAnagrams('kkkk')
// sherlockAndAnagrams('ifailuhkqq')


