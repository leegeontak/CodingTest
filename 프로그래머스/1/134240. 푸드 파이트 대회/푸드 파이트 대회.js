function solution(food) {
    var answer = '';
    for(let i =1;i<food.length;i++){
        for(let j = 0;j<Math.floor(food[i]/2);j++){
            answer+=i
        }
    }
    let afterWord = [...answer].reverse().join("");
    answer+="0"
    
    return answer+afterWord;
}