function solution(survey, choices) {
    var answer = '';
    let obj = {
        R:0,
        T:0,
        C:0,
        F:0,
        J:0,
        M:0,
        A:0,
        N:0
    }
    
    for(let i = 0; i<survey.length;i++){
        if(choices[i]>4){
            obj[survey[i][1]]+= (choices[i]-4)
        } else {
            obj[survey[i][0]] += (4-choices[i])
        }
    }
    
    answer += obj.R >= obj.T ? "R" : "T"
    answer += obj.C >= obj.F ? "C" : "F"
    answer += obj.J >= obj.M ? "J" : "M"
    answer += obj.A >= obj.N ? "A" : "N"
    return answer;
}