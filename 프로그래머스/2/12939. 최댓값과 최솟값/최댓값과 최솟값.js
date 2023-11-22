function solution(s) {
    var answer = '';
    let MaxMin = s.split(" ").sort((a,b)=>a-b)
    answer = MaxMin[0] + " " + MaxMin[MaxMin.length - 1]
    return answer;
}