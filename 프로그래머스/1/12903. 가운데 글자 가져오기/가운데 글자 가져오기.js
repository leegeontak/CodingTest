function solution(s) {
    var answer = '';
    centerString = s.length % 2
    if(centerString == 1){
        answer = s[Math.floor(s.length/2)]
    }else{
        answer = s[Math.floor(s.length/2)-1] + s[Math.floor(s.length/2)] 
    }
    return answer;
}