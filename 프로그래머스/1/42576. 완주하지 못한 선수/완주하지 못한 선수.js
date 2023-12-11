function solution(participant, completion) {
    var answer = '';
    let person = participant.sort();
    let finishPerson = completion.sort()
    
    for(let i = 0; i<person.length;i++){
        if(person[i] !== finishPerson[i]){
            return answer = person[i]
        }
    }
    return answer;
}