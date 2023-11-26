function solution(number, limit, power) {
    var answer = [];
    
    for(let i = 1;i<=number;i++){
        let sum = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                sum += (j == i / j) ? 1 : 2;
            }
        }
        answer.push(sum)
    }
    console.log(answer)
    let newAnswer = answer.map(item=>{
         if(item > limit){
            return power
        }else {
             return item
        }
    }).reduce((arr,cur)=>arr+cur,0)
    
    return newAnswer;
}