function solution(cards1, cards2, goal) {
    var answer = '';
    let init = 0;
    while(init !== goal.length){
        if(goal[init] == cards1[0]){
            cards1.shift();
            init++
        } else if(goal[init] == cards2[0]){
             cards2.shift();
            init++
        } else{
            return answer = "No"
        }
    }
    if(init == goal.length){
        answer = "Yes"
    }
    return answer;
}