function solution(lottos, win_nums) {
    var answer = [];
    let highestRank = [];
    let lowestRank = [];
    for(let i =0;i<lottos.length;i++){
        if(win_nums.indexOf(lottos[i])!==-1){
            //번호가 맞으면 최저배열과 최고배열 둘다 push
            highestRank.push(lottos[i])
            lowestRank.push(lottos[i])
        }
        if(lottos[i] == 0){
            //번호가 0이면 최고배열에만 push
            highestRank.push(lottos[i])
        }
    }
    switch(highestRank.length){
        case 0:
            answer.push(6)
            break
        case 1:
            answer.push(6)
            break
        case 2:
            answer.push(5)
            break
        case 3:
            answer.push(4)
            break
        case 4:
            answer.push(3)
            break
        case 5:
            answer.push(2)
            break
        case 6:
            answer.push(1)
            break
    }
    switch(lowestRank.length){
        case 0:
            answer.push(6)
            break
        case 1:
            answer.push(6)
            break
        case 2:
            answer.push(5)
            break
        case 3:
            answer.push(4)
            break
        case 4:
            answer.push(3)
            break
        case 5:
            answer.push(2)
            break
        case 6:
            answer.push(1)
            break
    }
    console.log(highestRank)
    console.log(lowestRank)
    return answer;
}