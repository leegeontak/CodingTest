function solution(a, b, n) {
    var answer = 0;
    let coke = 0;
    let emptyBottle = n
    while(emptyBottle >= a){
        answer = Math.floor(emptyBottle/a) * b + emptyBottle % a;
        coke += Math.floor(emptyBottle/a) * b
        emptyBottle = answer
        
        console.log(coke)
    }
    return coke;
}