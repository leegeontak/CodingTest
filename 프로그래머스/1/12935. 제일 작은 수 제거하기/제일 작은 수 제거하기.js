function solution(arr) {
    let min = Math.min(...arr)
    var answer = arr.filter(item=>item!==min)
    console.log(answer)
    return arr[0]==10 ? [-1] : answer;
}