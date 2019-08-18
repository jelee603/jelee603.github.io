/**
 * Ransom Note
 * 
 * 주어진 문장의 단어로만 이뤄지면 Yes, 아니면 No 로 출력한다.
 */

function checkMagazine(magazine, note) {
  // const magazineString = magazine.toString().split(',').join(' ')
  let arr = []
  let dic = []

  // magazine 의 순서에 가중치를 준다
  for (let ix = 0; ix < magazine.length; ix++) {
    if (dic[magazine[ix]]) {
      dic[magazine[ix]] += 1
    } else {
      dic[magazine[ix]] = 1
    }
  }

  for (let jx = 0; jx < note.length; jx++) {
    if (dic[note[jx]] && dic[note[jx]] > 0) {
      dic[note[jx]]--
      arr.push(true)
    }
  }

  const result = arr.length === note.length ? 'Yes' : 'No'
  console.log(result)
  return result
}

checkMagazine(['two', 'times', 'three', 'is', 'not', 'four'], ['two', 'times', 'two', 'is', 'four'])
// checkMagazine(['two', 'times', 'three', 'is', 'not', 'four'], ['two', 'times'])
// checkMagazine(['give', 'me', 'one', 'grand', 'today', 'night'], ['give', 'one', 'grand', 'today'])