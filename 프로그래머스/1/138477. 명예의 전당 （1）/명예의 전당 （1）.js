function solution(k, score) {
    var answer = [];
    let rank = [];
    for(let i = 0; i < score.length;i++){
        answer.push(score[i]);
        answer = answer.sort((a,b)=>b-a).slice(0,k);
        rank.push(answer[answer.length - 1])
    }
    console.log(rank)
    return rank;
}