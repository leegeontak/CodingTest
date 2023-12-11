function solution(s) {
    var answer = true;
    const arr = ["0","1","2","3","4","5","6","7","8","9"]
    if(s.length == 4||s.length == 6){
        for(let i = 0;i<s.length;i++){
            if(arr.indexOf(s[i]) == -1){
                console.log(s[i])
                answer = false
            }
        }
    } else{
        answer = false
    }
    
    return answer;
}