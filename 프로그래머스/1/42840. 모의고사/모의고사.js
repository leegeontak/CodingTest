function solution(answers) {
    var answer = [];
    let student1 = "12345".repeat(Math.ceil(answers.length/5));
    let student1Score = 0;
    
    let student2 = "21232425".repeat(Math.ceil(answers.length/8))
    let student2Score = 0;
    
    let student3 = "3311224455".repeat(Math.ceil(answers.length/10))
    let student3Score = 0;
    answers.filter((item,idx)=>{
        if(item == [...student1][idx]){
            student1Score++;
        }
    })
    answers.filter((item,idx)=>{
        if(item == [...student2][idx]){
            student2Score++;
        }
    })
    answers.filter((item,idx)=>{
        if(item == [...student3][idx]){
            student3Score++;
        }
    })
    let maxStudent = Math.max(student1Score,student2Score,student3Score)
    
    if(maxStudent == student1Score){
        answer.push(1)
    }
    if(maxStudent == student2Score){
        answer.push(2)
    }
    if(maxStudent == student3Score){
        answer.push(3)
    }
    return answer;
}