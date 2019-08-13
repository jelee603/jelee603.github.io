/**
 * Mark and Toys
 * 
 * n, k가 있으며, n은 갯수 k는 가격이다.
 * prices 배열이 주어지면 k 값만큼의 물건을 최대한 많이 사서 그 갯수를 출력한다.
 */

 function maximumToys(prices, k) {
    let sum = 0
    let count = 0

    while (sum <= k) {
      const minValue = Math.min.apply(null, prices)
      const index = prices.indexOf(minValue)
      prices.splice(index, 1)
      sum += minValue
      if(sum > k) break
      count++
    }
    console.log(count)
    return count
 }


 maximumToys([1, 12, 5, 111, 200, 1000, 10], 50)
