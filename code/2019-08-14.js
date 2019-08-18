/**
 * Sherlock and Anagrams
 *
 * 애너그램은 하나의 문자를 다른 문자로 재배열해서 다른 뜻을 가진 문자로 바꾸는 것을 말한다.
 * 문자열이 주어지고 문자열 중에 단어를 재배열하면 다른 문자가 된다.
 * 각 다른 애너그램의 단어의 pair 갯수를 출력한다.
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

  if (sameArr.length !== s.length) {
    count = sameArr.length + 1;
  } else if (sameArr.length % 2 === 0){
    count = sameArr.length + 2;
  }
  console.log(count)

  return count;
  // console.log(sameArr)
}

sherlockAndAnagrams("cdcd") // [c, c], [d, d], [cd, cd], [cd, dc], [dc, cd]
sherlockAndAnagrams("abba")
sherlockAndAnagrams("abcd")