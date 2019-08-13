/**
 * Sherlock and Anagrams
 * 
 * 문자열이 주어지고 애니그램은 하나의 문자와 다른 문자의 재배열이 쌍을 이루는 것을 말한다.
 * 각각 다른 애니그램의 갯수를 출력한다.
 */

function sherlockAndAnagrams(s) {
  let sameArr = []
  let count = 0
  Array.from(s).forEach(v => {
    if(!sameArr.includes(v)) { 
      sameArr.push(v)
    }
    // console.log(v)
  })

  count = sameArr.length + 1; 
  
  if (sameArr.length === s.length) {
    count = 0
  } else if (sameArr.length %2 === 0){
    count = sameArr.length + 2;
  }
  console.log(count)

  return count;
  // console.log(sameArr)
}

sherlockAndAnagrams("cdcd")
sherlockAndAnagrams("abba")
sherlockAndAnagrams("abcd")