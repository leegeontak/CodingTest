function solution(n, m, section) {
    var answer = 0;
    let painted = 0;
    section.forEach((item)=>{
        if(item > painted){
            painted = item + m - 1;
            answer++;
        }
    })
    return answer;
}