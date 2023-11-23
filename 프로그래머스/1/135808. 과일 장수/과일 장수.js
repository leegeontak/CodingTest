function solution(k, m, score) {
    var answer = 0;
    let newScore = score.sort((a,b)=>b-a);
    for(let i = 0;i<newScore.length;i+=m){
        let price = newScore.slice(i,i+m)
        if(price.length == m){
            answer+= price[price.length - 1] * m
        }
    }
    
    return answer;
}